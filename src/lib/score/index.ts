class Score {
  private maxScore: number
  private score: number;
  constructor({ score }: { score: number }) {
    this.maxScore = score;
    this.score = score;
  }

  wrong() {
    this.score -= 1;
  }

  initialize() {
    this.score = this.maxScore;
  }

  getScore() {
    return this.score;
  }
}

export default Score;
