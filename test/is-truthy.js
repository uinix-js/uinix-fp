import assert from 'node:assert';
import test from 'node:test';

import {isTruthy} from 'uinix-fp';

test('isTruthy', () => {
  assert.strictEqual(isTruthy(false), false);
  assert.strictEqual(isTruthy(0), false);
  assert.strictEqual(isTruthy(-0), false);
  assert.strictEqual(isTruthy(''), false);
  assert.strictEqual(isTruthy(null), false);
  assert.strictEqual(isTruthy(undefined), false);
  assert.strictEqual(isTruthy(Number.NaN), false);
  assert.strictEqual(isTruthy(true), true);
  assert.strictEqual(isTruthy(1), true);
  assert.strictEqual(isTruthy(' '), true);
  assert.strictEqual(isTruthy({}), true);
  assert.strictEqual(isTruthy([]), true);
});
