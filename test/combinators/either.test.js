const { either, letter, digit } = require("../..");

test("either combinator", () => {
  const parser = either(letter, digit);

  expect(parser).toMatchResult("a", "a");
  expect(parser).toMatchResult("1", "1");
});
