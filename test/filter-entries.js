import assert from 'node:assert';
import test from 'node:test';

import {filterEntries} from 'uinix-fp';

test('filterEntries', async (t) => {
  await t.test('should filter values based on provided predicate', () => {
    assert.deepEqual(
      filterEntries(([_key, value]) => value % 2 === 0)({
        a1: 2,
        b1: 3,
        a2: 5,
        b2: 6,
      }),
      {a1: 2, b2: 6},
    );
  });

  await t.test('should filter values based on provided keyed predicate', () => {
    assert.deepEqual(
      filterEntries(([key, value]) => key.startsWith('a') && value % 2 === 0)({
        a1: 2,
        b1: 3,
        a2: 5,
        b2: 6,
      }),
      {a1: 2},
    );
  });
});
