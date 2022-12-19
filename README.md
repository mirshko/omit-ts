# omit-ts

[![npm](https://img.shields.io/npm/v/omit-ts)](https://www.npmjs.com/package/omit-ts) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/omit-ts) ![NPM](https://img.shields.io/npm/l/omit-ts)](https://bundlephobia.com/package/omit-ts)

Absolutely teeny tiny TypeScript omit function based on [this answer](https://stackoverflow.com/a/53968837) from [anurbol](https://github.com/anurbol).

## Usage

```ts
import { omit } from "omit-ts";

const source = {
  foo: "foo",
  bar: "bar",
};

const only_foo = omit(source, ["bar"]);
```
