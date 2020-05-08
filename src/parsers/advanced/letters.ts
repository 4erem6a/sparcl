import { oneOrMore } from "../../combinators/quantifiers/oneOrMore";
import { letter } from "./../basic/letter";

export const letters = oneOrMore(letter);
