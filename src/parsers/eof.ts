import { createParser } from "../parsing/Parser";
import { complete, raise } from "../parsing/ParsingResult";

export const eof = createParser<undefined>(src =>
  src.isEof ? complete(undefined) : raise("Expected EOF", src)
);
