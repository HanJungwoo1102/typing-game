import Router from "router/router";
import Route from "router/route";
import GamePage from "page/game-page";
import ResultPage from "page/result-page";
import fetchWords from "../lib/fetch/fetch-words";
import Problem from "../lib/models/problem";
import Result from "../lib/Result";

class App {
  constructor() {
    this.startRouting();
  }

  private async startRouting() {
    const problems: Problem[] = await fetchWords();
    const result = new Result();
    const rootElement = document.getElementById('root');

    if (rootElement) {
      new Router(
        rootElement,
        [
          new Route({
            path: 'game',
            getPage: () => {
              result.initialize();
              return new GamePage({
                problems,
                result,
              })
            },
          }),
          new Route({
            path: 'result',
            getPage: () => new ResultPage({
              avgTime: result.getAvgTime(),
              score: result.getScore(),
            }),
          }),
        ],
        'game',
      );
    }
  }
}

export default App;
