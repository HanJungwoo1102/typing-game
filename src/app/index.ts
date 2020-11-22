import Router from "router/router";
import Route from "router/route";
import fetchWords from "../lib/fetch/fetch-words";
import Problem from "../lib/models/problem";
import Result from "../lib/Result";
import createGamePageElement from "page/game-page";
import createResultPageElement from "page/result-page";

class App {
  constructor() {
    this.startRouting();
  }

  private async startRouting() {
    let problems: Problem[];
  
    try {
      problems = await fetchWords();
    } catch(error) {
      alert('문제를 불러오는데 실패했습니다.');
      console.error(error);
    }
  
    if (problems && problems.length > 0) {
      const result = new Result();
      const rootElement = document.getElementById('root');
  
      if (rootElement) {
        new Router(
          rootElement,
          [
            new Route({
              path: 'game',
              createElement: ({ history }) => createGamePageElement({ history })({
                problems,
                result,
              }),
            }),
            new Route({
              path: 'result',
              createElement: ({ history }) => createResultPageElement({ history })({
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
}

export default App;
