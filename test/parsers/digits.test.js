const { digits } = require("../..");

test("Digits parser", () => {
  const { isError, value } = digits.parse("5271");

  expect(isError).toBeFalsy();
  expect(value).toBe("5271");
});
