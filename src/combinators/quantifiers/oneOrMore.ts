import { Parser } from "../../parsing/Parser";
import { quantifier } from "./quantifier";

export function oneOrMore<T>(parser: Parser<T>): Parser<T[]> {
  return quantifier(parser, 1, Infinity);
}
