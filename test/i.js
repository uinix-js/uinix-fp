import test from 'tape';

import {i} from 'uinix-fp';

test('i', (t) => {
  t.test('should equal provided value', (t) => {
    t.equal(i(42), 42);

    t.equal(i('abc'), 'abc');

    t.end();
  });

  t.test('should referentially equal provided value', (t) => {
    const x = {a: {b: {c: 4}}};

    t.equal(i(x), x);

    t.end();
  });

  t.end();
});
