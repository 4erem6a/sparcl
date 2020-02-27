import { ParsingResult } from "./ParsingResult";
import { ParserState } from "./ParserState";

export type ParserFunction<TResult, TState = never> = (
  state: ParserState<TState>
) => ParsingResult<TResult>;
