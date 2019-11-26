import { ParseError } from "./ParseError";
import { InputStream } from "../input/InputStream";

export type ParserResult<T> =
  | { isError: false; value: T }
  | { isError: true; error: ParseError };

export function raise(message: string, source?: InputStream): ParserResult<any>;
export function raise(error: ParseError): ParserResult<any>;
export function raise(
  errorOrMessage: ParseError | string,
  maybeSource?: InputStream
): ParserResult<any> {
  if (errorOrMessage instanceof ParseError) {
    return { isError: true, error: errorOrMessage };
  } else {
    return {
      isError: true,
      error: new ParseError(errorOrMessage, maybeSource)
    };
  }
}

export function complete<T>(value: T): ParserResult<T> {
  return { isError: false, value };
}
