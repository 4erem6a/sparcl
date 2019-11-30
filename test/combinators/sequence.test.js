const { sequence, string, whitespace } = require("../..");

test("sequence combinator", () => {
  const parser = sequence(string("Hello"), string(", "), string("world!"));

  expect(parser).toMatchResult("Hello, world!", ["Hello", ", ", "world!"]);
});
