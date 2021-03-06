const { regexp } = require("../..");

test("regexp parser", () => {
  const re = /^[a-z]{3}\s\sTEST/;

  const parser = regexp(re);

  const input = "abc  TEST";

  expect(parser).toMatchResult(input, input.match(re));
});
