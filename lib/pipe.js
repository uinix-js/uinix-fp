import { curry } from './curry.js';

export const pipe = curry((fs, x) => fs.reduce((y, f) => f(y), x));
