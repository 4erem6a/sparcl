import { regexp } from "./regexp";
import { raise, complete } from "../parsing/ParserResult";

export const whitespace = regexp(/^\s/).mapResult<string>(r =>
  r.isError
    ? raise("Expected whitespace", r.error.source)
    : complete(r.value[0])
);
