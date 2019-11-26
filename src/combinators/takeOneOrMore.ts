import { Parser, createParser } from "../parsing/Parser";
import { complete } from "../parsing/ParserResult";

export function takeOneOrMore<T>(parser: Parser<T>) {
  return createParser<T[]>(src => {
    const result = [];

    let currentResult = parser.parse(src);

    if (currentResult.isError) {
      return currentResult;
    }

    while (!currentResult.isError) {
      result.push(currentResult.value);

      currentResult = parser.parse(src);
    }

    return complete(result);
  });
}
