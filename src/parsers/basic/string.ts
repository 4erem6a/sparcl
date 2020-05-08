import { Parser } from "../../parsing/Parser";
import { complete, raise } from "../../parsing/ParsingResult";

export function string(pattern: string): Parser<string> {
  return new Parser<string>((src) =>
    src.match(pattern) ? complete(pattern) : raise(`Expected "${pattern}"`, src)
  );
}
