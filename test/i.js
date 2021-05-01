import test from 'tape';

import {i} from '../index.js';

test('i', (t) => {
  t.equal(i(42), 42);
  t.equal(i('abc'), 'abc');

  const x = {a: {b: {c: 4}}};
  t.equal(i(x), x);

  t.end();
});
