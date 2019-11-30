const { string } = require("../..");

test("String parser", () => {
  const parser = string("Hello, world!");

  expect(parser).toMatchResult("Hello, world!", "Hello, world!");
});
