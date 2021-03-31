import test from 'tape';

import { i } from '../index.js';

test('i', (t) => {
  const x = { a: { b: { c: 4 } } };
  t.equal(i(x), x, 'is the identity function');
  t.end();
});
