const { coroutine, string, whitespace, complete } = require("../..");

test("Coroutine combinator", () => {
  const parser = coroutine(function*() {
    const hello = yield string("hello");

    yield whitespace;

    const world = yield string("world");

    return complete(`${hello.value}_${world.value}`);
  });

  const { isError, value } = parser.parse("hello world");

  expect(isError).toBeFalsy();
  expect(value).toBe("hello_world");
});
