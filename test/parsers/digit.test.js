const { digit } = require("../..");

test("Digit parser", () => {
  Array(10)
    .fill(0)
    .map((v, i) => String(i))
    .forEach(d => {
      const { isError, value } = digit.parse(d);

      expect(isError).toBeFalsy();
      expect(value).toBe(d);
    });
});
