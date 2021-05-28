import test from 'tape';

import {filter} from '../index.js';

test('filter', (t) => {
  t.deepEqual(filter()([]), [], 'should filter empty array');
  t.deepEqual(filter()({}), {}, 'should filter empty object');

  const array = ['a', '', 'b', 1, 0, 3, null, {a: 42}];
  const object = {a: 1, b: 0, c: 'c', d: '', e: null, f: {a: 42}};

  t.deepEqual(
    filter()(array),
    ['a', 'b', 1, 3, {a: 42}],
    'should filter truthy values in array',
  );

  t.deepEqual(
    filter()(object),
    {a: 1, c: 'c', f: {a: 42}},
    'should filter truthy values in object',
  );

  t.deepEqual(
    filter(Number.isInteger)(array),
    [1, 0, 3],
    'should filter values in array based on custom predicate',
  );

  t.deepEqual(
    filter(Number.isInteger)(object),
    {a: 1, b: 0},
    'should filter values in array based on custom predicate',
  );

  t.test('should return original value if not an array or object', (t) => {
    t.equal(filter()(null), null);
    t.equal(filter()(42), 42);
    t.equal(filter()('hello'), 'hello');
    t.end();
  });

  t.end();
});
