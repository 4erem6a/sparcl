import { createParser, Parser } from "../parsing/Parser";

export function lookAhead<T>(parser: Parser<T>) {
  return createParser<T>(src => {
    const position = src.position;

    const result = parser.parse(src);

    src.move(position - src.position);

    return result;
  });
}
