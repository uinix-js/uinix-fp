import test from 'tape';

import {filterEntries} from 'uinix-fp';

test('filterEntries', (t) => {
  t.deepEqual(
    filterEntries(([_key, value]) => value % 2 === 0)({
      a1: 2,
      b1: 3,
      a2: 5,
      b2: 6,
    }),
    {a1: 2, b2: 6},
    'should filter values based on provided predicate',
  );

  t.deepEqual(
    filterEntries(([key, value]) => key.startsWith('a') && value % 2 === 0)({
      a1: 2,
      b1: 3,
      a2: 5,
      b2: 6,
    }),
    {a1: 2},
    'should filter values based on provided keyed predicate',
  );

  t.end();
});
