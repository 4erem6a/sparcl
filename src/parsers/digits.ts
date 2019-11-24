import { takeAll } from "../combinators/takeAll";
import { digit } from "./digit";

export const digits = takeAll(digit).map(res => res.join(""));
