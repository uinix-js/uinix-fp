# uinix-fp-is-truthy

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[uinix-fp] utility to test JS-truthiness of values.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-is-truthy
```

## Use

`isTruthy` is a predicate testing JS-truthiness of the provided value.

```js
import {isTruthy} from 'uinix-fp-is-truthy';

isTruthy(true); // true
isTruthy('a'); // true
isTruthy(1); // true
isTruthy([]); // true
isTruthy({}); // true

isTruthy(); // false
isTruthy(false); // false
isTruthy(null); // false
isTruthy(''); // false
isTruthy(0); // false
```

## API

This package exports the following identifiers: `isTruthy`.  There is no default export.

### `isTruthy(x) => b`

##### Parameters

###### `x` (`X`)
Any value.

##### Returns

###### `b` (`boolean`)
Boolean value if `x` is JS-truthy.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-is-truthy
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-is-truthy.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-is-truthy
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-is-truthy.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
