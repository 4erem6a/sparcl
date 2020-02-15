import { Parser, createParser } from "../parsing/Parser";
import { InputStream } from "@4erem6a/inputstream";
import { complete } from "../parsing/ParsingResult";

export function getInputStream<T>(parser: Parser<T>) {
  return createParser<[T, InputStream]>(src => {
    const result = parser.parse(src);

    if (result.isError) {
      return result;
    }

    return complete([result.value, src]);
  });
}
