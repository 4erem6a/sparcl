import { regexp } from "./regexp";
import { complete, raise } from "../parsing/ParserResult";

export const letter = regexp(/^[a-zA-Z]/).mapResult<string>(r =>
  r.isError ? raise("Expected letter", r.error.position) : complete(r.value[0])
);
