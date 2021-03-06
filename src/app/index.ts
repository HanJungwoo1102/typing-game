import Router from "lib/router/router";
import Route from "lib/router/route";
import fetchProblems from "lib/fetch/fetch-problems";
import Problem from "lib/problem";
import Result from "lib/Result";
import createGamePageElement from "page/game";
import createResultPageElement from "page/result";

class App {
  constructor() {
    this.startRouting();
  }

  private async startRouting() {
    let problems: Problem[];
  
    try {
      problems = await fetchProblems();
    } catch(error) {
      alert('문제를 불러오는데 실패했습니다.');
      console.error(error);
    }
  
    if (problems) {
      const result = new Result(problems.length);
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
                result,
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
