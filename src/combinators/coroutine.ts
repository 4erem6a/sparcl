import { Parser, createParser } from "../parsing/Parser";
import { ParserResult } from "../parsing/ParserResult";

type ParserCoroutine<T, R> = () => Generator<
  Parser<T>,
  ParserResult<R>,
  ParserResult<T>
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
