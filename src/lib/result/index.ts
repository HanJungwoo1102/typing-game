import Problem from "../problem";

class Result {
  private maxScore: number;
  private times: number[];
  private score: number;

  constructor(maxScore: number) {
    this.times = [];
    this.maxScore = maxScore;
    this.score = maxScore;
  }

  addRightResult(proble: Problem, time: number) {
    this.times.push(proble.getSecond() - time);
  }
  
  addWrongResult() {
    this.score -= 1;
  }

  initialize() {
    this.times = [];
    this.score = this.maxScore;
  }

  getAvgTime() {
    if (this.times.length > 0) {
      return this.times.reduce((acc, cur) => acc + cur, 0) / this.times.length;
    } else {
      return 0;
    }
  }

  getScore() {
    return this.score;
  }
}

export default Result;
