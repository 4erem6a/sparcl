import { takeOneOrMore } from "./../combinators/takeOneOrMore";
import { letter } from "./letter";

export const letters = takeOneOrMore(letter).map(res => res.join(""));
