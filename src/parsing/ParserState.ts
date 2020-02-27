import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult } from "./ParsingResult";

type ParserStateResult<T> = T extends never ? undefined : ParsingResult<T>;

export interface ParserState<T = never> {
  source: InputStream;
  result: ParserStateResult<T>;
}

export function createState(source: InputStream): ParserState;
export function createState<T>(
  source: InputStream,
  result: ParserStateResult<T>
): ParserState;

export function createState<T>(
  source: InputStream,
  result?: ParserStateResult<T>
): ParserState<T> {
  return {
    source,
    result: result as ParserStateResult<T>
  };
}
