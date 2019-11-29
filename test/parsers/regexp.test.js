const { regexp } = require("../..");

test("RegExp parser", () => {
  const parser = regexp(/^[a-z]{3}\s\sTEST/);

  const { isError, value } = parser.parse("abc  TEST");

  expect(isError).toBeFalsy();
  expect(value[0]).toBe("abc  TEST");
});
