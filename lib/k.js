export {k};

/**
 * The K combinator (constant identity).
 *
 * @template A, B
 * @param {A} x
 * @returns {(_y: B) => A}
 */
const k = (x) => (_y) => x;
