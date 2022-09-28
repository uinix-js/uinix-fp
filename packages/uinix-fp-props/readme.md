# uinix-fp-props

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][bundle-size-badge]][bundle-size]

[uinix-fp] object props utility.

---

## Install

This package is [ESM-only][] and requires Node 12+.

```sh
npm install uinix-fp-props
```

## Use

`props` is a curried function returning the value of the specified object property path.

```js
import {prop} from 'uinix-fp-props';

const x = {
  a: {
    b: {
      c: 'C',
      d: 'D',
    }
  },
  'a.b': 'AB',
};

props('a.b.c')(x); // 'C'
props('a.b.d')(x); // 'D'
props('a')(x); // x.a
props('a.b')(x); // 'AB' (direct property path takes precendence)
props('x.y.z')(x); // undefined
props('x.y.z', { isStrict: true })(x); // throws in strict mode

const propsABC = props('a.b.c'); // curried
propsABC(x); // 'C'
```

## API

This package exports the following identifiers: `props`.  There is no default export.

### `props(k, options?)(x) => y`

##### Parameters (curried)

###### `k` (`string`)
An object property path.  Supports accessing nested object properties through the convenient "dot" notation.

###### `options.isStrict` (`boolean`, optional)
Options to set strict behavior.  Throws an error instead of returning `undefined` if provided object property path is invalid.

###### `X` (`object`)
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
[downloads]: https://www.npmjs.com/package/uinix-fp-props
[downloads-badge]: https://img.shields.io/npm/dm/uinix-fp-props.svg
[bundle-size]: https://bundlephobia.com/result?p=uinix-fp-props
[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/uinix-fp-props.svg

<!-- defs -->
[ESM-only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[uinix-fp]: https://github.com/uinix-js/uinix-fp
