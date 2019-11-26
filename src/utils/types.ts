import { Parser } from "../parsing/Parser";

export type ParserResultType<P> = P extends Parser<infer R> ? R : unknown;

export type ParserSequenceResultType<P> = {
  [K in keyof P]: ParserResultType<P[K]>;
};
