import {i} from './i.js';
import {isPlainObject} from './is-plain-object.js';

export {filter};

/**
 * Filters an array or object by their values using the provided predicate.
 *
 * @template A
 * @param {(value: A) => A | boolean} predicate predicate to run on an object entry
 * @returns {((x: A[]) => A[]) | ((x: Record<string, A>) => Partial<Record<string, A>>)}
 */
const filter =
  (predicate = i) =>
  (x) => {
    if (isPlainObject(x)) {
      return Object.entries(x).reduce((acc, [key, value]) => {
        if (predicate(value)) {
          acc[key] = value;
        }

        return acc;
      }, {});
    }

    if (Array.isArray(x)) {
      return x.filter(predicate);
    }

    return x;
  };
