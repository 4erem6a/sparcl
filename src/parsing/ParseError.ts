import { SourcePosition } from "../input/SourcePosition";

export class ParseError extends Error {
  public constructor(
    public readonly position: SourcePosition,
    public readonly shortMessage: string
  ) {
    super(`${shortMessage} at ${position.line}:${position.column}`);
  }
}
