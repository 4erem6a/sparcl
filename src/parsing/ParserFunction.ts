import { InputStream } from "../input/InputStream";
import { ParserResult } from "./ParserResult";

export type ParserFunction<R> = (source: InputStream) => ParserResult<R>;
