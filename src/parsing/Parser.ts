import { ParserFunction } from "./ParserFunction";
import { InputStream } from "../input/InputStream";
import { ParserResult, complete, raise } from "./ParserResult";
import { ParseError } from "./ParseError";

export class Parser<T> {
  public constructor(public readonly parserFunction: ParserFunction<T>) {}

  public parse(source: string): ParserResult<T>;
  public parse(source: InputStream): ParserResult<T>;
  public parse(source: string | InputStream): ParserResult<T>;
  public parse(source: string | InputStream): ParserResult<T> {
    const inputStream =
      typeof source == "string" ? new InputStream(source) : source;

    return this.parserFunction(inputStream);
  }

  public map<R>(mapper: (result: T) => R) {
    return new Parser<R>(source => {
      const result = this.parse(source);

      return result.isError ? result : complete(mapper(result.value));
    });
  }

  public mapResult<R>(mapper: (result: ParserResult<T>) => ParserResult<R>) {
    return new Parser<R>(source => {
      const result = this.parse(source);

      return mapper(result);
    });
  }

  public mapError<R>(mapper: (error: ParseError) => ParserResult<R>) {
    return new Parser<T | R>(source => {
      const result = this.parse(source);

      return result.isError ? mapper(result.error) : result;
    });
  }

  public default<R = T>(defaultResult: R) {
    return this.mapError<R>(() => complete(defaultResult));
  }

  public throwing() {
    return this.mapError<T>(error => {
      throw error;
    });
  }

  public chain<R>(fn: (result: ParserResult<T>) => Parser<R>) {
    return createParser<R>(source => {
      const result = this.parse(source);

      return fn(result).parse(source);
    });
  }

  public toFunction() {
    return (source: string | InputStream) => this.parse(source);
  }

  public toAsyncFunction() {
    return (source: string | InputStream) =>
      new Promise<T>((resolve, reject) => {
        try {
          const result = this.parse(source);

          if (result.isError) {
            reject(result.error);
          } else {
            resolve(result.value);
          }
        } catch (error) {
          reject(error);
        }
      });
  }

  public tapResult(fn: (result: ParserResult<T>) => void) {
    return this.mapResult(result => {
      fn(result);

      return result;
    });
  }
}

export function createParser<T>(parserFunction: ParserFunction<T>): Parser<T> {
  return new Parser(parserFunction);
}
