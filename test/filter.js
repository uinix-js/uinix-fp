import test from 'tape';

import {filter} from 'uinix-fp';

test('filter', (t) => {
  t.deepEqual(
    filter((x) => x % 2 === 0)([1, 2, 3, 4]),
    [2, 4],
    'should filter array values based on provided predicate',
  );

  t.end();
});
