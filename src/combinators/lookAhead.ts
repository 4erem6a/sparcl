import { Parser } from "../parsing/Parser";

export function lookAhead<T>(parser: Parser<T>): Parser<T> {
  return new Parser<T>(src => {
    const position = src.position;

    const result = parser.parse(src);

    src.moveTo(position);

    return result;
  });
}
