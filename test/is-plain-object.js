import test from 'tape';

import { isPlainObject } from '../index.js';

test('isPlainObject', (t) => {
  function Foo() {
    this.abc = {};
  }

  t.ok(isPlainObject(Object.create({})));
  t.ok(isPlainObject(Object.create(Object.prototype)));
  t.ok(isPlainObject({ foo: 'bar' }));
  t.ok(isPlainObject({}));
  t.ok(isPlainObject(Object.create(null)));
  t.notOk(isPlainObject(/foo/));
  t.notOk(isPlainObject(function () {}));
  t.notOk(isPlainObject(1));
  t.notOk(isPlainObject(['foo', 'bar']));
  t.notOk(isPlainObject([]));
  t.notOk(isPlainObject(new Foo()));
  t.notOk(isPlainObject(null));

  t.end();
});
