import test from 'tape';

import {k} from 'uinix-fp';

test('k', (t) => {
  t.test('should equal first value', (t) => {
    t.equal(k(true)(false), true);

    t.equal(k(false)(true), false);

    t.equal(k(42)(9000), 42);

    t.end();
  });

  t.test('should referentially equal first value', (t) => {
    const x = {a: {b: {c: 42}}};
    const y = 42;

    t.equal(k(x)(y), x);

    t.end();
  });

  t.end();
});
