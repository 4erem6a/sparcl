import { Parser } from "../../parsing/Parser";
import { complete, raise } from "../../parsing/ParsingResult";

export const eof = new Parser<undefined>((src) =>
  src.isEof ? complete(undefined) : raise("Expected EOF", src)
);
