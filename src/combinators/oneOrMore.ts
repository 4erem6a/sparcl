import { Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function oneOrMore<T>(parser: Parser<T>): Parser<T[]> {
  return new Parser<T[]>(src => {
    const result: T[] = [];

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
