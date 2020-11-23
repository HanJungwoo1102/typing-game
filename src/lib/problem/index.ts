class Problem {
  private second;
  private text;

  constructor({ second, text }: { second: number, text: string }) {
    this.second = second;
    this.text = text;
  }

  getSecond() {
    return this.second;
  }

  getText() {
    return this.text;
  }
}

export default Problem;
