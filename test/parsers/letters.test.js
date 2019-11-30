const { letters } = require("../..");

test("letters parser", () => {
  expect(letters).toMatchResult("test", "test");
});
