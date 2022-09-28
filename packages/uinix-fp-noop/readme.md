# uinix-fp-noop

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[uinix-fp] no-operation utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-noop
```

## Use

```js
import {noop} from 'uinix-fp-noop';

[1, 2, 3].forEach(noop); // no operation
```

## API

This package exports the following identifiers: `noop`.  There is no default export.

### `noop() => void`

##### Parameters
None.

##### Returns
Nothing.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-noop
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-noop.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-noop
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-noop.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
