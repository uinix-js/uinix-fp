export {pipe};

/**
 * Applies an array of functions sequentially on a value.
 *
 * @template A, B
 * @param {Function[]} fs array of functions
 * @returns {(x: A) => B}
 */
const pipe = (fs) => (x) => fs.reduce((acc, f) => f(acc), x);
