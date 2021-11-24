export {mapEntries};

/**
 * Maps an object using the provided mapper over its entries.
 *
 * @template X, Y
 * @param {(entry: [string, X]) => Y} f mapper
 * @returns {(xs: Record<string, X>) => Record<string, Y>}
 */
const mapEntries = (f) => (xs) =>
  Object.fromEntries(Object.entries(xs).map((entry) => [entry[0], f(entry)]));
