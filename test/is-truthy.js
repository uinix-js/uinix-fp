import test from 'tape';

import {isTruthy} from 'uinix-fp';

test('isTruthy', (t) => {
  t.equal(isTruthy(false), false);

  t.equal(isTruthy(0), false);

  t.equal(isTruthy(-0), false);

  t.equal(isTruthy(''), false);

  t.equal(isTruthy(null), false);

  t.equal(isTruthy(undefined), false);

  t.equal(isTruthy(Number.NaN), false);

  t.equal(isTruthy(true), true);

  t.equal(isTruthy(1), true);

  t.equal(isTruthy(' '), true);

  t.equal(isTruthy({}), true);

  t.equal(isTruthy([]), true);

  t.end();
});
