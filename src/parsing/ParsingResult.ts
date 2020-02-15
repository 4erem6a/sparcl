import { ParseError } from "./ParseError";
import { InputStream } from "@4erem6a/inputstream";

export type ParsingResult<T> =
  | { isError: false; value: T }
  | { isError: true; error: ParseError };

export function raise(
  message: string,
  source?: InputStream
): ParsingResult<any>;
export function raise(error: ParseError): ParsingResult<any>;
export function raise(
  errorOrMessage: ParseError | string,
  maybeSource?: InputStream
): ParsingResult<any> {
  if (errorOrMessage instanceof ParseError) {
    return { isError: true, error: errorOrMessage };
  } else {
    return {
      isError: true,
      error: new ParseError(errorOrMessage, maybeSource)
    };
  }
}

export function complete<T>(value: T): ParsingResult<T> {
  return { isError: false, value };
}
