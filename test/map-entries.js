import assert from 'node:assert';
import test from 'node:test';

import {mapEntries} from 'uinix-fp';

test('map', async (t) => {
  await t.test('should map values based on provided mapper', () => {
    assert.deepEqual(
      mapEntries(([_key, value]) => value ** 2)({a1: 2, b1: 3, a2: 4, b2: 5}),
      {a1: 4, b1: 9, a2: 16, b2: 25},
    );
  });

  await t.test('should map values based on provided keyed mapper', () => {
    assert.deepEqual(
      mapEntries(([key, value]) => (key.startsWith('a') ? value ** 2 : value))({
        a1: 2,
        b1: 3,
        a2: 4,
        b2: 5,
      }),
      {a1: 4, b1: 3, a2: 16, b2: 5},
    );
  });
});
