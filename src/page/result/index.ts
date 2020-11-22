import History from "lib/router/history";
import build from "./build";

const createResultPageElement =  ({ history }: {
  history: History
}) => ({ avgTime, score }: {
  avgTime: number;
  score: number;
}) => {

  const rootElement = build({
    avgTime,
    score,
    onClickRestartButton: () => history.push('game'),
  });

  return rootElement;
}

export default createResultPageElement;
