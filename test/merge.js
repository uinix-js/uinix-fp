import assert from 'node:assert';
import test from 'node:test';

import {merge} from 'uinix-fp';

test('merge', async (t) => {
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

  await t.test('should perform deepmerge with array overwrites', () => {
    assert.deepEqual(merge(x1)(x2), x2Clone);
  });

  await t.test('should not strict equal (x1)', () => {
    assert.notStrictEqual(x1, x1Clone);
  });

  await t.test('should not strict equal (x2)', () => {
    assert.notStrictEqual(x2, x2Clone);
  });

  await t.test('should deep equal (x1)', () => {
    assert.deepEqual(x1, x1Clone);
  });

  await t.test('should deep equal (x2)', () => {
    assert.deepEqual(x2, x2Clone);
  });
});
