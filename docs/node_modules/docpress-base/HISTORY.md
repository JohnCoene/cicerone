## v0.7.0 - unreleased

- Use the system font, rather than Helvetica. This is in line with GitHub's new styles.
- Stylus files are now available in `css/`, giving way to other packages that would like to extend Docpress's styles.

## [v0.6.10]
> Dec 10, 2015

- iconfonts [v0.8.0](https://github.com/rstacruz/iconfonts/blob/master/History.md#v0.8.0)
  - Fix Firefox not loading the icons

## [v0.6.5]
> Nov 26, 2015

- Fix packaging

## [v0.6.4]
> Nov 26, 2015

- [docpress/#2](https://github.com/docpress/docpress/issues/2) - fix stylesheet problem

## [v0.6.2]
> Nov 13, 2015

- Add the `googleAnalytics` option

## [v0.6.1]
> Oct 20, 2015

- Reinstate browserify as a dependency—fixes packages that use docpress-base in their tests

## [v0.6.0]
> Oct 20, 2015

- Cache reusable values - makes much compilation faster
- Allow external JS loading via the `js` option
- Fix menu toggle not appearing properly

## [v0.5.5]
> Oct 16, 2015

- Fix styles overlapping in development mode

## [v0.5.4]
> Oct 16, 2015

- Remove console.log

## [v0.5.3]
> Oct 16, 2015

- Add `viewport` meta tag for responsiveness
- Fix Pjax suddenly not working

## [v0.5.0]
> Oct 16, 2015

- Use Stylus instead of Sass
- Use new setting `css` for custom CSS
- Fix bug where a stray `<link rel="stylesheet">` appears in the source

## [v0.4.0]
> Oct 15, 2015

- Allow external CSS config

## [v0.3.1]
> Oct 14, 2015

- Make footer links bigger
- Fix slight bug where documents with images can derail scrolltracking
- Indent the output HTML

## [v0.2.0]
> Oct 12, 2015

- Allow anchor links in TOC (eg, `README.md#usage`)

## v0.1.0
> Oct 11, 2015

- Initial release.

[v0.2.0]: https://github.com/docpress/docpress-base/compare/v0.1.0...v0.2.0
[v0.3.1]: https://github.com/docpress/docpress-base/compare/v0.2.0...v0.3.1
[v0.4.0]: https://github.com/docpress/docpress-base/compare/v0.3.1...v0.4.0
[v0.5.0]: https://github.com/docpress/docpress-base/compare/v0.4.0...v0.5.0
[v0.5.3]: https://github.com/docpress/docpress-base/compare/v0.5.0...v0.5.3
[v0.5.4]: https://github.com/docpress/docpress-base/compare/v0.5.3...v0.5.4
[v0.5.5]: https://github.com/docpress/docpress-base/compare/v0.5.4...v0.5.5
[v0.6.0]: https://github.com/docpress/docpress-base/compare/v0.5.5...v0.6.0
[v0.6.1]: https://github.com/docpress/docpress-base/compare/v0.6.0...v0.6.1
[v0.6.2]: https://github.com/docpress/docpress-base/compare/v0.6.1...v0.6.2
[v0.6.4]: https://github.com/docpress/docpress-base/compare/v0.6.2...v0.6.4
[v0.6.5]: https://github.com/docpress/docpress-base/compare/v0.6.4...v0.6.5
[v0.6.10]: https://github.com/docpress/docpress-base/compare/v0.6.5...v0.6.10
