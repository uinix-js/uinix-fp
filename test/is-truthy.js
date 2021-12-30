import test from 'tape';

import {isTruthy} from 'uinix-fp';

test('isTruthy', (t) => {
  t.notOk(isTruthy(false));

  t.notOk(isTruthy(0));

  t.notOk(isTruthy(-0));

  t.notOk(isTruthy(''));

  t.notOk(isTruthy(null));

  t.notOk(isTruthy(undefined));

  t.notOk(isTruthy(Number.NaN));

  t.ok(isTruthy(true));

  t.ok(isTruthy(1));

  t.ok(isTruthy(' '));

  t.ok(isTruthy({}));

  t.ok(isTruthy([]));

  t.end();
});
