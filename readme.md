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
  - [Types](#types)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Related](#related)
  - [License](#license)

## Install


This package is [ESM-only].

Install in Node 12+ with [npm]:

```sh
npm install uinix-fp
```

Install in [Deno] with [esm.sh]:
```js
import {...} from 'https://esm.sh/uinix-fp';
```

Install in browsers with [esm.sh]:
```html
<script type="module">
  import {...} from 'https://esm.sh/uinix-fp';
</script>
```

You may also install specific [packages] individually.

```sh
npm install uinix-fp-i
npm install uinix-fp-map
npm install uinix-fp-noop
npm install uinix-fp-pipe
...
```

> **Note:** uinix-fp is tree-shakeable and we recommend simply installing the main package if your build supports [tree shaking].

## Use

The following example shows usage of some uinix-fp programs supporting [pointfree] and [currying] ways to express common JS data transformations in a pipeline.

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

const pipeline = pipe([
  filterTruthy, // [{user: {firstName: 'Jesse'}}, {user: {firstName: 'Walter'}}, ...]
  map(props('user.firstName')), // ['Jesse', 'Walter', ...]
  map(greet), // ['Hi Jesse', 'Hi Walter', ...]
  map(exclaim), // ['Hi Jesse!', 'Hi Walter!', ...]
])(data);
```

uinix-fp is unopinionated and you you can express your code appropriately for your functional style and needs. The following pipeline is equivalent to the previous pipeline.

```js
const shoutFirstName = pipe([
  props('user.firstName'),
  greet,
  exclaim,
]);

const pipeline = pipe([
  filterTruthy,
  map(shoutFirstName),
])(data)
```

## API

uinix-fp exports the following identifiers:
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

There are no default exports.

APIs are explorable via [JSDoc]-based [Typescript] typings accompanying the source code.

## Project

### Goals
uinix-fp is fundamentally just a *simple JS library of utilities*.  It aims to be JS-first and avoid opinionated domain-specific APIs.

uinix-fp programs follow the [Unix philosophy], with each program maintaining simple and clear responsibilities, while remaining interoperable with other program and most importantly with core JS.

Strict formalization of FP principles and typings should not impede on the primary goal of providing a minimal set of utilities to help express common JS programs in functional form.  If you are looking for a formal and rigorous set of FP utilities, please explore other libraries such as [sanctuary] and [fp-ts].

## Types

uinix-fp ships with [Typescript] declarations, compiled and emitted when installed. The source code is pure Javascript.

### Version
uinix-fp adheres to [semver] starting at 1.0.0.

**Note:** uinix-fp is a *JS-first* project.  [Typescript] types are provided as a supplementary convenience for the TS community.  Changes in typings will always be treated as [semver] fixes.

### Contribute
uinix-fp is a collection of smaller FP utilities managed under a monorepo of [packages].

Install dependencies with `npm i` and run tests with `npm test`.  You can also run other NPM scripts (e.g. `lint`) from the root of the monorepo.

### Related
- [uinix-js][uinix-js]
- [sanctuary][sanctuary]
- [fp-ts][fp-ts]
- [combinator-js][combinator-js]

### License

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
[uinix-js]: https://github.com/uinix-js/

<!-- defs -->
[combinator-js]: https://github.com/benji6/combinators-js
[currying]: https://en.wikipedia.org/wiki/Currying
[deno]: https://deno.land/
[esm.sh]: https://esm.sh/
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[fp]: https://en.wikipedia.org/wiki/Functional_programming
[fp-ts]: https://github.com/gcanti/fp-ts
[jsdoc]: https://github.com/jsdoc/jsdoc
[npm]: https://docs.npmjs.com/cli/v8/commands/npm-install
[pointfree]: https://en.wikipedia.org/wiki/Tacit_programming
[sanctuary]: https://github.com/sanctuary-js/sanctuary
[semver]: https://semver.org/
[tree shaking]: https://webpack.js.org/guides/tree-shaking/
[typescript]: https://github.com/microsoft/TypeScript
[unix philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy
