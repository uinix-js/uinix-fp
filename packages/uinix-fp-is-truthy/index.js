export {isTruthy};

/**
 * Tests if a value is JS-truthy.
 *
 * @template X
 * @param {X} x
 * @returns {boolean}
 */
const isTruthy = (x) => Boolean(x);
