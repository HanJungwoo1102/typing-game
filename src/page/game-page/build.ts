import './index.css';

const build = ({
  problemTextElement, timeElement, scoreElement, startButtonElement, initializeButtonElement,
  onEnter, onClickInitializeButton, onClickStartButton,
}: {
  problemTextElement: HTMLElement;
  timeElement: HTMLElement;
  scoreElement: HTMLElement;
  startButtonElement: HTMLElement;
  initializeButtonElement: HTMLElement;
  onClickStartButton: () => void;
  onClickInitializeButton: () => void;
  onEnter: (input: string) => void;
}) => {
  const rootElement = document.createElement('main');
  rootElement.classList.add('game-page')

  const containerElement = document.createElement('div');
  containerElement.classList.add('container')

  const headContainer = document.createElement('header');

  const timerElement = document.createElement('div');
  timeElement.append('0');
  timerElement.append('남은 시간 : ', timeElement, '초');

  const scoreBoardElement = document.createElement('div');
  scoreElement.append('0');
  scoreBoardElement.append('점수 : ', scoreElement, '점')

  const problemContainer = document.createElement('section');
  
  problemTextElement.append('문제 단어');
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
      onEnter(this.value);
      this.value = '';
    }
  });
  inputElement.setAttribute('placeholder', '입력');
  startButtonElement.append('시작');
  startButtonElement.addEventListener('click', onClickStartButton);
  initializeButtonElement.append('초기화');
  initializeButtonElement.addEventListener('click', onClickInitializeButton);
  initializeButtonElement.classList.add('hide');

  headContainer.appendChild(timerElement);
  headContainer.appendChild(scoreBoardElement);

  problemContainer.appendChild(problemTextElement);
  problemContainer.appendChild(inputElement);
  problemContainer.appendChild(startButtonElement);
  problemContainer.appendChild(initializeButtonElement);

  containerElement.appendChild(headContainer);
  containerElement.appendChild(problemContainer);

  rootElement.appendChild(containerElement);

  return rootElement;
}

export default build;
