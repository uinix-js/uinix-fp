import deepmerge from 'deepmerge';

export {merge};

/**
 * Deepmerge from https://github.com/TehShrike/deepmerge.
 *
 * @template A, B
 * @param {Partial<A>} x
 * @returns {(y: Partial<B>) => A & B}
 */
const merge = (x) => (y) => deepmerge(x, y, {arrayMerge});

/**
 * Always return the second array when merging arrays.
 *
 * @template A, B
 * @param {A} _xs1 first array
 * @param {B} xs2 second array
 * @returns {B}
 */
const arrayMerge = (_xs1, xs2) => xs2;
