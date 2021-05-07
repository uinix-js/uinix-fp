export {isPlainObject};

/**
 * Checks if a value is a plain object.
 *
 * Based on https://github.com/sindresorhus/is-plain-obj.
 *
 * An object is plain if it is created by either:
 * - {}
 * - new Object()
 * - Object.create(null)
 *
 * @template A
 * @param {A} x
 * @returns {boolean}
 */
const isPlainObject = (x) => {
  if (Object.prototype.toString.call(x) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(x);
  return prototype === null || prototype === Object.prototype;
};
