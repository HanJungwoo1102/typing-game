import Problem from "../problem";

class Game {
  private problems: Problem[];
  private currentProblemIndex: number;

  constructor({ problems }: { problems: Problem[] }) {
    this.problems = problems;
    this.currentProblemIndex = -1;
  }

  initialize() {
    this.currentProblemIndex = -1;
  }

  isRight(text: string) {
    const problem = this.getCurrentProblem();

    if (problem) {
      return problem.getText() === text;
    }
  }

  hasNextProblem() {
    return this.currentProblemIndex + 1 < this.problems.length;
  }

  nextProblem() {
    this.currentProblemIndex += 1;
  }

  getCurrentProblem() {
    return this.problems[this.currentProblemIndex];
  }
}

export default Game;
