import { Parser } from "../parsing/Parser";
import { ParseError } from "../parsing/ParseError";
import { complete, raise } from "../parsing/ParsingResult";
import { ParserResultType } from "../utils/types";

type EitherResult<T extends Parser<unknown>[]> = T[number] extends never
  ? undefined
  : ParserResultType<T[number]>;

export function either<T extends Parser<unknown>[]>(
  ...parsers: T
): Parser<EitherResult<T>> {
  return new Parser<EitherResult<T>>(src => {
    let error: ParseError | undefined;

    for (const parser of parsers) {
      const result = parser.parse(src);

      if (result.isError) {
        error = result.error;
      } else {
        return complete(result.value as EitherResult<T>);
      }
    }

    return error ? raise(error) : complete(undefined as EitherResult<T>);
  });
}
