import { takeOneOrMore } from "./../combinators/takeOneOrMore";
import { digit } from "./digit";

export const digits = takeOneOrMore(digit).map(res => res.join(""));
