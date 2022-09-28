import test from 'tape';

import {noop} from 'uinix-fp';

test('noop', (t) => {
  t.equal(noop('no', 'operation'), undefined, 'should return void');

  t.end();
});
