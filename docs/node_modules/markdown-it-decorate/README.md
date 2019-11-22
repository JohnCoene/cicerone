# markdown-it-decorate

> Add attributes, IDs and classes to Markdown

Annotate your Markdown documents with HTML comments to add classes to HTML elements. Supported for and tested on [markdown-it] 6.x, 7.x, and 8.x.

```html
Hello, from *Markdown*!
<!-- {.center} -->
```

```html
<p class='center'>Hello, from <em>Markdown</em>!</p>
```

[![Status](https://travis-ci.org/rstacruz/markdown-it-decorate.svg?branch=master)](https://travis-ci.org/rstacruz/markdown-it-decorate "See test builds")

## Usage

Install the `markdown-it-decorate` package alongside `markdown-it` (they are peer dependencies).

```sh
yarn add --exact markdown-it markdown-it-decorate
# or:
npm install --save --save-exact markdown-it markdown-it-decorate
```

`markdown-it-decorate` can be loaded as a plugin using `use()`.

```js
const md = require('markdown-it')()
  .use(require('markdown-it-decorate'))
```

## Cheatsheet

You can add classes, ID's, or attributes. (See [§ Annotating elements](#annotating-elements))

| Source | Output |
|----|----|
| `Text <!--{.center}-->` | `<p class='center'>Text</p>` |
| `Text <!-- {.center} -->` | `<p class='center'>Text</p>` |
| `# Hola <!-- {.center.red} -->` | `<h1 class='center red'>Hola</h1>` |
| `# Hola <!-- {#top .hide} -->` | `<h1 id='top' class='hide'>Hola</h1>` |
| `# Hola <!-- {data-show="true"} -->` | `<h1 data-show='true'>Hola</h1>` |
| `![Image](img.jpg)<!-- {width=20} -->` | `<img src='img.jpg' alt='Image' width='20'>` |

You can specify the element name to decorate. (See [§ Disambiguating](#disambiguating))

| Source | Output |
|----|----|
| `# Hi *world* <!-- {.red} -->` | `<h1>Hi <em class='red'>world</em></h1>` |
| `# Hi *world* <!-- {h1:.red} -->` | `<h1 class='red'>Hi <em>world</em></h1>` |
| `# *Hi* *world* <!-- {em^1:.red} -->` | `<h1><em class='red'>Hi</em> <em>world</em></h1>` |

## Annotating elements

Create an HTML comment in the format `<!-- {...} -->`, where `...` can be a `.class`, `#id`, `key=attr` or a combination of any of them. The spaces around `{}` are optional. Be sure to render markdownIt with `html: true` to enable parsing of `<!--{comments}-->`.

```html
<!--{.class}-->
<!-- {.class} -->
<!-- {.class1.class2} -->
<!-- {.class1 .class2} -->
<!-- {#id} -->
<!-- {attr="val"} -->
```

You can put the comment in the same line or in the next. I recommend keeping it on a separate line, since this will make GitHub ignore it.

```html
# Hello! <!-- {.center} -->
```

```html
# Hello!
<!-- {.center} -->
```

## Disambiguating

By default, annotations will be applied to the deepest element preceding it. In the case below, `.wide` will be applied to the link (*"Next"*).

```md
> This is a blockquote
>
> * It has a list.
> * You can specify tag names. [Next](#next)
> <!-- {.wide} -->
```

### Specifying elements

To make it apply to a different element, precede your annotations with the tag name followed by a `:`.

```md
> * It has a list.
> * You can specify tag names. [Next](#next) <!-- {li:.wide} -->
```

### Combining

You can combine them as you need. In this example, the link gets `.button`, the list item gets `.wide`, and the blockquote gets `.bordered`.

```md
> * [Continue](#continue)
<!-- {a:.button} -->
<!-- {li:.wide} -->
<!-- {blockquote:.bordered} -->
```

```html
<blockquote class="bordered">
  <ul>
    <li class="wide">
      <a href="#continue" class="button">Continue</a>
    </li>
  </ul>
</blockquote>
```

### Selecting same names

To go back to previous parent with the same name, add `^n` after the tag name, where `n` is how many levels deep to go back to. Using `^0` is the same as not specifying it at all. (This convention is taken from [gitrevisions](http://git-scm.com/docs/gitrevisions).)

```md
> > > targets 3rd quote <!--{blockquote:.wide}-->
```

```md
> > > targets 2nd quote <!--{blockquote^1:.wide}-->
```

```md
> > > targets 1st quote <!--{blockquote^2:.wide}-->
```

### Decorating code blocks

You can decorate code blocks. You may choose to decorate `pre`, `code`, or even both.

    ```
    return true;
    ```
    <!-- {code: .lang-javascript} -->

Indented code blocks are only supported in markdown-it 7.x or later.

```
    // this is a code block
    return true;

<!-- {code: .lang-javascript} -->
```

## Prior art

* This is initially based off of [arve0/markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) which uses text to annotate blocks (eg, `{.class #id}`). markdown-it-attr's approach was based off of [Pandoc's header attributes](http://pandoc.org/README.html#extension-header_attributes).

* [Maruku](http://maruku.rubyforge.org/) (Ruby Markdown parser) also allows for block-level attributes and classnames with its [meta-data syntax](http://maruku.rubyforge.org/proposal.html). The syntax is similar to PanDoc's syntax (`{: .class #id}`).

* [Kramdown](http://kramdown.gettalong.org/) (Ruby markdown parser) also supports the same syntax, also with a colon (`{: .class #id}`).

## Motivation

markdown-it-decorate is inspired by the design of those features and improves on them:

* Elements are marked via HTML comments; they'll be invisible to other Markdown parsers like GitHub's.
* It supports inline elements in addition to block elements.

## Thanks

**markdown-it-decorate** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/markdown-it-decorate/contributors
[markdown-it]: https://www.npmjs.com/package/markdown-it
