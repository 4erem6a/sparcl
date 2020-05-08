import { either } from "../../combinators/either";
import { letter } from "../basic/letter";
import { digit } from "../basic/digit";

export const alphanum = either(letter, digit);
