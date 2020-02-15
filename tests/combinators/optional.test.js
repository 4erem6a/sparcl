const { optional, string } = require("../..");

test("optional combinator", () => {
  const parser = optional(string("test"));

  expect(parser).toMatchResult("test", "test");
  expect(parser).toMatchResult("", undefined);
});
