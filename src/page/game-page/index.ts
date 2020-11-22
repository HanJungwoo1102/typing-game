import History from "router/history";
import Problem from "../../lib/models/problem";
import Result from "../../lib/Result";
import State from "./state";
import  build from './build';

const createGamePageElement = ({ history }: {
  history: History;
}) => ({ problems, result }: {
  problems: Problem[];
  result: Result;
}) => {
  const problemTextElement = document.createElement('p');
  const timeElement = document.createElement('span');
  const scoreElement = document.createElement('span');
  const startButtonElement = document.createElement('button');
  const initializeButtonElement = document.createElement('button');

  const state = new State({
    problems,
    result,
    changeProblemTextView: (text: string) => problemTextElement.innerText = text,
    changeTimeView: (time: number) => timeElement.innerText = `${time}`,
    changeScoreView: (score: number) => scoreElement.innerText = `${score}`,
    toggleButtonView: (isShownStartButton: boolean) => {
      const hideClassName = 'hide';
      if (isShownStartButton) {
        startButtonElement.classList.toggle(hideClassName);
        initializeButtonElement.classList.toggle(hideClassName);
      } else {
        startButtonElement.classList.toggle(hideClassName);
        initializeButtonElement.classList.toggle(hideClassName);
      }
    },
    routeToResult: () => history.push('result'),
  });

  const rootElement = build({
    problemTextElement,
    timeElement,
    scoreElement,
    startButtonElement,
    initializeButtonElement,
    onClickStartButton: () => state.onClickStartButton(),
    onClickInitializeButton: () => state.onClickInitializeButton(),
    onEnter: (input: string) => state.onEnter(input),
  });

  return rootElement;
}

export default createGamePageElement;
