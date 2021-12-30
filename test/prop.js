import test from 'tape';

import {prop} from 'uinix-fp';

test('prop', (t) => {
  t.equal(
    prop('name')({name: 'John'}),
    'John',
    'returns value of specified object property',
  );

  t.equal(prop('name')({}), undefined, 'returns undefined if prop not found');

  t.end();
});
