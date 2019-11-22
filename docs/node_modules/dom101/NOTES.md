## Tests

Update the README file (auto-built from inline comments)

    make

Console tests (jsdom)

    npm test

Browser tests

    make browser-tests

## Releasing new versions

    make
    npm test
    bump *.json
    npm publish
    git release

## Adding new methods

 * Create it as `method-name.js` (dasherized)
 * Document it with `/** ... */`
 * Be sure to update README.md inline docs via `make`
 * Update the "Reference" table in README.md

