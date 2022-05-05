import assert from 'node:assert';
import test from 'node:test';

import {noop} from 'uinix-fp';

test('noop', () => {
  assert.strictEqual(noop('no', 'operation'), undefined, 'no operation');
});
