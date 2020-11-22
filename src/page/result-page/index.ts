import Page from "router/page";
import View from './view';

class ResultPage extends Page {
  private view: View;
  private avgTime;
  private score;

  constructor({ avgTime, score }: {
    avgTime: number;
    score: number;
  }) {
    super();
    this.view = new View();
    this.avgTime = avgTime;
    this.score = score;
  }

  onRendered() {

  }

  render() {
    return this.view.createRootElement({
      avgTime: this.avgTime,
      score: this.score,
      onClickRestartButton: this.onClickRestartButton,
    });
  }

  onClickRestartButton = () => {
    this.history.push('game');
  }
}

export default ResultPage;
