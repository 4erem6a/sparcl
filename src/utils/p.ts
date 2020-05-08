import { Parser } from "../parsing/Parser";
import { string } from "../parsers/basic/string";

export function p(
  template: TemplateStringsArray,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...substitutions: any[]
): Parser<string> {
  const pattern = String.raw(template, substitutions);

  return string(pattern);
}
