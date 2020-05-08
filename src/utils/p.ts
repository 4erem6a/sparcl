import { Parser } from "../parsing/Parser";
import { string } from "../parsers/basic/string";

export function p(
  template: TemplateStringsArray,
  ...substitutions: never[]
): Parser<string> {
  const pattern = String.raw(template, substitutions);

  return string(pattern);
}
