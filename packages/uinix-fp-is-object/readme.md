# uinix-fp-is-object

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] utility to test if a value is a plain JS object.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-is-object
```

## Use

`isObject` is a predicate testing if a value is a plain JS object.

> An object is plain if it is created by either `{}`, `new Object()`, or `Object.create(null)`.

```js
import {isObject} from 'uinix-fp-is-object';

isObject({foo: 'bar'}); // true

isObject(new Object()); // true

isObject(Object.create(null)); // true

isObject([1, 2, 3]); // false

class MyClass {}
isObject(new MyClass()); // false
```

## API

This package exports the following identifiers: `isObject`.  There is no default export.

### `isObject`

###### Parameters
- `x` (`X`) — Any value

###### Returns
- `boolean` — Boolean value if `x` is a plain JS object.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-is-object
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-is-object.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-is-object
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-is-object.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
