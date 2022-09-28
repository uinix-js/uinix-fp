# uinix-fp-pipe

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[uinix-fp] pipe utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-pipe
```

## Use

`pipe` allows chaining a sequence of functions in a pipeline.

```js
import {pipe} from 'uinix-fp-pipe';

const greet = x => 'hello ' + x;
const uppercase = x => x.toUpperCase();
const exclaim = x => x + '!';

const shout = pipe([
  greet,
  uppercase,
  exclaim
]); // curried

shout('Jesse'); // 'HELLO JESSE!'
```

## API

This package exports the following identifiers: `pipe`.  There is no default export.

### `pipe(fs)(x) => y`

##### Parameters (curried)

###### `fs` (`Function[]`)
An array of functions.

###### `x` (`X`)
The input.

##### Returns

###### `y` (`Y`)
Output of transforming `X` through the series of functions.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-pipe
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-pipe.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-pipe
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-pipe.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
