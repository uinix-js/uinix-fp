export { merge };

import lodashMerge from 'lodash.merge';

import { curry } from './curry.js';

const merge = curry((x1, x2) => lodashMerge(x1, x2));
