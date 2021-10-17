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
  };
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

  t.end();
});
