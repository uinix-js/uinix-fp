import test from 'tape';

import {pipe} from 'uinix-fp';

test('pipe', (t) => {
  const step1 = (x) => x + 1;
  const step2 = (x) => (y) => x * y;
  const step3 = (x) => x.toString();

  t.equal(
    pipe([
      // Piped steps
      step1,
      step2(2),
      step3,
    ])(42),
    (2 * (42 + 1)).toString(),
    'should sequentially transform input to output based on provided array of functions',
  );

  t.end();
});
