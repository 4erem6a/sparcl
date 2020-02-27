import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult } from "./ParsingResult";

export interface ParserState<T = never> {
  source: InputStream;
  result?: ParsingResult<T>;
}

export function createState(source: InputStream): ParserState;
export function createState<T>(
  source: InputStream,
  result: ParsingResult<T>
): ParserState;

export function createState<T>(
  source: InputStream,
  result?: ParsingResult<T>
): ParserState<T> {
  return { source, result };
}

export function updateState<T, R>(
  state: ParserState<T>,
  result: ParsingResult<R>
): ParserState<R> {
  return { ...state, result };
}
