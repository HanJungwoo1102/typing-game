import './index.css';

const build = ({
  initialScore,
  problemTextElement, timeElement, scoreElement, startButtonElement, initializeButtonElement,
  inputElement,
  onEnter, onClickInitializeButton, onClickStartButton,
}: {
  initialScore: number;
  problemTextElement: HTMLElement;
  timeElement: HTMLElement;
  scoreElement: HTMLElement;
  startButtonElement: HTMLElement;
  initializeButtonElement: HTMLElement;
  inputElement: HTMLInputElement;
  onClickStartButton: () => void;
  onClickInitializeButton: () => void;
  onEnter: (input: string) => void;
}) => {
  const rootElement = document.createElement('main');
  rootElement.classList.add('game-page');
  rootElement.classList.add('fade-in');

  const containerElement = document.createElement('div');
  containerElement.classList.add('container')

  const headContainer = document.createElement('header');

  const timerElement = document.createElement('div');
  timeElement.append('0');
  timerElement.append('남은 시간 : ', timeElement, '초');

  const scoreBoardElement = document.createElement('div');
  scoreElement.append(`${initialScore}`);
  scoreBoardElement.append('점수 : ', scoreElement, '점')

  const problemContainer = document.createElement('section');
  
  problemTextElement.append('문제 단어');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('disabled', '');
  inputElement.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
      onEnter(this.value);
      this.value = '';
    }
  });
  inputElement.setAttribute('placeholder', '입력');
  inputElement.classList.add('basic-input');
  startButtonElement.append('시작');
  startButtonElement.addEventListener('click', onClickStartButton);
  startButtonElement.classList.add('basic-button');
  initializeButtonElement.append('초기화');
  initializeButtonElement.addEventListener('click', onClickInitializeButton);
  initializeButtonElement.classList.add('hide');
  initializeButtonElement.classList.add('basic-button');

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
