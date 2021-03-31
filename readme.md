# uinix-fp

Dependency-free and build-free utilities for writing [FP][] programs.

---

## Install

`uinix-fp` is an [ESM][] module requiring Node 12+.

```sh
npm install uninix-fp
```

## Use

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

<!-- defs -->
[esm]: https://nodejs.org/api/esm.html
[fp]: https://en.wikipedia.org/wiki/Functional_programming
[pointfree]: https://en.wikipedia.org/wiki/Tacit_programming
[sanctuary]: https://github.com/sanctuary-js/sanctuary
[uinix]: https://github.com/uinix-js
