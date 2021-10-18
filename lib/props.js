import {isPlainObject} from './is-plain-object.js';

export {props};

/**
 * Returns the value of an object's property path.
 *
 * Returns undefined if the path is invalid.
 *
 * @template A
 * @param {string} [path] object property path
 * @returns {(x: A) => any}
 */
const props =
  (path = '') =>
  (x) => {
    if (!path || !isPlainObject(x)) {
      return x;
    }

    if (path in x) {
      return x[path];
    }

    return path
      .split('.')
      .reduce((acc, i) => (isPlainObject(acc) ? acc[i] : undefined), x);
  };
