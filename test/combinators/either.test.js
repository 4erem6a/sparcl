const expectResult = require("../utils/expectResult");

const { either, letter, digit } = require("../..");

test("Either combinator", () => {
  const parser = either(letter, digit);

  expectResult(parser.parse("a"), "a");
  expectResult(parser.parse("1"), "1");
});
