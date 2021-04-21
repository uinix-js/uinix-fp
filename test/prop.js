import test from 'tape';

import { prop } from '../index.js';

test('prop', (t) => {
  t.equal(prop('name')({ name: 'John' }), 'John');
  t.equal(prop('name')({ age: 42 }), undefined);

  const x = {
    a: {
      b: {
        c: 42,
      },
    },
  };
  t.equal(prop('a')(x), x.a, 'should shallow equal prop value');

  t.end();
});
