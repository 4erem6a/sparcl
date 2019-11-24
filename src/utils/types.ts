import { Parser } from "../parsing/Parser";

export type ParserResultType<P extends Parser<any>> = P extends Parser<infer R>
  ? R
  : unknown;

export type ParserSequenceResultType<P extends Parser<any>[]> = {
  [K in keyof P]: P[K] extends Parser<infer R> ? R : unknown;
};
