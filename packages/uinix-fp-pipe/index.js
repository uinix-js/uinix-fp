/**
 * Applies an array of functions sequentially on its output.
 *
 * @template X, Y
 * @param {Function[]} fs array of functions
 * @returns {(x: X) => Y}
 */
// @ts-ignore (near impossible to type pipe correctly)
export const pipe = (fs) => (x) => fs.reduce((acc, f) => f(acc), x);
