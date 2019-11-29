const { letter } = require("../..");

test("Letter parser", () => {
  Array(26)
    .fill(0)
    .map((v, i) => String.fromCharCode(97 + i))
    .forEach(l => {
      const { isError, value } = letter.parse(l);

      expect(isError).toBeFalsy();
      expect(value).toBe(l);
    });
});
