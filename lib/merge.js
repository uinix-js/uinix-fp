export { merge };

import deepmerge from 'deepmerge';

import { curry } from './curry.js';

const arrayMerge = (_x1, y1) => y1;

const merge = curry((x1, x2) => deepmerge(x1, x2, { arrayMerge }));
