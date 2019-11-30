const { digits } = require("../..");

test("Digits parser", () => {
  expect(digits).toMatchResult("5123", "5123");
});
