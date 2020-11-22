import Problem from "../../lib/models/problem";
import Result from "../../lib/Result";

class State {
  private count: number;
  private intervalId: NodeJS.Timeout;
  private problems: Problem[];
  private currentProblemIndex: number;
  private score: number;
  private result: Result;
  
  private changeProblemTextView;
  private changeTimeView;
  private changeScoreView;
  private toggleButtonView;
  private routeToResult;

  constructor({
    problems, result,
    changeProblemTextView, changeTimeView, changeScoreView, toggleButtonView,
    routeToResult,
  }: {
    problems: Problem[];
    result: Result;
    changeProblemTextView: (text: string) => void;
    changeTimeView: (time: number) => void;
    changeScoreView: (score: number) => void;
    toggleButtonView: (isShownStartButton: boolean) => void;
    routeToResult: () => void;
  }) {
    this.problems = problems;
    this.result = result;
    this.changeProblemTextView = changeProblemTextView;
    this.changeTimeView = changeTimeView;
    this.changeScoreView = changeScoreView;
    this.toggleButtonView = toggleButtonView;
    this.routeToResult = routeToResult;
  }

  onClickStartButton = () => {
    this.startGame();
  }

  onClickInitializeButton = () => {
    clearInterval(this.intervalId);
    this.toggleButtonView(true);
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

  private onTimeOut = () => {
    clearInterval(this.intervalId);
    this.changeScore(this.score - 1);
    if (this.currentProblemIndex + 1 < this.problems.length) {
      this.startProblem(this.currentProblemIndex + 1);
    } else {
      this.finish();
    }
  }

  private startGame() {
    if (this.problems.length > 0) {
      this.result.initialize();
      this.initializeScore();
      this.startProblem(0);
      this.toggleButtonView(false);
    }
  }

  private startProblem(index: number) {
    this.currentProblemIndex = index;
    const problem = this.problems[this.currentProblemIndex];
    this.startTimer(problem.second);
    this.changeProblemTextView(problem.text);
  }

  private startTimer(count: number) {
    this.changeTimeCount(count);
    this.intervalId = setInterval(() => {
      if (this.count > 0) {
        this.changeTimeCount(this.count - 1);
      } else {
        this.onTimeOut();
      }
    }, 1000);
  }

  private finish() {
    this.routeToResult();
  }

  private initializeScore() {
    this.changeScore(this.problems.length);
  }

  private changeScore(score: number) {
    this.score = score;
    this.changeScoreView(score);
  }

  private changeTimeCount(count: number) {
    this.count = count;
    this.changeTimeView(count);
  }
}

export default State;
