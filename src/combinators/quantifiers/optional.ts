import { Parser } from "../../parsing/Parser";
import { quantifier } from "./quantifier";

export function optional<T>(parser: Parser<T>): Parser<T | undefined> {
  return quantifier(parser, 0, 1).map((result) =>
    result.length == 0 ? undefined : result[0]
  );
}
