# uinix-fp-filter-entries

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[`uinix-fp`][uinix-fp] object filter entries utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-filter-entries
```

## Use

`filterEntries` applies the provided filter predicate over an [object's entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).  It is recommended that the provided objects follow a single value interface when using with `filterEntries`.

```js
import {filterEntries} from 'uinix-fp-filter-entries';

const isEvenEntries = ([_k, v]) => v % 2 === 0;

filterEntries(isEvenEntries)({a: 1, b: 2, c: 3}); // {b: 2}

const filterEvenEntries = filterEntries(isEvenEntries); // curried
filterEvenEntries({a: 1, b: 2, c: 3}); // {b: 2}

const keyedIsEvenEntries = ([k, v]) => k.startsWith('a') ? v % 2 === 0 : false;
filterEntries(keyedIsEvenEntries)({a1: 2, b1: 3, a2: 5, b2: 6}); // {a1: 2}
```

## API

This package exports the following identifiers: `filterEntries`.  There is no default export.

### `filterEntries(f)(object)`

###### Parameters (Curried)
- `f` (`(x: X) => boolean`): The filter predicate function.
- `object` (`Record<string, X>`): An object with values of a single type.

###### Returns
- `Record<string, X>` — Partial object of filtered entries passing the predicate test.

## License

[MIT][license] © [Chris Zhou][author]

<!-- project -->
[author]: https://github.com/chrisrzhou
[license]: https://github.com/uinix-js/uinix-fp/blob/main/license
[build]: https://github.com/uinix-js/uinix-fp/actions
[build-badge]: https://github.com/uinix-js/uinix-fp/workflows/main/badge.svg
[coverage]: https://codecov.io/github/uinix-js/uinix-fp
[coverage-badge]: https://img.shields.io/codecov/c/github/uinix-js/uinix-fp.svg
[downloads]: https://www.npmjs.com/package/uinix-fp-filter-entries
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-filter-entries.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-filter-entries
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-filter-entries.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
