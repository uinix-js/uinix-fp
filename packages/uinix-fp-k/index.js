/**
 * The K combinator (constant function).
 *
 * @template X, Y
 * @param {X} x
 * @returns {(_y: Y) => X}
 */
export const k = (x) => (_y) => x;
