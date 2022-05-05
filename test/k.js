import assert from 'node:assert';
import test from 'node:test';

import {k} from 'uinix-fp';

test('k', async (t) => {
  await t.test('should equal first value', () => {
    assert.strictEqual(k(true)(false), true);
    assert.strictEqual(k(false)(true), false);
    assert.strictEqual(k(42)(9000), 42);
  });

  await t.test('should referentially equal first value', () => {
    const x = {a: {b: {c: 42}}};
    const y = 42;
    assert.strictEqual(k(x)(y), x);
  });
});
