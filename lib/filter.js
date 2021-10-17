import {i} from './i.js';
import {isPlainObject} from './is-plain-object.js';

export {filter};

/**
 * Filters an array or object by their values using the provided predicate.
 *
 * The identity function is used as the default 'truthy' predicate.
 *
 * @template A
 * @param {(value: A) => A | boolean} predicate predicate to run on a value
 * @returns {(x: Record<string, A> | A[]) => Partial<Record<string, A>> | A[]}
 */
const filter =
  (predicate = i) =>
  (x) => {
    if (isPlainObject(x)) {
      return Object.fromEntries(
        Object.entries(x).filter(([_, value]) => predicate(value)),
      );
    }

    if (Array.isArray(x)) {
      return x.filter(predicate);
    }

    return x;
  };
