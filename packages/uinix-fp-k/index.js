export {k};

/**
 * The K combinator (constant function).
 *
 * @template X, Y
 * @param {X} [x]
 * @returns {(_y?: Y) => X}
 */
const k = (x) => (_y) => x;
