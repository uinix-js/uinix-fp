# uinix-fp-prop

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] object prop utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-prop
```

## Use

`prop` is a curried function returning the value of the specified object property.

```js
import {prop} from 'uinix-fp-prop';

const x = {
  a: 'A',
  b: 'B',
};

prop('a')(x); // 'A'
prop('b')(x); // 'B'
prop('x')(x); // undefined

const propA = prop('a'); // curried
propA(x) // 'A'
```

## API

This package exports the following identifiers: `prop`.  There is no default export.

### `prop(k)(x) => v`

###### Parameters (curried)

###### `k` (`string`)
An object property.

###### `x` (`object`)
The provided object.

##### Returns

###### `v` (`any`)
The object value for the specified property.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-prop
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-prop.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-prop
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-prop.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
