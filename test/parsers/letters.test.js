const { letters } = require("../..");

test("Letters parser", () => {
  expect(letters).toMatchResult("test", "test");
});
