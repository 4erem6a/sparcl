import { ParseError } from "./ParseError";
import { SourcePosition } from "../input/SourcePosition";

export type ParserResult<T> =
  | { isError: false; value: T }
  | { isError: true; error: ParseError };

export function raise(
  message: string,
  position: SourcePosition
): ParserResult<any>;
export function raise(error: ParseError): ParserResult<any>;
export function raise(
  errorOrMessage: ParseError | string,
  maybePosition?: SourcePosition
): ParserResult<any> {
  if (errorOrMessage instanceof ParseError) {
    return { isError: true, error: errorOrMessage };
  } else {
    return {
      isError: true,
      error: new ParseError(maybePosition as SourcePosition, errorOrMessage)
    };
  }
}

export function complete<T>(value: T): ParserResult<T> {
  return { isError: false, value };
}
