import { Parser } from "../parsing/Parser";
import { ParsingResult } from "../parsing/ParsingResult";
import { InputStream } from "@4erem6a/inputstream";

export function tap<T>(
  parser: Parser<T>,
  fn: (result: ParsingResult<T>, source: InputStream) => void
): Parser<T> {
  return new Parser<T>(src => {
    const result = parser.parse(src);

    fn(result, src);

    return result;
  });
}
