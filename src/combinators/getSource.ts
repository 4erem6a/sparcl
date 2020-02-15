import { Parser } from "../parsing/Parser";
import { InputStream } from "@4erem6a/inputstream";
import { complete } from "../parsing/ParsingResult";

export function getSource<T>(parser: Parser<T>): Parser<[T, InputStream]> {
  return new Parser<[T, InputStream]>(src => {
    const result = parser.parse(src);

    if (result.isError) {
      return result;
    }

    return complete([result.value, src]);
  });
}
