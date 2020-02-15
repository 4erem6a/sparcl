import { Parser, createParser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function separatedBy<T>(separator: Parser<any>, parser: Parser<T>) {
  return createParser<T[]>(src => {
    const result = [];

    do {
      const currentResult = parser.parse(src);

      if (currentResult.isError) {
        return currentResult;
      }

      result.push(currentResult.value);
    } while (!separator.parse(src).isError);

    return complete(result);
  });
}
