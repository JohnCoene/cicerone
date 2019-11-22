// <%= name %> v<%= version %>
// <%= site %>
//
// Stylus integration via https://github.com/rstacruz/iconfonts.
// Usage:
//
//    <%= prefix %>-font();
//    .button:before {
//      <%= prefix %>-icon("arrow");
//      <%= prefix %>-icon("arrow", 14px, #333);
//    }
//
// Output:
//
//    @font-face {
//      font-family: "<%= name %>"; ...
//    }
//    .button:before {
//      font-family: "<%= name %>";
//      content: '\f0123';
//    }
//
// Icon files:
//
//     <%= urlpath %><%= basename %>.eot
//     <%= urlpath %><%= basename %>.ttf
//     <%= urlpath %><%= basename %>.woff
//     <%= urlpath %><%= basename %>.svg

<%= prefix %> = {
  path: "<%= path %>"
  name: "<%= name %>"
  site: "<%= site %>"
  basename: "<%= basename %>"
  version: "<%= version %>"
  svghash: "<%= svghash %>"
  nativesize: "<%= nativesize %>"
}

<%= prefix %>-font()
  @font-face
    font-family: <%= prefix %>['name']
    src: url(<%= prefix %>['path'] + <%= prefix %>['basename'] + '.eot?v=' + <%= prefix %>['version'])
    src: url(<%= prefix %>['path'] + <%= prefix %>['basename'] + '.eot?#iefix&v=' + <%= prefix %>['version']) format("embedded-opentype"),
         url(<%= prefix %>['path'] + <%= prefix %>['basename'] + ".woff?v=" + <%= prefix %>['version']) format("woff"),
         url(<%= prefix %>['path'] + <%= prefix %>['basename'] + ".ttf?v=" + <%= prefix %>['version']) format("truetype"),
         url(<%= prefix %>['path'] + <%= prefix %>['basename'] + ".svg?v=" + <%= prefix %>['version'] + <%= prefix %>['svghash']) format("svg")
    font-weight: normal
    font-style: normal

//
// Uses a given icon.
//
//     .button:before
//       <%= prefix %>-icon("music")
//       <%= prefix %>-icon("music", 24px)        /* 24px size */
//
// You may specify a color.
//
//     .button:before
//       <%= prefix %>-icon("music", color: #333)
//
// You may also specify a `top` value to compensate for any mis-alignment.
// This nudges the icon by that many pixels from the top.
//
//     .button:before
//       <%= prefix %>-icon("music", top: 2px)

<%= prefix %>-icon(type, size = auto, color = auto, top = auto, left = auto, shadow = none)
  @extend $<%= prefix %>-icon
  content: <%= prefix %>-icons[type]

  unless size is "auto"
    font-size: size
  unless top is "auto"
    position: relative
    top: top
  unless left is "auto"
    position: relative
    left: left
  unless color is "auto"
    color: color
  unless shadow is "none"
    text-shadow: shadow

$<%= prefix %>-icon
  line-height: 1em
  font-family: <%= prefix %>['name']
  font-weight: normal
  font-style: normal
  display: inline-block
  text-decoration: none
  vertical-align: middle
  text-rendering: optimizeLegibility !important
  -webkit-font-smoothing: antialiased !important
  -moz-osx-font-smoothing: grayscale

<%= prefix %>-icons = {
<% each(function (val, key) { %>
  <%= key %>: "<%= val %>"<% }); %>
}
