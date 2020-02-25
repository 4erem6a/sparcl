import { ParserFunction } from "./ParserFunction";
import { InputStream } from "@4erem6a/inputstream";
import { ParsingResult, complete } from "./ParsingResult";
import { ParseError } from "./ParseError";

export class Parser<T> {
  public constructor(protected parserFunction: ParserFunction<T>) {}

  public parse(source: string | InputStream): ParsingResult<T> {
    const inputStream = typeof source == "string" ? new InputStream(source) : source;

    return this.parserFunction(inputStream);
  }

  public map<R>(mapper: (result: T) => R): Parser<R> {
    return new Parser<R>(source => {
      const result = this.parse(source);

      return result.isError ? result : complete(mapper(result.value));
    });
  }

  public mapResult<R>(mapper: (result: ParsingResult<T>) => ParsingResult<R>): Parser<R> {
    return new Parser<R>(source => {
      const result = this.parse(source);

      return mapper(result);
    });
  }

  public mapError<R>(mapper: (error: ParseError) => ParsingResult<R>): Parser<T | R> {
    return new Parser<T | R>(source => {
      const result = this.parse(source);

      return result.isError ? mapper(result.error) : result;
    });
  }

  public chain<R>(fn: (result: ParsingResult<T>) => Parser<R>): Parser<R> {
    return new Parser<R>(source => {
      const result = this.parse(source);

      return fn(result).parse(source);
    });
  }

  public default<R = T>(defaultResult: R): Parser<T | R> {
    return this.mapError<R>(() => complete(defaultResult));
  }

  public throwing(): Parser<T> {
    return this.mapError<T>(error => {
      throw error;
    });
  }
}
