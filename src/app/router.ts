import { Router } from "router/router";
import GamePage from "page/game-page";
import ResultPage from "page/result-page";
import Problems from "../lib/problems";

class AppRouter extends Router {
  route() {
    const problems = new Problems();

    return [
      {
        path: 'game',
        page: new GamePage(),
      },
      {
        path: 'result',
        page: new ResultPage(),
      },
    ];
  }
}

export default AppRouter;
