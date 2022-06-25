/**
 * Filters an object using the provided predicate over its entries.
 *
 * @template X
 * @param {(entry: [string, X]) => boolean} f predicate
 * @returns {(xs: Record<string, X>) => Record<string, X>}
 */
export const filterEntries = (f) => (xs) =>
  Object.fromEntries(Object.entries(xs).filter(f));
