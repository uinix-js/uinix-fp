import test from 'tape';

import {is} from '../index.js';

test('is', (t) => {
  t.ok(is(1)(1));
  t.notOk(is(1)(2));

  const x1 = {a: 42};
  const x2 = x1;
  const y = {a: 42};
  t.ok(is(x1)(x2), 'should shallow equals');
  t.notOk(is(x1)(y), 'should not shallow equals');

  const isNull = is(null);
  t.ok(isNull(null), 'can be curried');

  t.end();
});
