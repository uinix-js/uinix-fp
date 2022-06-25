import {isPlainObject} from 'uinix-fp-is-plain-object';

/**
 * Returns the value of an object's property path.
 *
 * Returns undefined if the path is invalid.
 *
 * @template V
 * @param {string} path object property path
 * @param {object} [options] optional options
 * @param {boolean} [options.isStrict] strict mode (throws if property path is invalid)
 * @returns {<X extends Record<string, any>>(x: X) => V}
 */
export const props =
  (path, options = {}) =>
  (x) => {
    if (path in x) {
      return x[path];
    }

    return path
      .split('.')
      .reduce(
        (acc, subpath) =>
          options.isStrict || isPlainObject(acc) ? acc[subpath] : undefined,
        x,
      );
  };
