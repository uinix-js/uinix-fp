import test from 'tape';

import {noop} from 'uinix-fp';

test('noop', (t) => {
  t.equal(noop('no', 'operation'), undefined, 'no operation');

  t.end();
});
