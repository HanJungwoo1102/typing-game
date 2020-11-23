import Game from "lib/game";
import Problem from "lib/problem";
import Result from "lib/Result";
import Counter from "lib/counter";

class State {
  private counter: Counter;
  private intervalId: NodeJS.Timeout;
  private result: Result;
  private game: Game;
  
  private changeProblemTextView;
  private changeTimeView;
  private changeScoreView;
  private toggleButtonView;
  private toggleButtonDisabled;
  private routeToResult;

  constructor({
    problems, result,
    changeProblemTextView, changeTimeView, changeScoreView,
    toggleButtonView, toggleButtonDisabled,
    routeToResult,
  }: {
    problems: Problem[];
    result: Result;
    changeProblemTextView: (text: string) => void;
    changeTimeView: (time: number) => void;
    changeScoreView: (score: number) => void;
    toggleButtonView: (isShownStartButton: boolean) => void;
    toggleButtonDisabled: (isButtonDisabled: boolean) => void;
    routeToResult: () => void;
  }) {
    this.game = new Game({ problems })
    this.result = result;
    this.counter = new Counter();
    this.changeProblemTextView = changeProblemTextView;
    this.changeTimeView = changeTimeView;
    this.changeScoreView = changeScoreView;
    this.toggleButtonView = toggleButtonView;
    this.routeToResult = routeToResult;
    this.toggleButtonDisabled = toggleButtonDisabled;
  }

  onClickStartButton() {
    this.toggleButtonDisabled(false);
    this.toggleButtonView(false);
    this.startNextProblem();
  }

  onClickInitializeButton() {
    clearInterval(this.intervalId);
    this.game.initialize();
    this.result.initialize();

    this.toggleButtonView(true);
    this.toggleButtonDisabled(true);
    this.changeProblemTextView('문제 단어');
    this.changeScoreView(this.result.getScore());
  }

  onEnter(input: string) {
    if (this.game.isRight(input)) {
      clearInterval(this.intervalId);
      this.result.addRightResult(this.game.getCurrentProblem(), this.counter.getCount());
      if (this.game.hasNextProblem()) {
        this.startNextProblem();
      } else {
        this.finish();
      }
    }
  }

  private onTimeOut() {
    clearInterval(this.intervalId);
    this.result.addWrongResult();
    this.changeScoreView(this.result.getScore());
    if (this.game.hasNextProblem()) {
      this.startNextProblem();
    } else {
      this.finish();
    }
  }

  private startNextProblem() {
    this.game.nextProblem();
    const problem = this.game.getCurrentProblem();
    this.changeProblemTextView(problem.getText());
    this.startTimer(problem.getSecond());
  }

  private startTimer(count: number) {
    this.counter.setCount(count);
    this.changeTimeView(count);
    this.intervalId = setInterval(() => {
      if (this.counter.isEnd()) {
        this.onTimeOut();
      } else {
        this.counter.countDown();
        this.changeTimeView(this.counter.getCount());
      }
    }, 1000);
  }

  private finish() {
    this.routeToResult();
  }
}

export default State;
