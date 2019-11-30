const { coroutine, string, whitespace, complete } = require("../..");

test("Coroutine combinator", () => {
  const parser = coroutine(function*() {
    const hello = yield string("hello");

    yield whitespace;

    const world = yield string("world");

    return complete(`${hello.value}_${world.value}`);
  });

  expect(parser).toMatchResult("hello world!", "hello_world");
});
