import { Parser, createParser } from "../parsing/Parser";
import { complete } from "../parsing/ParserResult";

export function optional<T>(parser: Parser<T>) {
  return createParser<T | undefined>(src => {
    const result = parser.parse(src);

    const value = result.isError ? undefined : result;

    return complete(value as T | undefined);
  });
}
