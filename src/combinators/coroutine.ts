import { Parser, createParser } from "../parsing/Parser";
import { ParsingResult } from "../parsing/ParsingResult";

type ParserCoroutine<T, R> = () => Generator<
  Parser<T>,
  ParsingResult<R>,
  ParsingResult<T>
>;

export function coroutine<T, R>(coroutine: ParserCoroutine<T, R>) {
  return createParser<R>(src => {
    const generator = coroutine();

    let current = generator.next();

    while (!current.done) {
      const result = current.value.parse(src);

      current = generator.next(result);
    }

    return current.value;
  });
}
