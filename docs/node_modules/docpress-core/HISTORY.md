## [v0.6.13]
> Aug  2, 2016

- [#91] - Fix error with opening too many files when `node_modules` is big. ([@knownasilya])
- [#87] - Make destination path (`dist`) configurable. ([@knownasilya])

[#91]: https://github.com/docpress/docpress-core/issues/91
[#87]: https://github.com/docpress/docpress-core/issues/87
[@knownasilya]: https://github.com/knownasilya
[v0.6.13]: https://github.com/docpress/docpress-core/compare/v0.6.1...v0.6.13

## [v0.6.1]
> Feb  3, 2016

- [docpress#29]: Fix `mailto:` links not being allowed.

[docpress#29]: https://github.com/docpress/docpress/issues/29
[v0.6.1]: https://github.com/docpress/docpress-core/compare/v0.6.0...v0.6.1

## [v0.6.0]
> Oct 20, 2015

- Cache reuseable things - speeds up compiling drastically

## [v0.5.2]
> Oct 16, 2015

- Add [markdown-it-decorate](https://www.npmjs.com/package/markdown-it-decorate) as an officially-supported plugin

## [v0.4.0]
> Oct 15, 2015

- Allow customization of Markdown options
- Allow loading markdown-it plugins

## [v0.3.1]
> Oct 14, 2015

- Fix regression where linking to the same page multiple times renames that file

## [v0.3.0]
> Oct 14, 2015

- Table of contents (`docs/README.md`) is now optional
- Markdown code is now stripped out of TOC names
- The first page will always be the home page
- You can now link Table of Contents as part of the site
- Make heading ID's match what GitHub expects
- Allow overriding documentation

## [v0.2.0]
> Oct 12, 2015

- Allow anchor links in TOC (eg, `README.md#usage`)
- Fix issue where links inside `docs/` causes errors
- Allow `docs/README.md` to not be case sensitive
- Improve syntax highlighting for Markdown
- Turn URLs into links

## v0.1.0
> Oct 11, 2015

- Initial release.

[v0.2.0]: https://github.com/docpress/docpress-core/compare/v0.1.0...v0.2.0
[v0.3.0]: https://github.com/docpress/docpress-core/compare/v0.2.0...v0.3.0
[v0.3.1]: https://github.com/docpress/docpress-core/compare/v0.3.0...v0.3.1
[v0.4.0]: https://github.com/docpress/docpress-core/compare/v0.3.1...v0.4.0
[v0.5.2]: https://github.com/docpress/docpress-core/compare/v0.4.0...v0.5.2
[v0.6.0]: https://github.com/docpress/docpress-core/compare/v0.5.2...v0.6.0
