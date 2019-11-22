mdx = ./node_modules/.bin/mdx --markdown -x internal
browserify = ./node_modules/.bin/browserify
files = $(wildcard *.js)

update: README.md
README.md: $(files)
	(sed '/<!--api-->/q' $@; echo; ${mdx} $^; sed -n '/<!--api:end-->/,$$p' $@) > $@~
	mv $@~ $@

test-browser: test/build.js
	open test/index.html

test/build.js: index.js $(files)
	${browserify} -s mdom $< > $@
