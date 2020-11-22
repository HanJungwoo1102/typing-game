import Problem from "./problem";

class Result {
  private result: number[];

  constructor() {
    this.result = [];
  }

  add(proble: Problem, time: number) {
    this.result.push(proble.getSecond() - time);
  }

  initialize() {
    this.result = [];
  }

  getAvgTime() {
    if (this.result.length > 0) {
      return this.result.reduce((acc, cur) => acc + cur, 0) / this.result.length;
    } else {
      return 0;
    }
  }

  getScore() {
    return this.result.length;
  }
}

export default Result;
