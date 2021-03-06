import { createParser } from "../parsing/Parser";
import { complete, raise } from "../parsing/ParserResult";

export function string(pattern: string) {
  return createParser<string>(src =>
    src.match(pattern) ? complete(pattern) : raise(`Expected "${pattern}"`, src)
  );
}
