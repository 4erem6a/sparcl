import { createParser, Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";
import { ParserSequenceResultType } from "../utils/types";

export function sequence<T extends Parser<any>[]>(...parsers: T) {
  return createParser<ParserSequenceResultType<T>>(src => {
    const result = [];

    for (let parser of parsers) {
      const currentResult = parser.parse(src);

      if (currentResult.isError) {
        return currentResult;
      }

      result.push(currentResult.value);
    }

    return complete(result as ParserSequenceResultType<T>);
  });
}
