import { regexp } from "./regexp";
import { complete, raise } from "../parsing/ParserResult";

export const digit = regexp(/^\d/).mapResult<string>(r =>
  r.isError ? raise("Expected digit", r.error.position) : complete(r.value[0])
);
