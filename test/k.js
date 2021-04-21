import test from 'tape';

import { k } from '../index.js';

test('k', (t) => {
  const x = { a: { b: { c: 4 } } };
  const y = 42;
  t.equal(k(x)(y), x);

  t.end();
});
