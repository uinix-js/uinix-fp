import test from 'tape';

import {i} from 'uinix-fp';

test('i', (t) => {
  t.equal(i(42), 42, 'should equal provided value');

  const x = {a: {b: {c: 4}}};

  t.equal(i(x), x, 'should referentially equal provided value');

  t.end();
});
