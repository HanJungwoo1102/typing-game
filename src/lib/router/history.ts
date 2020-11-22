class History {
  private history: Path[];
  private onPushed: (path: Path) => void;
  private onPoped: (path: Path) => void;

  constructor({ onPushed, onPoped }: {
    onPushed: (path: Path) => void;
    onPoped: (path: Path) => void;
  }) {
    this.onPushed = onPushed;
    this.onPoped = onPoped;
    this.history = [];
  }

  push(path: Path) {
    this.history.push(path);

    this.onPushed(path);
  };

  pop() {
    const path = this.history.pop();

    this.onPoped(path);
  }
}

type Path = string;

export default History;
