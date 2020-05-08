import { oneOrMore } from "../../combinators/quantifiers/oneOrMore";
import { digit } from "../basic/digit";

export const digits = oneOrMore(digit);
