import test from 'tape';

import { prop } from '../index.js';

test('prop', (t) => {
  const x = {
    a: {
      b: {
        c: 42,
      },
    },
  };

  t.equal(prop('name')({ name: 'John' }), 'John', 'should return prop value');
  t.equal(
    prop('name')({ age: 42 }),
    undefined,
    'should return undefined if prop does not exist in object',
  );
  t.equal(prop('a')(x), x.a, 'should exactly equal prop value');

  t.end();
});
