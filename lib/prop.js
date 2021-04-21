export { prop };

import { curry } from './curry.js';

const prop = curry((s, x) => s.split('.').reduce((o, i) => o[i], x));
