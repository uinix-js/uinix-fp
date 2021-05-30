# uinix-fp

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[FP][] utilities for authoring common JS utilities in functional form.

---

## Install

`uinix-fp` is an [ESM][] module requiring Node 12+.

```sh
npm install uinix-fp
```

## Usage

```js
import {
  i,
  isPlainObject,
  k,
  merge,
  noop,
  prop,
  props,
} from 'uinix-fp';

const x = 42;
const obj = {a:{b:{c:x}}};

console.log(i(x)); // 42
console.log(k(x)(9000)); // 42
console.log(isPlainObject(x)); // false
console.log(noop(x)); // undefined
console.log(prop('a')(obj), obj.a); // undefined
console.log(props('a.b.c')(obj), x); // undefined
```

Most programs support currying for easy composition:

```js
import {pipe, prop} from 'uinix-fp';

const x = 42;
const obj = {a:{b:{c:x}}};

const propByA = prop('a');
const propByPath = prop('a.b.c');

console.log(propByA(obj)); // obj.a
console.log(propByPath(obj)); // x

const transform = pipe([
  x => x - 2,
  x => x / 10,
]);

console.log(transform(x)); // 4
```

## API

Detailed API docs will be generated and provided in the near future.  For now, please refer to the [source code](./index.js) for API documentation.  [Typescript][typescript] typings are generated when installing the package.

## Design

The main design choices of `uinix-fp` are outlined below:
- Meet the needs of the [`uinix`][uinix] ecosystem.
- Ease over rigor.
- Stay close to JS patterns and behaviors.
- Avoid introducing new concepts.
- Simple, modular, and composable.
- Support [pointfree][] notation.

`uinix-fp` is not designed to be a comprehensive utiltiy library (e.g. [`lodash`][lodash]).  It will lack a wide selection of utilities, and will only expose new APIs as needed by the [`uinix`][uinix] ecosystem.

`uinix-fp` is not designed to be a formal functional programming library (e.g. [`sanctuary`][sanctuary]), and will lack rigor of in some FP concepts and monads.  This is intentional by design, to avoid learning new concepts and behaviors when casting JS programs in functional form.  The library tries its best to strike a balance between ease and rigor.


## Related

- [`combinator-js`][combinator-js]
- [`sanctuary`][sanctuary]
- [`uinix`][uinix]

<!-- badges -->
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[build]: https://github.com/uinix-js/uinix-fp/actions
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp

<!-- defs -->
[combinator-js]: https://github.com/benji6/combinators-js
[esm]: https://nodejs.org/api/esm.html
[fp]: https://en.wikipedia.org/wiki/Functional_programming
[lodash]: https://github.com/lodash/lodash
[pointfree]: https://en.wikipedia.org/wiki/Tacit_programming
[sanctuary]: https://github.com/sanctuary-js/sanctuary
[typescript]: https://github.com/microsoft/TypeScript
[uinix]: https://github.com/uinix-js
