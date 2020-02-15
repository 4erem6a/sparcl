import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult } from "./ParsingResult";

export type ParserFunction<R> = (source: InputStream) => ParsingResult<R>;
