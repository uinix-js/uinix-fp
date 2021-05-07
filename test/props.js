import test from 'tape';

import {props} from '../index.js';

test('props', (t) => {
  const x = {
    a: {
      b: {
        c: 42,
      },
    },
  };
  t.equal(props('a')(x), x.a, 'should strictly equal props value');
  t.equal(props('a.b.c')(x), 42, 'supports path accessor');
  t.equal(
    props('a.b')(x),
    x.a.b,
    'supports path accessor with strict equality',
  );
  t.equal(
    props('a.b.c.d.e.f')(x),
    undefined,
    'returns undefined if nested props not found',
  );

  t.end();
});
