import assert from 'node:assert';
import test from 'node:test';

import {props} from 'uinix-fp';

test('props', async (t) => {
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

  await t.test('should return undefined if path is an empty string', () => {
    assert.strictEqual(props('')(x), undefined);
  });

  await t.test('should support simple key', () => {
    assert.strictEqual(props('a')(x), x.a);
  });

  await t.test('should support path accessor', () => {
    assert.strictEqual(props('a.b.c')(x), 42);
  });

  await t.test('should support path accessor with numeric keys', () => {
    assert.strictEqual(props('1.2.3')(x), 42);
  });

  await t.test('should support path accessor with referential equality', () => {
    assert.strictEqual(props('a.b')(x), x.a.b);
  });

  await t.test('should return property value for exact keys', () => {
    assert.strictEqual(props('1.2.a.b')(x), 5);
  });

  await t.test('should return undefined if nested props not found', () => {
    assert.strictEqual(props('a.b.c.d.e.f')(x), undefined);
  });

  await t.test(
    'should throw if nested props not found (options.isStrict === true)',
    () => {
      assert.throws(() => props('a.b.c.d.e.f', {isStrict: true})(x));
    },
  );
});
