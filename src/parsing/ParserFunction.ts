import { InputStream } from "../input/InputStream";
import { ParsingResult } from "./ParsingResult";

export type ParserFunction<R> = (source: InputStream) => ParsingResult<R>;
