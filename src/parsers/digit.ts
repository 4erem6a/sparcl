import { regexp } from "./regexp";
import { complete, raise } from "../parsing/ParsingResult";

export const digit = regexp(/^\d/).mapResult<string>(r =>
  r.isError ? raise("Expected digit", r.error.source) : complete(r.value[0])
);
