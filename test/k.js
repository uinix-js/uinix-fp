import test from 'tape';

import {k} from 'uinix-fp';

test('k', (t) => {
  t.equal(k(42)(9000), 42, 'should equal first value');

  const x = {a: {b: {c: 42}}};
  const y = 42;

  t.equal(k(x)(y), x, 'should referentially equal first value');

  t.end();
});
