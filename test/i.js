import assert from 'node:assert';
import test from 'node:test';

import {i} from 'uinix-fp';

test('i', async (t) => {
  await t.test('should equal provided value', () => {
    assert.strictEqual(i(42), 42);
    assert.strictEqual(i('abc'), 'abc');
  });

  await t.test('should referentially equal provided value', () => {
    const x = {a: {b: {c: 4}}};
    assert.strictEqual(i(x), x);
  });
});
