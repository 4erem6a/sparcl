import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult } from "./ParsingResult";

export interface ParserState<T> {
  source: InputStream;
  result: ParsingResult<T>;
}
