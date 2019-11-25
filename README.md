# Sparcl

Simple Parser Combinator Library

# Examples

```js
import { sequence, separatedBy, string, digit, eof } from "sparcl";

const parser = sequence(separatedBy(string(","), digit), eof);

const source = "1,2,3,4,5";

const result = parser.parse(source);

if (result.isError) {
  console.error(result.error.message);
} else {
  console.log(result.value);
}
```
