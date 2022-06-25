/**
 * Maps an array using the provided mapper.
 *
 * @template X, Y
 * @param {(x: X) => Y} f mapper
 * @returns {(xs: X[]) => Y[]}
 */
export const map = (f) => (xs) => xs.map(f);
