# uinix-fp-i

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] identity utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-i
```

## Use

`i` is a function simply returning the provided value.

```js
import {i} from 'uinix-fp-i';

i(42); // 42

[1, 2, 3].map(i); // [1, 2, 3]
```

## API

This package exports the following identifiers: `i`.  There is no default export.

### `i(x)`

###### Parameters
- `x` (`X`) — Any value

###### Returns
- `X` — Just `x`

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-i
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-i.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-i
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-i.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
