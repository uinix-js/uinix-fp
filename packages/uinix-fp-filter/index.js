export {filter};

/**
 * Filters an array using the provided predicate.
 *
 * @template X
 * @param {(x: X) => boolean} f predicate
 * @returns {(xs: X[]) => X[]}
 */
const filter = (f) => (xs) => xs.filter(f);
