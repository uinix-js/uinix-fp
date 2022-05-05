import assert from 'node:assert';
import test from 'node:test';

import {filter} from 'uinix-fp';

test('filter', (t) => {
  t.test('should filter array values based on provided predicate', () => {
    assert.deepEqual(filter((x) => x % 2 === 0)([1, 2, 3, 4]), [2, 4]);
  });
});
