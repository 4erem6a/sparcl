const { string } = require("../..");

test("string parser", () => {
  const parser = string("Hello, world!");

  expect(parser).toMatchResult("Hello, world!", "Hello, world!");
});
