# Sparcl

Simple Parser Combinator Library

[![npm version](https://badge.fury.io/js/sparcl.svg)](https://badge.fury.io/js/sparcl)

# Examples

```js
// Number sequence parsing
import {
  sequence,
  separatedBy,
  string,
  takeAll,
  whitespace,
  digits,
  eof
} from "sparcl";

const parser = sequence(
  separatedBy(
    sequence(string(","), takeAll(whitespace)),
    digits.map(Number)
  ),
  eof
).map(([numbers]) => numbers);

const source = "1, 5, 9, 12";

const result = parser.parse(source);

if (result.isError) {
  console.error(result.error.message);
} else {
  console.log(result.value);  // [ 1, 5, 9, 12 ]
}
```
