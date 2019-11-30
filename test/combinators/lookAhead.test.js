const { sequence, lookAhead, string, tapSource } = require("../..");

test("Look ahead combinator", () => {
  const parser = lookAhead(string("Hello, world!"));

  let inputStream;

  sequence(
    parser,
    tapSource(src => {
      inputStream = src;
    })
  ).parse("Hello, world!");

  expect(inputStream.position).toBe(0);
});
