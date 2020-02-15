import { Parser } from "../parsing/Parser";
import { ParsingResult } from "../parsing/ParsingResult";

export function tap<T>(
  parser: Parser<T>,
  fn: (result: ParsingResult<T>) => void
): Parser<T> {
  return parser.mapResult(result => {
    fn(result);

    return result;
  });
}
