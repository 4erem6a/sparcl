const { whitespace } = require("../..");

test("Whitespace parser", () => {
  const { isError, value } = whitespace.parse(" ");

  expect(isError).toBeFalsy();
  expect(value).toBe(" ");
});
