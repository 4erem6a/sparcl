import { Parser } from "../parsing/Parser";

export type ParserResultType<P> = P extends Parser<infer R> ? R : never;
