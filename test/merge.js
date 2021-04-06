import test from 'tape';

import { merge } from '../index.js';

test('merge', (t) => {
  const x1 = {
    a: {
      b: {
        c: 42,
      },
    },
  };
  const x2 = {
    a: {
      b: {
        c: 24,
      },
      d: {
        e: 42,
      },
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
        d: {
          e: 42,
        },
      },
      f: {
        g: 'h',
      },
    },
    'should perform lodash.merge',
  );

  t.end();
});
