import { Parser } from "../parsing/Parser";
import { complete, ParsingResult } from "../parsing/ParsingResult";

export function separatedBy<T, S>(
  separator: Parser<S>,
  parser: Parser<T>
): Parser<[T[], S[]]> {
  return new Parser<[T[], S[]]>((src) => {
    const result: T[] = [];
    const separators: S[] = [];

    let currentSeparator: ParsingResult<S>;

    do {
      const currentResult = parser.parse(src);

      if (currentResult.isError) {
        return currentResult;
      }

      result.push(currentResult.value);

      currentSeparator = separator.parse(src);

      if (!currentSeparator.isError) {
        separators.push(currentSeparator.value);
      }
    } while (!currentSeparator.isError);

    return complete([result, separators]);
  });
}
