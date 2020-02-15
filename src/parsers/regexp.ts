import { createParser } from "../parsing/Parser";
import { complete, raise } from "../parsing/ParsingResult";

export function regexp(pattern: RegExp) {
  return createParser<RegExpMatchArray>(src => {
    const match = src.matchRegExp(pattern);

    if (!match) {
      return raise(`Expected /${pattern.source}/${pattern.flags}`, src);
    }

    src.move(match[0].length);

    return complete(match);
  });
}
