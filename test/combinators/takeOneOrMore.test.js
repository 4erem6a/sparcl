const { takeOneOrMore, digit } = require("../..");

test("takeOneOrMore combinator", () => {
  const parser = takeOneOrMore(digit);

  expect(parser).toMatchResult("1234", ["1", "2", "3", "4"]);
  expect(parser).toReturnError("");
});
