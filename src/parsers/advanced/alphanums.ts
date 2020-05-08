import { oneOrMore } from "../../combinators/quantifiers/oneOrMore";
import { alphanum } from "./alphanum";

export const alphanums = oneOrMore(alphanum);
