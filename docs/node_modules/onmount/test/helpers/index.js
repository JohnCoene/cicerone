exports.el = function el (name, options) {
  if (!options) options = {}
  var div = document.createElement(name)
  if (options['class']) div.className = options['class']
  if (options.role) div.setAttribute('role', options.role)
  document.body.appendChild(div)
  return div
}

exports.remove = function remove (el) {
  el && el.parentNode && el.parentNode.removeChild(el)
}
