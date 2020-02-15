import { InputStream } from "@4erem6a/inputstream";
import { Parser } from "../parsing/Parser";
import { complete } from "../parsing/ParsingResult";

export const source = new Parser<InputStream>(src => complete(src));
