import {isPlainObject} from './is-plain-object.js';

export {prop};

/**
 * Returns the value of an object's property.
 *
 * Returns undefined if x is not an object.
 *
 * @template A
 * @param {string} key object property key
 * @returns {(x: A) => any}
 */
const prop = (key) => (x) => isPlainObject(x) ? x[key] : undefined;
