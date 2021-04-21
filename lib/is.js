export { is };

import { curry } from './curry.js';

const is = curry((x, y) => x === y);
