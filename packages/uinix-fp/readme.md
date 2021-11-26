# uinix-fp

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[FP] utilities for authoring common JS programs in functional form.

---

## Contents
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Project](#project)
  - [Goals](#goals)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Related](#related)

## Install

This package is [ESM-only] and requires Node 12+.

```sh
npm install uinix-fp
```

You may also install specific [packages] individually.

```sh
npm install uinix-fp-i
npm install uinix-fp-map
npm install uinix-fp-noop
...
```

## Use

The following example shows usage of some `uinix-fp` programs supporting [pointfree] and [currying] expressions.

For more details on these methods, please refer to the [§ API](#api) section.

```js
import {
  filter,
  isTruthy,
  map,
  pipe,
  props
} from 'uinix-fp';

const greet = x => 'Hi ' + x;

const exclaim = x => x + '!';

const filterTruthy = filter(isTruthy); // curried

const data = [
  null,
  {user: {firstName: 'Jesse'}},
  null,
  {user: {firstName: 'Walter'}},
  ...
];

const transform1 = pipe([
  filterTruthy, // [{user: {firstName: 'Jesse'}}, {user: {firstName: 'Walter'}}, ...]
  map(props('user.firstName')), // ['Jesse', 'Walter', ...]
  map(greet), // ['Hi Jesse', 'Hi Walter', ...]
  map(exclaim), // ['Hi Jesse!', 'Hi Walter!', ...]
])(data);

// the following transofrm is equivalent to the previous transform
const transform2 = pipe([
  filterTruthy,
  map(pipe([
    props('user.firstName'),
    greet,
    exclaim,
  ])),
])(data)
```

## API

This package has no default export and exports the following identifiers:
- [`filter`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-filter)
- [`filterEntries`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-filter-entries)
- [`i`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-i)
- [`isPlainObject`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-is-plain-object)
- [`isTruthy`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-is-truthy)
- [`k`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-k)
- [`map`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-map)
- [`mapEntries`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-map-entries)
- [`merge`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-merge)
- [`noop`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-noop)
- [`pipe`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-pipe)
- [`prop`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-prop)
- [`props`](https://github.com/uinix-js/uinix-fp/tree/main/packages/uinix-fp-props)

APIs can also be explored via [JSDoc]-based [Typescript] typings accompanying the source code.

## Project

### Goals
`uinix-fp` is fundamentally just a simple JS library of utilities.  It aims to be JS-first and avoids introducing any domain-specific concepts.

Strict formalization of FP principles and [Typescript] types should not impede on the primary goal of providing a minimal set of utilities to help express common JS programs in functional form.  If you are looking for formal implementations and rigor, please explore other libraries such as [`sanctuary`][sanctuary] and [`fp-ts`][fp-ts].

`uinix-fp` also aims to adhere to the [Unix philosophy], providing utilities with clear individual responsibility, while staying interoperable with other programs, and most importantly with core JS APIs.

### Version
`uinix-fp` adheres to [semver] starting at 1.0.0.

### Contribute
`uinix-fp` is a collection of smaller FP utilities managed under a monorepo of [packages].

Install dependencies with `npm i` and run tests with `npm test`.

### Related
- [`combinator-js`][combinator-js]
- [`fp-ts`][fp-ts]
- [`sanctuary`][sanctuary]

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp.svg
[packages]: https://github.com/uinix-js/uinix-fp/tree/main/packages/

<!-- defs -->
[combinator-js]: https://github.com/benji6/combinators-js
[currying]: https://en.wikipedia.org/wiki/Currying
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[fp]: https://en.wikipedia.org/wiki/Functional_programming
[fp-ts]: https://github.com/gcanti/fp-ts
[jsdoc]: https://github.com/jsdoc/jsdoc
[pointfree]: https://en.wikipedia.org/wiki/Tacit_programming
[sanctuary]: https://github.com/sanctuary-js/sanctuary
[semver]: https://semver.org/
[typescript]: https://github.com/microsoft/TypeScript
[unix philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy
