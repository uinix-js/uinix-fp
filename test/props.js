import test from 'tape';

import {props} from 'uinix-fp';

test('props', (t) => {
  const x = {
    a: {
      b: {
        c: 42,
      },
    },
    1: {
      2: {
        3: 42,
      },
    },
    '1.2.a.b': 5,
  };

  t.equal(
    props('')(x),
    undefined,
    'should return undefined if path is an empty string',
  );

  t.equal(props('a')(x), x.a, 'should support simple key');

  t.equal(props('a.b.c')(x), 42, 'should support path accessor');

  t.equal(
    props('1.2.3')(x),
    42,
    'should support path accessor with numeric keys',
  );

  t.equal(
    props('a.b')(x),
    x.a.b,
    'should support path accessor with referential equality',
  );

  t.equal(
    props('1.2.a.b')(x),
    5,
    'should return property value for exact keys',
  );

  t.equal(
    props('a.b.c.d.e.f')(x),
    undefined,
    'should return undefined if nested props not found',
  );

  t.throws(
    () => props('a.b.c.d.e.f', {isStrict: true})(x),
    'should throw if nested props not found (options.isStrict === true)',
  );

  t.end();
});
