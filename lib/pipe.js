export { pipe };

import { curry } from './curry.js';

const pipe = curry((fs, x) => fs.reduce((y, f) => f(y), x));
