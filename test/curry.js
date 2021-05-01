import test from 'tape';

import {curry} from '../index.js';

test('curry', (t) => {
  const curry2Add = curry((a, b) => a + b);
  const curry3Add = curry((a, b, c) => a + b + c);
  const curry4Add = curry((a, b, c, d) => a + b + c + d);

  t.equal(curry2Add(1)(2), 3);
  t.equal(curry2Add(1, 2), 3);

  t.equal(curry3Add(1)(2)(3), 6);
  t.equal(curry3Add(1, 2)(3), 6);
  t.equal(curry3Add(1, 2, 3), 6);

  t.equal(curry4Add(1)(2)(3)(4), 10);
  t.equal(curry4Add(1, 2)(3)(4), 10);
  t.equal(curry4Add(1, 2, 3)(4), 10);
  t.equal(curry4Add(1, 2, 3, 4), 10);

  t.end();
});
