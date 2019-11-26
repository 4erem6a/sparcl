import { SourcePosition } from "./SourcePosition";

export class InputStream {
  private _position: number = 0;

  public constructor(public readonly source: string) {}

  public get length() {
    return this.source.length;
  }

  public get position() {
    return this._position;
  }

  public get sourcePosition() {
    const slice = this.slice(0, this._position);

    const line = slice.split("").filter(c => c == "\n").length + 1;

    const column = slice.includes("\n")
      ? slice.slice(slice.lastIndexOf("\n")).length + 1
      : this._position;

    return {
      line,
      column,
      absolute: this._position
    } as SourcePosition;
  }

  public get currentLine() {
    const leadingLinebreak = this.slice(0, this._position).lastIndexOf("\n");
    const trailingLinebreak = this.slice(this._position).indexOf("\n");

    const line = this.slice(
      leadingLinebreak == -1 ? 0 : leadingLinebreak + 1,
      trailingLinebreak == -1 ? undefined : this._position + trailingLinebreak
    );

    return line;
  }

  public get isEof() {
    return this._position >= this.length;
  }

  public get isValid() {
    return this._position >= 0 && !this.isEof;
  }

  public peek(offset: number = 0) {
    return this.source[this._position + offset];
  }

  public peekMany(count: number, offset: number = 0) {
    return this.source.substr(this._position + offset, count);
  }

  public get current() {
    return this.peek();
  }

  public get next() {
    return this.peek(1);
  }

  public move(offset: number) {
    return (this._position += offset);
  }

  public reset() {
    this._position = 0;
  }

  public slice(start: number, end?: number) {
    return this.source.slice(start, end);
  }

  public is(pattern: string, offset: number = 0, end?: number) {
    return this.slice(this._position + offset, end).startsWith(pattern);
  }

  public isOneOf(patterns: string[], offset: number = 0, end?: number) {
    return patterns.some(p => this.is(p, offset, end));
  }

  public findOneOf(patterns: string[], offset: number = 0, end?: number) {
    return patterns.find(p => this.is(p, offset, end));
  }

  public match(pattern: string, offset: number = 0, end?: number) {
    const result = this.is(pattern, offset, end);

    if (result) {
      this.move(pattern.length + offset);
    }

    return result;
  }

  public matchOneOf(patterns: string[], offset: number = 0, end?: number) {
    return patterns.some(p => this.match(p, offset, end));
  }

  public findMatching(patterns: string[], offset: number = 0, end?: number) {
    return patterns.find(p => this.match(p, offset, end));
  }

  public test(pattern: RegExp, offset: number = 0, end?: number) {
    return pattern.test(this.slice(this._position + offset, end));
  }

  public matchRegExp(pattern: RegExp, offset: number = 0, end?: number) {
    return this.slice(this._position + offset, end).match(pattern);
  }
}
