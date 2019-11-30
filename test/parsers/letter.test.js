const { letter } = require("../..");

test("letter parser", () => {
  Array(26)
    .fill(0)
    .map((v, i) => String.fromCharCode(97 + i))
    .forEach(l => expect(letter).toMatchResult(l, l));
});
