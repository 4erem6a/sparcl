const { string } = require("../..");

test("String parser", () => {
  const parser = string("Hello, world!");

  const { isError, value } = parser.parse("Hello, world!");

  expect(isError).toBeFalsy();
  expect(value).toBe("Hello, world!");
});
