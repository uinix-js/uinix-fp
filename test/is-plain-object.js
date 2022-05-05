import assert from 'node:assert';
import test from 'node:test';

import {isPlainObject} from 'uinix-fp';

// Based on https://github.com/sindresorhus/is-plain-obj/blob/main/test.js
test('isPlainObject', () => {
  assert.strictEqual(isPlainObject({}), true);
  assert.strictEqual(isPlainObject({foo: true}), true);
  assert.strictEqual(isPlainObject({valueOf: 0}), true);
  assert.strictEqual(isPlainObject(Object.create(null)), true);
  assert.strictEqual(isPlainObject(new Object()), true); // eslint-disable-line no-new-object
  assert.strictEqual(isPlainObject(['foo', 'bar']), false);
  assert.strictEqual(isPlainObject(Math), false);
  assert.strictEqual(isPlainObject(Error), false);
  assert.strictEqual(
    isPlainObject(() => {}),
    false,
  );
  assert.strictEqual(isPlainObject(/./), false);
  assert.strictEqual(isPlainObject(null), false);
  assert.strictEqual(isPlainObject(undefined), false);
  assert.strictEqual(isPlainObject(Number.NaN), false);
  assert.strictEqual(isPlainObject(''), false);
  assert.strictEqual(isPlainObject(0), false);
  assert.strictEqual(isPlainObject(false), false);

  (function () {
    assert.strictEqual(isPlainObject(arguments), false);
  })();
});
