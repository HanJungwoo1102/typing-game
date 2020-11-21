class Counter {
  private _count: number;

  constructor() {
    this._count = 0
  }

  get count() {
    return this._count;
  }

  set count(count: number) {
    this._count = count;
  }

  countDown() {
    this._count -= 1;
  }
}

export default Counter;

const a = new Counter();
