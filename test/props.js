import test from 'tape';

import {props} from '../index.js';

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
    'a.b.c.d': 'e',
    '1.2.a.b': 5,
  };
  t.equal(props()(x), x, 'should return x if path is undefined');
  t.equal(props('')(x), x, 'should return x if path is an empty string');
  t.equal(props('a')(x), x.a, 'should strictly equal props value');
  t.equal(props('a.b.c')(x), 42, 'should support path accessor');
  t.equal(
    props('1.2.3')(x),
    42,
    'should support path accessor for numeric keys',
  );
  t.equal(
    props('a.b')(x),
    x.a.b,
    'should support path accessor with strict equality',
  );
  t.equal(
    props('1.2')(x),
    x[1][2],
    'should support path accessor with strict equality',
  );
  t.equal(
    props('a.b.c.d.e.f')(x),
    undefined,
    'should return undefined if nested props not found',
  );
  t.equal(
    props('a.b.c.d')(x),
    'e',
    'should support direct lookup for string path keys',
  );
  t.equal(
    props('1.2.a.b')(x),
    5,
    'should support direct lookup for mixed path keys',
  );

  t.end();
});
