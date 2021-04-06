export { k };

import { curry } from './curry.js';

const k = curry((x, _y) => x);
