const { whitespace } = require("../..");

test("Whitespace parser", () => {
  expect(whitespace).toMatchResult(" ", " ");
});
