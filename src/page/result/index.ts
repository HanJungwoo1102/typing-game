import Result from "lib/Result";
import History from "lib/router/history";
import build from "./build";

const createResultPageElement =  ({ history }: {
  history: History
}) => ({ result }: {
  result: Result;
}) => {

  const rootElement = build({
    avgTime: result.getAvgTime(),
    score: result.getScore(),
    onClickRestartButton: () => {
      result.initialize();
      history.push('game');
    },
  });

  return rootElement;
}

export default createResultPageElement;
