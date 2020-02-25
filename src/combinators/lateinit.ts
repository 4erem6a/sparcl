import { Parser } from "../parsing/Parser";
import { raise } from "../parsing/ParsingResult";

export class LateinitParser<T> extends Parser<T> {
  public constructor() {
    super(src => raise("Uninitialized lateinit parser", src));
  }

  public init(parser: Parser<T>): void {
    this.parserFunction = src => parser.parse(src);
  }
}

export function lateinit<T>(): Parser<T> {
  return new LateinitParser<T>();
}
