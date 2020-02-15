const { separatedBy, string, digits } = require("../..");

test("separatedBy combinator", () => {
  const parser = separatedBy(string(","), digits);

  expect(parser).toMatchResult("1,2,3,4", ["1", "2", "3", "4"]);
});
