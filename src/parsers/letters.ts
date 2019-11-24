import { takeAll } from "../combinators/takeAll";
import { letter } from "./letter";

export const letters = takeAll(letter).map(res => res.join(""));
