import test from 'tape';

import { merge } from '../index.js';

test('merge', (t) => {
  const x1 = {
    a: {
      b: {
        c: 42,
      },
      d: [1, 2, 3],
    },
  };
  const x1Clone = {
    a: {
      b: {
        c: 42,
      },
      d: [1, 2, 3],
    },
  };
  const x2 = {
    a: {
      b: {
        c: 24,
      },
      d: [3, 2, 1],
    },
    f: {
      g: 'h',
    },
  };
  const x2Clone = {
    a: {
      b: {
        c: 24,
      },
      d: [3, 2, 1],
    },
    f: {
      g: 'h',
    },
  };

  t.deepEqual(
    merge(x1)(x2),
    {
      a: {
        b: {
          c: 24,
        },
        d: [3, 2, 1],
      },
      f: {
        g: 'h',
      },
    },
    'should perform deepmerge with array overwrites',
  );
  t.deepEqual(x1, x1Clone, 'should not mutate x1');
  t.deepEqual(x2, x2Clone, 'should not mutate x2');

  t.end();
});
