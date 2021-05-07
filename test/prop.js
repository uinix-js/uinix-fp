import test from 'tape';

import {prop} from '../index.js';

test('prop', (t) => {
  t.equal(prop('name')({name: 'John'}), 'John');
  t.equal(
    prop('name')({age: 42}),
    undefined,
    'returns undefined if prop not found',
  );
  t.equal(
    prop('xyz')(null),
    undefined,
    'should return undefined when accessing null',
  );
  t.equal(
    prop('xyz')(undefined),
    undefined,
    'should return undefined when accessing undefined',
  );
  t.end();
});
