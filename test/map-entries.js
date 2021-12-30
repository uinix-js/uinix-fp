import test from 'tape';

import {mapEntries} from 'uinix-fp';

test('map', (t) => {
  t.deepEqual(
    mapEntries(([_key, value]) => value ** 2)({a1: 2, b1: 3, a2: 4, b2: 5}),
    {a1: 4, b1: 9, a2: 16, b2: 25},
    'should map values based on provided mapper',
  );

  t.deepEqual(
    mapEntries(([key, value]) => (key.startsWith('a') ? value ** 2 : value))({
      a1: 2,
      b1: 3,
      a2: 4,
      b2: 5,
    }),
    {a1: 4, b1: 3, a2: 16, b2: 5},
    'should map values based on provided keyed mapper',
  );

  t.end();
});
