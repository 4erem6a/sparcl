const { eof } = require("../..");

test("EOF parser", () => {
  expect(eof).toMatchResult("", undefined);
});
