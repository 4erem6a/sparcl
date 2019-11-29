const { letters } = require("../..");

test("Letters parser", () => {
  const { isError, value } = letters.parse("test");

  expect(isError).toBeFalsy();
  expect(value).toBe("test");
});
