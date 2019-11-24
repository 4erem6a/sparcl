import { Parser, createParser } from "../parsing/Parser";
import { ParseError } from "../parsing/ParseError";
import { complete, raise } from "../parsing/ParserResult";
import { ParserResultType } from "../utils/types";

export function either<T extends Parser<any>[]>(...parsers: T) {
  return createParser<
    T[number] extends never ? undefined : ParserResultType<T[number]>
  >(src => {
    let error: ParseError | undefined;

    for (let parser of parsers) {
      const result = parser.parse(src);

      if (result.isError) {
        error = result.error;
      } else {
        return complete(result.value);
      }
    }

    return error ? raise(error) : complete(undefined);
  });
}
