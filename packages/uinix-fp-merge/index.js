import deepmerge from 'deepmerge';

export {merge};

/**
 * Deepmerge from https://github.com/TehShrike/deepmerge.
 *
 * @template X
 * @param {Partial<X>} [x]
 * @returns {<Y>(y?: Partial<Y>) => X & Y}
 */
const merge = (x) => (y) => deepmerge(x, y, {arrayMerge});

/**
 * Always return the second array when merging arrays.
 *
 * @template X, Y
 * @param {X[]} _xs first array
 * @param {Y[]} ys second array
 * @returns {Y[]}
 */
const arrayMerge = (_xs, ys) => ys;
