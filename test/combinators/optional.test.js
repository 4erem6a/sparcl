const { optional, string } = require("../..");

test("Optional combinator", () => {
  const parser = optional(string("test"));

  expect(parser).toMatchResult("test", "test");
  expect(parser).toMatchResult("", undefined);
});
