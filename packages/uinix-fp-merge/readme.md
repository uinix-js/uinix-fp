# uinix-fp-merge

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] merge utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-merge
```

## Use

`merge` deeply merges two provided objects without mutating them.  Arrays are merged with a replace strategy.

```js
const x1 = {a: {b: {}}, c: [1, 2, 3]};

const x2 = {a: {b: {d: 'e'}}, c: [8, 9, 10], e: {f: 'g'}};

merge(x1)(x2); // {a: {b: {d: 'e'}}, c: [8, 9, 10], e: {f:'g'}}
```

## API

This package exports the following identifiers: `merge`.  There is no default export.

### `merge(x1)(x2)`

###### Parameters (Curried)
- `x1` (`X1`) — First object
- `x2` (`X2`) — Second object

###### Returns
- `X1 & X2` — Returns a deeply-merged object.  Does not mutate its inputs.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-merge
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-merge.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-merge
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-merge.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
