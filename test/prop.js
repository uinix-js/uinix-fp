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
  t.equal(prop('a.b.c')(x), 42, 'supports path accessor');
  t.equal(prop('a.b')(x), x.a.b, 'supports path accessor with shallow equal');
  t.throws(() => prop('a.b.c.d.e.f', x), 'throws if cannot access nested property');

  t.end();
});
