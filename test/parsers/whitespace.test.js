const { whitespace } = require("../..");

test("whitespace parser", () => {
  expect(whitespace).toMatchResult(" ", " ");
});
