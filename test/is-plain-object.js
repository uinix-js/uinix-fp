import test from 'tape';

import {isPlainObject} from 'uinix-fp';

// Based on https://github.com/sindresorhus/is-plain-obj/blob/main/test.js
test('isPlainObject', (t) => {
  t.equal(isPlainObject({}), true);

  t.equal(isPlainObject({foo: true}), true);

  t.equal(isPlainObject({valueOf: 0}), true);

  t.equal(isPlainObject(Object.create(null)), true);

  t.equal(isPlainObject(new Object()), true); // eslint-disable-line no-new-object

  t.equal(isPlainObject(['foo', 'bar']), false);

  t.equal(isPlainObject(Math), false);

  t.equal(isPlainObject(Error), false);

  t.equal(
    isPlainObject(() => {}),
    false,
  );

  t.equal(isPlainObject(/./), false);

  t.equal(isPlainObject(null), false);

  t.equal(isPlainObject(undefined), false);

  t.equal(isPlainObject(Number.NaN), false);

  t.equal(isPlainObject(''), false);

  t.equal(isPlainObject(0), false);

  t.equal(isPlainObject(false), false);

  (function () {
    t.equal(isPlainObject(arguments), false);
  })();

  t.end();
});
