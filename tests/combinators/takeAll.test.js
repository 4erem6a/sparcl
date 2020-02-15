const { takeAll, digit } = require("../..");

test("takeAll combinator", () => {
  const parser = takeAll(digit);

  expect(parser).toMatchResult("1234", ["1", "2", "3", "4"]);
  expect(parser).toMatchResult("", []);
});
