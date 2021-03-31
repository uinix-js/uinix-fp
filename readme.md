# uinix-fp

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

Dependency-free and build-free utilities for writing [FP][] programs.

---

## Install

`uinix-fp` is an [ESM][] module requiring Node 12+.

```sh
npm install uinix-js/uninix-fp
```

> `uinix-fp` is in active development.  A formal NPM package will be released in the near future.  Please install from the Github repo for now.

## Usage

```js
import {
  complement,
  filter,
  isEmpty,
  map,
  pipe,
  prop,
  trace,
} from 'uinix-fp';

const data = [
  { name: 'a', ... },
  { name: 'b', ... },
  { name: 'c', ... },
  ...
];

// easy composition with curried methods
const isNotEmpty = complement(isEmpty);

const csv = pipe([ // pipe functions
  filter(isNotEmpty), // filter entries that are not empty
  trace('after filter'), // easily debug with a trace
  map(prop('name')), // map the property name
  joinWith(', '), // join an array of strings on ', '
])(data)

console.log(csv); // 'a, b, c, ...'
```

## API

> Detailed API docs will be provided in the future. API is inspired largely by [`sanctuary`][sanctuary].

Refer to the [type definitions](./index.d.ts).

## Note

Utilities in `uinix-fp` are designed to support authoring [pointfree][] JS code in functional form. It keeps close to expected JS behaviors (both good and bad parts), to avoid introducing and learning new APIs and behaviors.

## Related

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
[esm]: https://nodejs.org/api/esm.html
[fp]: https://en.wikipedia.org/wiki/Functional_programming
[pointfree]: https://en.wikipedia.org/wiki/Tacit_programming
[sanctuary]: https://github.com/sanctuary-js/sanctuary
[uinix]: https://github.com/uinix-js
