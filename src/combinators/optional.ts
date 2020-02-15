import { Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function optional<T>(parser: Parser<T>): Parser<T | undefined> {
  return new Parser<T | undefined>(src => {
    const result = parser.parse(src);

    const value = result.isError ? undefined : result.value;

    return complete(value);
  });
}
