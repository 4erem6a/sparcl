import { InputStream } from "@4erem6a/inputstream";
import { createParser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export function tapSource(fn: (src: InputStream) => void) {
  return createParser<undefined>(src => {
    fn(src);

    return complete(undefined);
  });
}
