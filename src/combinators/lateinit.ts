import { Parser } from "../parsing/Parser";
import { raise } from "../parsing/ParsingResult";
import { ParserFunction } from "../parsing/ParserFunction";

export class LateinitParser<T> extends Parser<T> {
  public constructor() {
    super(src => raise("Uninitialized lateinit parser", src));
  }

  public init(parserFunction: ParserFunction<T>): void {
    this.parserFunction = parserFunction;
  }
}

export function lateinit<T>(): Parser<T> {
  return new LateinitParser<T>();
}
