import { zeroOrMore } from "../../combinators/quantifiers/zeroOrMore";
import { whitespace } from "../basic/whitespace";

export const whitespaces = zeroOrMore(whitespace);
