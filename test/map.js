import test from 'tape';

import {map} from 'uinix-fp';

test('map', (t) => {
  t.deepEqual(
    map((x) => x ** 2)([1, 2, 3]),
    [1, 4, 9],
    'should map array values based on provided mapper',
  );

  t.end();
});
