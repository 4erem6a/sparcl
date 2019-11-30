const { digit } = require("../..");

test("Digit parser", () => {
  Array(10)
    .fill(0)
    .map((v, i) => String(i))
    .forEach(d => expect(digit).toMatchResult(d, d));
});
