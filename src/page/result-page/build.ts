import './index.css';

const build = ({ avgTime, score, onClickRestartButton }: {
  avgTime: number;
  score: number;
  onClickRestartButton: () => void;
}) => {
  const rootElement = document.createElement('main');
  rootElement.classList.add('result-page');

  const containerElement =document.createElement('div');
  containerElement.classList.add('container');

  const missioncompleteElement = document.createElement('p');
  missioncompleteElement.append('Mission Complete!')
  const scoreElement = document.createElement('p');
  scoreElement.append(`당신의 점수는 ${score}점 입니다.`)
  const timerElement = document.createElement('p');
  timerElement.append(`단어당 평균 답변 시간은 ${avgTime}초 입니다.`);
  const buttonElement = document.createElement('button');
  buttonElement.append('다시 시작');
  buttonElement.addEventListener('click', onClickRestartButton);

  containerElement.appendChild(missioncompleteElement);
  containerElement.appendChild(scoreElement);
  containerElement.appendChild(timerElement);
  containerElement.appendChild(buttonElement);

  rootElement.appendChild(containerElement);

  return rootElement;
};

export default build;
