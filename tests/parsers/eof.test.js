const { eof } = require("../..");

test("eof parser", () => {
  expect(eof).toMatchResult("", undefined);
});
