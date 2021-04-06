export { prop };

import { curry } from './curry.js';

const prop = curry((s, x) => x[s]);
