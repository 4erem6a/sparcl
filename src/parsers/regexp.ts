import { Parser } from "../parsing/Parser";
import { complete, raise } from "../parsing/ParsingResult";

const normalizeRegExp = (regexp: RegExp): RegExp =>
  regexp.source.startsWith("^") ? regexp : new RegExp(`^${regexp.source}`, regexp.flags);

export function regexp(pattern: RegExp): Parser<RegExpMatchArray> {
  return new Parser<RegExpMatchArray>(src => {
    const match = src.matchRegExp(normalizeRegExp(pattern));

    if (!match) {
      return raise(`Expected /${pattern.source}/${pattern.flags}`, src);
    }

    src.move(match[0].length);

    return complete(match);
  });
}
