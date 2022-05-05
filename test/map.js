import assert from 'node:assert';
import test from 'node:test';

import {map} from 'uinix-fp';

test('map', (t) => {
  t.test('should map array values based on provided mapper', () => {
    assert.deepEqual(map((x) => x ** 2)([1, 2, 3]), [1, 4, 9]);
  });
});
