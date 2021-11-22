# uinix-fp-k

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] constant/always utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-k
```

## Use

`k` is a curried function always returning the first provided value.

```js
import {k} from 'uinix-fp-k';

k(42)(9000); // 42

const alwaysTrue = k(true);

alwaysTrue(false); // true
[1, 2, 3].map(alwaysTrue); // [true, true, true];

```

## API

This package exports the following identifiers: `k`.  There is no default export.

### `k(x)(y)`

###### Parameters (Curried)
- `x` (`X`) — Provided value
- `y` (`Y`) — Second provided value (unused)

###### Returns
- `X` — Always returns `x`

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-k
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-k.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-k
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-k.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
