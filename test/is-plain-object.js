import test from 'tape';

import {isPlainObject} from 'uinix-fp';

// Based on https://github.com/sindresorhus/is-plain-obj/blob/main/test.js
test('isPlainObject', (t) => {
  t.ok(isPlainObject({}));

  t.ok(isPlainObject({foo: true}));

  t.ok(isPlainObject({valueOf: 0}));

  t.ok(isPlainObject(Object.create(null)));

  t.ok(isPlainObject(new Object())); // eslint-disable-line no-new-object

  t.notOk(isPlainObject(['foo', 'bar']));

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

  (function () {
    t.notOk(isPlainObject(arguments));
  })();

  t.end();
});
