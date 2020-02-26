import { Parser } from "../parsing/Parser";
import { raise, ParsingResult } from "../parsing/ParsingResult";
import { InputStream } from "@4erem6a/inputstream";

export class LateinitParser<T> extends Parser<T> {
  public constructor() {
    super(src => raise("Uninitialized lateinit parser", src));
  }

  public init(parser: Parser<T>): void {
    this.parserFunction = (src: InputStream): ParsingResult<T> => parser.parse(src);
  }
}

export function lateinit<T>(): LateinitParser<T> {
  return new LateinitParser<T>();
}
