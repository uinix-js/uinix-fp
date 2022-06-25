# uinix-fp-map-entries

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] object map entries utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-map-entries
```

## Use

`mapEntries` applies the provided mapper over an [object's entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).  It is recommended that the provided objects follow a single value interface when used with `mapEntries`.

```js
import {mapEntries} from 'uinix-fp-map-entries';

const squareEntries = ([_k, v]) => v ** 2;

mapEntries(squareEntries)({a: 1, b: 2, c: 3}); // {a: 1, b: 4, c: 9}

const mapSquareEntries = mapEntries(squareEntries); // curried
mapSquareEntries({a: 1, b: 2, c: 3}); // {a: 1, b: 4, c: 9}

const keyedSquareEntries = ([k, v]) => k.startsWith('a') ? v ** 2 : v;
mapEntries(keyedSquareEntries)({a1: 2, b1: 3, a2: 4, b2: 5}); // {a1: 4, b1: 3, a2: 16, b2: 5}
```

## API

This package exports the following identifiers: `mapEntries`.  There is no default export.

### `mapEntries(f)(xs) => ys`

##### Parameters (curried)

###### `f` (`(x: X) => Y`)
The mapping function.

###### `xs` (`Record<string, X>`)
An object with values of a single type.

##### Returns

###### `ys` (`Record<string, Y>`)
An object with mapped values of a single type.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-map-entries
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-map-entries.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-map-entries
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-map-entries.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
