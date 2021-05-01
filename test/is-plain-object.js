import test from 'tape';

import {isPlainObject} from '../index.js';

// Based on https://github.com/sindresorhus/is-plain-obj/blob/main/test.js
test('isPlainObject', (t) => {
  function Foo(x) {
    this.x = x;
  }

  function ObjectConstructor() {}

  t.ok(isPlainObject({}));
  t.ok(isPlainObject({foo: true}));
  t.ok(isPlainObject({constructor: Foo}));
  t.ok(isPlainObject({valueOf: 0}));
  t.ok(isPlainObject(Object.create(null)));
  t.ok(isPlainObject(new Object())); // eslint-disable-line no-new-object
  t.notOk(isPlainObject(['foo', 'bar']));
  t.notOk(isPlainObject(new Foo(1)));
  t.notOk(isPlainObject(Math));
  t.notOk(isPlainObject(Error));
  t.notOk(isPlainObject(() => {}));
  t.notOk(isPlainObject(/./));
  t.notOk(isPlainObject(null));
  t.notOk(isPlainObject(undefined));
  t.notOk(isPlainObject(Number.NaN));
  t.notOk(isPlainObject(''));
  t.notOk(isPlainObject(0));
  t.notOk(isPlainObject(false));
  t.notOk(isPlainObject(new ObjectConstructor()));

  (function () {
    t.notOk(isPlainObject(arguments)); // eslint-disable-line prefer-rest-params
  })();

  const foo = new Foo();
  foo.constructor = Object;
  t.notOk(isPlainObject(foo));

  t.end();
});
