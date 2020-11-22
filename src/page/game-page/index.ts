import Page from "router/page";
import Problem from "src/lib/models/problem";
import Result from "src/lib/Result";
import View from './view';

class GamePage extends Page {
  private view: View;
  private count: number;
  private intervalId: NodeJS.Timeout;
  private problems: Problem[];
  private currentProblemIndex: number;
  private score: number;
  private result;

  constructor({ problems, result }: {
    problems: Problem[];
    result: Result;
  }) {
    super();
    this.view = new View();
    this.problems = problems;
    this.result = result;
  }

  render() {
    return this.view.createRootElement({
      onClickStartButton: this.onClickStartButton,
      onClickInitializeButton: this.onClickInitializeButton,
      onEnter: this.onEnter,
    });
  }

  onRendered() {

  }

  onClickStartButton = () => {
    this.startGame();
  }

  onClickInitializeButton = () => {
    clearInterval(this.intervalId);
    this.view.toggleButton(true);
  }

  onEnter = (input: string) => {
    const problem = this.problems[this.currentProblemIndex];
    if (problem.text === input) {
      this.result.add(problem, this.count);
      clearInterval(this.intervalId);
      if (this.currentProblemIndex + 1 < this.problems.length) {
        this.startProblem(this.currentProblemIndex + 1);
      } else {
        this.finish();
      }
    }
  }

  onTimeOut = () => {
    clearInterval(this.intervalId);
    this.changeScore(this.score - 1);
    if (this.currentProblemIndex + 1 < this.problems.length) {
      this.startProblem(this.currentProblemIndex + 1);
    } else {
      this.finish();
    }
  }

  startGame() {
    if (this.problems.length > 0) {
      this.result.initialize();
      this.initializeScore();
      this.startProblem(0);
      this.view.toggleButton(false);
    }
  }

  startProblem(index: number) {
    this.currentProblemIndex = index;
    const problem = this.problems[this.currentProblemIndex];
    this.startTimer(problem.second);
    this.view.changeProblemText(problem.text);
  }

  startTimer(count: number) {
    this.changeTimeCount(count);
    this.intervalId = setInterval(() => {
      if (this.count > 0) {
        this.changeTimeCount(this.count - 1);
      } else {
        this.onTimeOut();
      }
    }, 1000);
  }

  finish() {
    this.history.push('result');
  }

  initializeScore() {
    this.changeScore(this.problems.length);
  }

  changeScore(score: number) {
    this.score = score;
    this.view.changeScore(score);
  }

  changeTimeCount(count: number) {
    this.count = count;
    this.view.changeTime(count);
  }
}

export default GamePage;
