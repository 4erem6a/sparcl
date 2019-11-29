const { eof } = require("../..");

test("EOF parser", () => {
  const { isError, value } = eof.parse("");

  expect(isError).toBeFalsy();
  expect(value).toBeUndefined();
});
