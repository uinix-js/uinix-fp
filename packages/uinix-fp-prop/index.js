export {prop};

/**
 * Returns the value for a corresponding object key.
 *
 * @template {string} K
 * @param {K} key object property key
 * @returns {<V>(x: {[k in K]: V} | {[key: string]: any}) => V}
 */
const prop = (key) => (x) => x[key];
