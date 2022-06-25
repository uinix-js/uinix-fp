# uinix-fp-filter

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] array filter utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-filter
```

## Use

```js
import {filter} from 'uinix-fp-filter';

const isEven = x => x % 2 === 0;

filter(isEven)([1, 2, 3, 4]); // [2, 4]

const filterIsEven = filter(isEven); // curried
filter([1, 2, 3, 4]); // [2, 4]
```

## API

This package exports the following identifiers: `filter`.  There is no default export.

### `filter(f)(xs)`

##### Parameters (curried)

###### `f` (`(x: X) => boolean`)
The predicate function.

###### `xs` (`X[]`)
An array of values.

##### Returns

###### `xs` (`X[]`)
Array of filtered values passing the predicate test.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-filter
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-filter.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-filter
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-filter.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
