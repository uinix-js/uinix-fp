import assert from 'node:assert';
import test from 'node:test';

import {pipe} from 'uinix-fp';

test('pipe', () => {
  const step1 = (x) => x + 1;
  const step2 = (x) => (y) => x * y;
  const step3 = (x) => x.toString();

  assert.strictEqual(
    pipe([
      // Piped steps
      step1,
      step2(2),
      step3,
    ])(42),
    (2 * (42 + 1)).toString(),
  );
});
