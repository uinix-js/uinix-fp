import test from 'tape';

import { noop } from '../index.js';

test('noop', (t) => {
  const x = { a: 42 };
  t.equal(noop(x), undefined, 'no operation');

  t.end();
});
