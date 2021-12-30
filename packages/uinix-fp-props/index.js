import {isPlainObject} from 'uinix-fp-is-plain-object';

export {props};

/**
 * Returns the value of an object's property path.
 *
 * Returns undefined if the path is invalid.
 *
 * @template V
 * @param {string} path object property path
 * @returns {<X extends Record<string, any>>(x: X) => V}
 */
const props = (path) => (x) => {
  if (path in x) {
    return x[path];
  }

  return path
    .split('.')
    .reduce((acc, i) => (isPlainObject(acc) ? acc[i] : undefined), x);
};
