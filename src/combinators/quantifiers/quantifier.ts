import { Parser } from "../../parsing/Parser";
import { complete, ParsingResult } from "../../parsing/ParsingResult";

export function quantifier<T>(parser: Parser<T>, min: number, max: number): Parser<T[]> {
  return new Parser<T[]>((src) => {
    const result: T[] = [];

    let currentResult = parser.parse(src);

    while (!currentResult.isError && result.length < max) {
      result.push(currentResult.value);

      currentResult = parser.parse(src);
    }

    if (result.length < min) {
      return currentResult as ParsingResult<T[]>;
    }

    return complete(result);
  });
}
