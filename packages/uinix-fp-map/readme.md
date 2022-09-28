# uinix-fp-map

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[uinix-fp] array map utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-map
```

## Use

```js
import {map} from 'uinix-fp-map';

const square = x => x ** 2;

map(square)([1, 2, 3]); // [1, 4, 9]

const mapSquare = map(square); // curried
mapSquare([1, 2, 3]); // [1, 4, 9]
```

## API

This package exports the following identifiers: `map`.  There is no default export.

### `map(f)(xs) => ys`

##### Parameters (curried)

###### `f` (`(x: X) => Y`)
The mapping function.

###### `xs` (`X[]`)
Array of values.

##### Returns

###### `ys` (`Y[]`)
Array of values returned by the mapping function.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-map
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-map.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-map
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-map.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
