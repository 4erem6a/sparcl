import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult } from "./ParsingResult";

export interface ParserState<T = never> {
  source: InputStream;
  result: T extends never ? undefined : ParsingResult<T>;
}
