export {prop};

import {curry} from './curry.js';
import {isPlainObject} from './is-plain-object.js';

const prop = curry((s, x) =>
  s.split('.').reduce((o, i) => {
    return isPlainObject(o) ? o[i] : undefined;
  }, x),
);
