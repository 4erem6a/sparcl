const { digits } = require("../..");

test("digits parser", () => {
  expect(digits).toMatchResult("5123", "5123");
});
