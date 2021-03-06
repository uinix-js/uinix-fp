import {isPlainObject} from './is-plain-object.js';

export {props};

/**
 * Returns the value of an object's property path.
 *
 * Returns undefined if the path is invalid.
 *
 * @template A
 * @param {string} path object property path
 * @returns {(x: A) => any}
 */
const props = (path) => (x) =>
  path
    .split('.')
    .reduce((acc, i) => (isPlainObject(acc) ? acc[i] : undefined), x);
