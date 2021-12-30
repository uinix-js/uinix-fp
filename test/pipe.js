import test from 'tape';

import {pipe} from 'uinix-fp';

test('pipe', (t) => {
  // @ts-ignore
  const step1 = (x) => x + 1;
  // @ts-ignore
  const step2 = (x) => (y) => x * y;
  // @ts-ignore
  const step3 = (x) => x.toString();

  t.equal(
    pipe([
      // Piped steps
      step1,
      step2(2),
      step3,
    ])(42),
    (2 * (42 + 1)).toString(),
  );

  t.end();
});
