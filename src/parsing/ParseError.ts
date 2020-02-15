import { InputStream, SourceLocation } from "@4erem6a/inputstream";

export class ParseError extends Error {
  public readonly line?: string;
  public readonly location?: SourceLocation;

  public constructor(message: string, public readonly source?: InputStream) {
    super(message);

    if (source) {
      this.line = source.currentLine;
      this.location = source.location;
    }
  }
}
