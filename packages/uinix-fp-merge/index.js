import deepmerge from 'deepmerge';

/**
 * Deepmerge from https://github.com/TehShrike/deepmerge.
 *
 * @template X, Y
 * @param {Partial<X>} x
 * @returns {(y: Partial<Y>) => X & Y}
 */
export const merge = (x) => (y) => deepmerge(x, y, {arrayMerge});

/**
 * Always return the second array when merging arrays.
 *
 * @template X, Y
 * @param {X[]} _xs first array
 * @param {Y[]} ys second array
 * @returns {Y[]}
 */
const arrayMerge = (_xs, ys) => ys;
