export {filterEntries};

/**
 * Filters an object using the provided predicate over its entries.
 *
 * @template X
 * @param {(entry: [string, X]) => boolean} f predicate
 * @returns {(xs: Record<string, X>) => Record<string, X>}
 */
const filterEntries = (f) => (xs) =>
  Object.fromEntries(
    Object.entries(xs).filter((entry) => [entry[0], f(entry)]),
  );
