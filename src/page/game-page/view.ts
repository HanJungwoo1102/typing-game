import './index.css';

class View {
  private timeElement: HTMLElement;
  private scoreElement: HTMLElement;
  private problemTextElement: HTMLElement;
  private startButtonElement: HTMLElement;
  private initializeButtonElement: HTMLElement;

  createRootElement({ onClickStartButton, onClickInitializeButton, onEnter }: {
    onClickStartButton: () => void;
    onClickInitializeButton: () => void;
    onEnter: (input: string) => void;
  }) {
    const rootElement = document.createElement('main');
    rootElement.classList.add('game-page')

    const containerElement = document.createElement('div');
    containerElement.classList.add('container')

    const headContainer = document.createElement('header');
  
    const timerElement = document.createElement('div');
    this.timeElement = document.createElement('span');
    this.timeElement.append('0');
    timerElement.append('남은 시간 : ', this.timeElement, '초');
  
    const scoreBoardElement = document.createElement('div');
    this.scoreElement = document.createElement('span');
    this.scoreElement.append('0');
    scoreBoardElement.append('점수 : ', this.scoreElement, '점')

    const problemContainer = document.createElement('section');
    
    this.problemTextElement = document.createElement('p');
    this.problemTextElement.append('문제 단어');
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.addEventListener('keyup', function (event) {
      if (event.code === 'Enter') {
        onEnter(this.value);
        this.value = '';
      }
    });
    inputElement.setAttribute('placeholder', '입력');
    this.startButtonElement = document.createElement('button');
    this.startButtonElement.append('시작');
    this.startButtonElement.addEventListener('click', onClickStartButton);
    this.initializeButtonElement = document.createElement('button');
    this.initializeButtonElement.append('초기화');
    this.initializeButtonElement.addEventListener('click', onClickInitializeButton);
    this.initializeButtonElement.classList.add('hide');

    headContainer.appendChild(timerElement);
    headContainer.appendChild(scoreBoardElement);

    problemContainer.appendChild(this.problemTextElement);
    problemContainer.appendChild(inputElement);
    problemContainer.appendChild(this.startButtonElement);
    problemContainer.appendChild(this.initializeButtonElement);

    containerElement.appendChild(headContainer);
    containerElement.appendChild(problemContainer);

    rootElement.appendChild(containerElement);

    return rootElement;
  }

  changeProblemText(text: string) {
    this.problemTextElement.innerText = text;
  }

  changeTime(time: number) {
    this.timeElement.innerText = `${time}`;
  }

  changeScore(score: number) {
    this.scoreElement.innerText = `${score}`;
  }

  toggleButton(isShownStartButton: boolean) {
    const hideClassName = 'hide';
    if (isShownStartButton) {
      this.startButtonElement.classList.toggle(hideClassName);
      this.initializeButtonElement.classList.toggle(hideClassName);
    } else {
      this.startButtonElement.classList.toggle(hideClassName);
      this.initializeButtonElement.classList.toggle(hideClassName);
    }
  }
}

export default View;
