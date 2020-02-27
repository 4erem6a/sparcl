import { Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function zeroOrMore<T>(parser: Parser<T>): Parser<T[]> {
  return new Parser<T[]>(src => {
    const result: T[] = [];

    let currentResult = parser.parse(src);

    while (!currentResult.isError) {
      result.push(currentResult.value);

      currentResult = parser.parse(src);
    }

    return complete(result);
  });
}
