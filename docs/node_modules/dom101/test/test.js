/* global it, describe, mdom, div, beforeEach, afterEach, expect */

var global = (function () { return this; })();

if (typeof require === 'function') {
  require('mocha-jsdom')();
  global.mdom = require('../index');
  global.expect = require('chai').expect;
} else {
  window.expect = window.chai.expect;
  if (typeof window.mdom === 'undefined') {
    window.alert('build file not working.\ntry running "make test/build.js" first.');
  }
}

/*
 * helpers
 */

function n (string) {
  var klass = string.replace(/ {2,}/g, ' ').trim().split(' ');
  klass = uniq(klass);
  return klass.join(' ');
}

function uniq (arr) {
  var obj = {};
  var list = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (obj[item]) continue;
    obj[item] = true;
    list.push(item);
  }

  return list;
}

/*
 * beforeeach
 */

beforeEach(function () {
  global.div = document.createElement('div');
});

/*
 * tests
 */

describe('addClass', function () {
  var addClass = mdom.addClass;

  it('works', function () {
    addClass(div, 'hello');
    expect(n(div.className)).eql('hello');
  });

  it('compounds', function () {
    addClass(div, 'hello');
    addClass(div, 'world');
    expect(n(div.className)).eql('hello world');
  });
});

describe('toggleClass', function () {
  var toggleClass = mdom.toggleClass;

  it('works', function () {
    toggleClass(div, 'hello');
    expect(n(div.className)).eql('hello');
  });

  it('compounds', function () {
    toggleClass(div, 'hello');
    toggleClass(div, 'hello');
    expect(n(div.className)).eql('');
  });

  it('works with value = true', function () {
    toggleClass(div, 'hello', true);
    expect(n(div.className)).eql('hello');
  });

  it('works with value = true even if it already exists', function () {
    div.className = 'hello';
    toggleClass(div, 'hello', true);
    expect(n(div.className)).eql('hello');
  });

  it('works with value = false if it already exists', function () {
    div.className = 'hello';
    toggleClass(div, 'hello', false);
    expect(n(div.className)).eql('');
  });

  it('works with value = false even if it doesn\'t exist', function () {
    toggleClass(div, 'hello', false);
    expect(n(div.className)).eql('');
  });
});

describe('hasClass', function () {
  var hasClass = mdom.hasClass;

  it('works', function () {
    div.className = 'hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the start', function () {
    div.className = 'hello world';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the end', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the middle', function () {
    div.className = 'world hello selected';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('doesn\'t search substrings', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hel')).eq(false);
  });
});

describe('remove', function () {
  var remove = mdom.remove;
  var sub;

  beforeEach(function () {
    sub = document.createElement('span');
    div.appendChild(sub);
  });

  it('appending works', function () {
    expect(sub.parentNode).eql(div);
  });

  it('works', function () {
    remove(sub);
    expect(sub.parentNode).be.null;
  });

  it('works with null', function () {
    remove(null);
  });
});

describe('text', function () {
  var text = mdom.text;

  it('sets', function () {
    text(div, 'hello');
    expect(div.outerHTML).eql('<div>hello</div>');
  });

  it('sets and gets', function () {
    text(div, 'hello');
    expect(text(div)).eql('hello');
  });
});

describe('removeClass', function () {
  var removeClass = mdom.removeClass;

  it('works at the end', function () {
    div.className = 'hello world';
    removeClass(div, 'world');
    expect(n(div.className)).eql('hello');
  });

  it('works at the start', function () {
    div.className = 'hello world';
    removeClass(div, 'hello');
    expect(n(div.className)).eql('world');
  });

  it('works at the middle', function () {
    div.className = 'hello world';
    removeClass(div, 'there');
    expect(n(div.className)).eql('hello world');
  });

  it('works for single classes', function () {
    div.className = 'abc';
    removeClass(div, 'abc');
    expect(n(div.className)).eql('');
  });
});

describe('prepend', function () {
  var prepend = mdom.prepend;
  var child;

  beforeEach(function () {
    child = document.createElement('div');
  });

  it('works for empty divs', function () {
    prepend(div, child);
    expect(div.firstChild).eql(child);
  });

  it('works for non-empty divs', function () {
    var first = document.createElement('div');
    div.appendChild(first);
    prepend(div, child);
    expect(div.firstChild).eql(child);
  });
});

describe('on, trigger', function () {
  var on = mdom.on;
  var trigger = mdom.trigger;

  it('works with input onchange', function (next) {
    var input = document.createElement('input');

    on(input, 'change', function () {
      next();
    });

    trigger(input, 'change');
  });

  it('works with div onclick', function (next) {
    on(div, 'click', function () {
      next();
    });

    trigger(div, 'click');
  });
});

describe('querySelector', function () {
  var div;

  beforeEach(function () {
    div = document.createElement('div');
    div.className = 'hello';
    document.body.appendChild(div);
  });

  afterEach(function () {
    document.body.removeChild(div);
  });

  it('works', function () {
    expect(mdom.querySelector('.hello')).to.eql(div);
  });
});

describe('each', function () {
  it('works with arrays', function () {
    var values = '';
    mdom.each([7, 8, 9], function (val) { values += '.' + val; });
    expect(values).eql('.7.8.9');
  });

  it('works with array keys', function () {
    var keys = '';
    mdom.each([9, 9, 9], function (_, key) { keys += '.' + key; });
    expect(keys).eql('.0.1.2');
  });

  it('works with objects', function () {
    var values = '';
    mdom.each({ a: 8, b: 9 }, function (val) { values += '.' + val; });
    expect(values).eql('.8.9');
  });

  it('works with object keys', function () {
    var keys = '';
    mdom.each({ a: 1, b: 2 }, function (_, key) { keys += '.' + key; });
    expect(keys).eql('.a.b');
  });
});

describe('map', function () {
  it('works with arrays', function () {
    var values = mdom.map([7, 8, 9], function (val) { return '.' + val; });
    expect(values).eql(['.7', '.8', '.9']);
  });

  it('works with array keys', function () {
    var keys = mdom.map([9, 9, 9], function (_, key) { return '.' + key; });
    expect(keys).eql(['.0', '.1', '.2']);
  });

  it('works with objects', function () {
    var values = mdom.map({ a: 8, b: 9 }, function (val) { return '.' + val; });
    expect(values).eql(['.8', '.9']);
  });

  it('works with object keys', function () {
    var keys = mdom.map({ a: 1, b: 2 }, function (_, key) { return '.' + key; });
    expect(keys).eql(['.a', '.b']);
  });
});

describe('extend', function () {
  var extend = mdom.extend;

  it('works', function () {
    var out = extend({ a: 2 }, { b: 3 });
    expect(out.a).eql(2);
    expect(out.b).eql(3);
  });

  it('works with 3 args', function () {
    var out = extend({ a: 2 }, { b: 3 }, { c: 4 });
    expect(out.a).eql(2);
    expect(out.b).eql(3);
    expect(out.c).eql(4);
  });

  it('works in place', function () {
    var obj = { a: 2 };
    extend(obj, { b: 3 }, { c: 4 });
    expect(obj.a).eql(2);
    expect(obj.b).eql(3);
    expect(obj.c).eql(4);
  });
});

describe('deep extend', function () {
  var extend = mdom.deepExtend;

  it('works', function () {
    var out = extend({ a: 2 }, { b: 3 });
    expect(out.a).eql(2);
    expect(out.b).eql(3);
  });

  it('works with 3 args', function () {
    var out = extend({ a: 2 }, { b: 3 }, { c: 4 });
    expect(out.a).eql(2);
    expect(out.b).eql(3);
    expect(out.c).eql(4);
  });

  it('works in place', function () {
    var obj = { a: 2 };
    extend(obj, { b: 3 }, { c: 4 });
    expect(obj.a).eql(2);
    expect(obj.b).eql(3);
    expect(obj.c).eql(4);
  });

  it('works in place', function () {
    var obj = {};
    extend(obj,
     { name: { first: 'john' } },
     { name: { last: 'doe' } });
    expect(obj.name.first).eql('john');
    expect(obj.name.last).eql('doe');
  });

  it('works with arrays', function () {
    var obj = {};
    extend(obj,
     { names: ['moe'] },
     { names: ['larry'] });
    expect(obj.names).eql(['larry']);
  });
});

describe('matches', function () {
  var matches = mdom.matches;

  it('works', function () {
    div.className = 'hello';
    expect(matches(div, '.hello')).eql(true);
  });

  it('works by returning false', function () {
    expect(matches(div, '.xyzxyz')).eql(false);
  });
});

describe('closest', function () {
  var closest = mdom.closest;
  var div1, div2, div3;

  beforeEach(function () {
    // > .div > div1 > .div2 > .div3
    div1 = document.createElement('DIV');
    div1.className = 'div1';

    div2 = document.createElement('DIV');
    div2.className = 'div2';

    div3 = document.createElement('DIV');
    div3.className = 'div3';

    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
  });

  it('returns self', function () {
    expect(closest(div3, '.div3')).eql(div3);
  });

  it('returns immediate parent', function () {
    expect(closest(div3, '.div2')).eql(div2);
  });

  it('returns far parent', function () {
    expect(closest(div3, '.div1')).eql(div1);
  });

  it('returns nothing when nothing matches', function () {
    expect(closest(div3, '.xyzxyz')).eql(undefined);
  });
});

describe('documentHeight', function () {
  var documentHeight = mdom.documentHeight;

  it('works', function () {
    // returns 0 in jsdom
    expect(typeof documentHeight()).eq('number');
  });
});

describe('documentWidth', function () {
  var documentWidth = mdom.documentWidth;

  it('works', function () {
    // returns 0 in jsdom
    expect(typeof documentWidth()).eq('number');
  });
});

describe('before/after', function () {
  var _before = mdom.before;
  var _after = mdom.after;
  var parent, reference, newNode;

  beforeEach(function () {
    parent = document.createElement('div');
    reference = document.createElement('em');
    newNode = document.createElement('span');
    parent.appendChild(reference);
  });

  it('before() works', function () {
    _before(reference, newNode);
    expect(parent.innerHTML.toLowerCase()).eq('<span></span><em></em>');
  });

  it.skip('before() works with strings', function () {
    _before(reference, '<b></b>');
    expect(parent.innerHTML.toLowerCase()).eq('<b></b><em></em>');
  });

  it('after() works at the end', function () {
    _after(reference, newNode);
    expect(parent.innerHTML.toLowerCase()).eq('<em></em><span></span>');
  });

  it('after() works in the middle', function () {
    parent.appendChild(document.createElement('i'));
    _after(reference, newNode);
    expect(parent.innerHTML.toLowerCase()).eq('<em></em><span></span><i></i>');
  });
  it.skip('after() works with strings', function () {
    _after(reference, '<b></b>');
    expect(parent.innerHTML.toLowerCase()).eq('<em></em><b></b>');
  });
});
