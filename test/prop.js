import assert from 'node:assert';
import test from 'node:test';

import {prop} from 'uinix-fp';

test('prop', async (t) => {
  await t.test('returns value of specified object property', () => {
    assert.strictEqual(prop('name')({name: 'John'}), 'John');
  });

  await t.test('returns undefined if prop not found', () => {
    assert.strictEqual(prop('name')({}), undefined);
  });
});
