import { Parser, createParser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function takeAll<T>(parser: Parser<T>) {
  return createParser<T[]>(src => {
    const result = [];

    let currentResult = parser.parse(src);

    while (!currentResult.isError) {
      result.push(currentResult.value);

      currentResult = parser.parse(src);
    }

    return complete(result);
  });
}
