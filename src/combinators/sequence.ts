import { Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";
import { ParserResultType } from "../utils/types";

export type ParserSequenceResultType<P> = {
  [K in keyof P]: ParserResultType<P[K]>;
};

export function sequence<T extends Parser<unknown>[]>(
  ...parsers: T
): Parser<ParserSequenceResultType<T>> {
  return new Parser<ParserSequenceResultType<T>>(src => {
    const result = [];

    for (const parser of parsers) {
      const currentResult = parser.parse(src);

      if (currentResult.isError) {
        return currentResult;
      }

      result.push(currentResult.value);
    }

    return complete(result as ParserSequenceResultType<T>);
  });
}
