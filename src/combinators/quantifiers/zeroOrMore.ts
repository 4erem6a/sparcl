import { Parser } from "../../parsing/Parser";
import { quantifier } from "./quantifier";

export function zeroOrMore<T>(parser: Parser<T>): Parser<T[]> {
  return quantifier(parser, 0, Infinity);
}
