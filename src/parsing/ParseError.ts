import { InputStream } from "../input/InputStream";
import { SourcePosition } from "../input/SourcePosition";

export class ParseError extends Error {
  public readonly line?: string;
  public readonly position?: SourcePosition;

  public constructor(
    public readonly shortMessage: string,
    public readonly source?: InputStream
  ) {
    super(
      `${shortMessage}${
        source
          ? ` at ${source.sourcePosition.line}:${
              source.sourcePosition.column
            }${createPointer(source)}`
          : ""
      }`
    );

    if (source) {
      this.line = source.currentLine;
      this.position = source.sourcePosition;
    }
  }
}

function createPointer(src: InputStream): string {
  const errorLine = src.currentLine;
  const errorPosition = src.sourcePosition.column;

  return `\n${errorLine}\n${" ".repeat(errorPosition)}^`;
}
