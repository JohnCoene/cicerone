'use strict'
/* eslint-disable no-cond-assign */

var tagExpr = /^<!-- ?\{(?:([a-z0-9]+)(\^[0-9]*)?: ?)?(.*)\} ?-->\n?$/

module.exports = function attributes (md) {
  md.core.ruler.push('curly_attributes', curlyAttrs)
}

/*
 * List of tag -> token type mappings. Eg, `<li>` is `list_item_open`.
 */

var opening = {
  li: ['list_item'],
  ul: ['bullet_list'],
  p: ['paragraph'],
  ol: ['ordered_list'],
  blockquote: ['blockquote'],
  h1: ['heading'],
  h2: ['heading'],
  h3: ['heading'],
  h4: ['heading'],
  h5: ['heading'],
  h6: ['heading'],
  a: ['link'],
  code: ['code_inline', 'code_block', 'fence']
}

var selfClosing = {
  hr: true,
  image: true
}

/**
 * ...
 */

function curlyAttrs (state) {
  var tokens = state.tokens
  var omissions = []
  var parent, m
  var stack = { len: 0, contents: [], types: {} }

  tokens.forEach(function (token, i) {
    // Save breadcrumbs so html_block will pick it up
    if (isOpener(token.type) || selfClosing[token.type]) {
      spush(stack, token)
    }

    // "# Hello\n<!--{.classname}-->"
    // ...sequence of [heading_open, inline, heading_close, html_block]
    if (token.type === 'html_block') {
      m = token.content.match(tagExpr)
      if (!m) return

      parent = findParent(stack, m[1], m[2])
      if (parent && applyToToken(parent, m[3])) {
        omissions.unshift(i)
      }
    }

    // "# Hello <!--{.classname} -->"
    // { type: 'inline', children: { ..., '<!--{...}-->' } }
    if (token.type === 'inline') {
      curlyInline(token.children, stack)
    }
  })

  // Remove <!--...--> html_block tokens
  omissions.forEach(function (idx) { return tokens.splice(idx, 1) })
}

/**
 * Internal: checks in a token type is a block opener
 */

function isOpener (type) {
  return type.match(/_(open|start)$/) ||
    type === 'fence' || type === 'code_block'
}

/**
 * Internal: Run through inline and stuff
 */

function curlyInline (children, stack) {
  var lastText, m, parent

  // Keep a list of sub-tokens to be removed
  var omissions = []

  children.forEach(function (child, i) {
    if (isOpener(child.type) ||
      selfClosing[child.type] ||
      child.type === 'code_inline') {
      spush(stack, child)
    }

    // Decorate tags are found
    if (m = child.content.match(tagExpr)) {
      var tag = m[1]
      var depth = m[2]
      var attrs = m[3]

      // Remove the comment, then remove the extra space
      parent = findParent(stack, tag, depth)
      if (parent && applyToToken(parent, attrs)) {
        omissions.unshift(i)
        if (lastText) trimRight(lastText, 'content')
      }
    }

    if (child.type === 'text') lastText = child
  })

  // Remove them in a separate step so we don't
  omissions.forEach(function (idx) {
    children.splice(idx, 1)
  })
}

/**
 * Private: given a list of tokens `list` and `lastParent`, find the one that
 * matches `tag`.
 */

function findParent (stack, tag, depth) {
  if (!tag) return stack.last

  if (depth === '^') {
    depth = 1
  } else if (typeof depth === 'string') { /* '^2' */
    depth = +depth.substr(1)
  } else {
    depth = 0
  }

  var targets = opening[tag.toLowerCase()] || [tag.toLowerCase()]

  var target = targets.filter(function (target) {
    return stack.types[target]
  })

  var list = stack.types[target]
  if (!list) return // Can't find tag `tag`

  return list[list.length - 1 - depth]
}

/**
 * Private: trim the right
 */

function trimRight (obj, attr) {
  obj[attr] = obj[attr].replace(/\s*$/, '')
}

/**
 * Private: apply tag to token
 *
 *     applyToToken(token, '.classname')
 */

function applyToToken (token, attrs) {
  var m
  var todo = []

  while (attrs.length > 0) {
    if (m = attrs.match(/^\s*\.([a-zA-Z0-9\-_]+)/)) {
      todo.push([ 'class', m[1], { append: true } ])
      shift()
    } else if (m = attrs.match(/^\s*#([a-zA-Z0-9\-_]+)/)) {
      todo.push([ 'id', m[1] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)="([^"]*)"/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)='([^']*)'/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)=([^ ]*)/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)/)) {
      todo.push([ m[1], '' ])
      shift()
    } else if (m = attrs.match(/^\s+/)) {
      shift()
    } else {
      return
    }
  }

  todo.forEach(function (args) { setAttr.apply(this, [token].concat(args)) })
  return true

  function shift () {
    attrs = attrs.substr(m[0].length)
  }
}

/**
 * Private: sets an attribute `attr` to `value` in a token. If `options.append`
 * is true, append to the old value instead of overwriting it.
 */

function setAttr (token, attr, value, options) {
  var idx = token.attrIndex(attr)

  if (idx === -1) {
    token.attrPush([ attr, value ])
  } else if (options && options.append) {
    token.attrs[idx][1] =
      token.attrs[idx][1] + ' ' + value
  } else {
    token.attrs[idx][1] = value
  }
}

/**
 * Private: pushes a token to the stack
 */

function spush (stack, token) {
  var type = token.type.replace(/_(open|start)$/, '')
  if (!stack.types[type]) { stack.types[type] = [] }
  stack.types[type].push(token)
  stack.last = token
}
