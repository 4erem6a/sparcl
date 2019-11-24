import { createParser } from "../parsing/Parser";
import { complete, raise } from "../parsing/ParserResult";

export const eof = createParser<undefined>(src =>
  src.isEof ? complete(undefined) : raise("Expected EOF", src.sourcePosition)
);
