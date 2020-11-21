import Page from "router/page";
import Counter from '../lib/counter';

class GamePage extends Page {
  private timer: Counter;
  private intervalId: NodeJS.Timeout | null;

  onRendered() {
    this.timer = new Counter();
    this.intervalId = null;
  }

  private onClickStartButton() {
    // * 타이머 시작

    // * 게임 시작
  };

  private onEnterKeyDownInput() {
    // 1. 시간 비교

    // 2. 맞으면 시간 멈추기 -> 결과 기록 -> 다음 문제 , 틀리면 지우기
  }

  private onClickInitializeButton() {
    // * 시간 멈추기

    // * 결과 지우기

    // * 초기 화면으로 바꾸기
  };

  private startTimer() {
    if (this.intervalId) {
      this.initializeInterval();
    }

    this.intervalId = setInterval(() => {
      if (this.timer) {
        const count = this.timer.count;
  
        if (count > 0) {
          this.timer.countDown();
        } else {
          this.onFinishTimer();
          this.initializeInterval();
        }
      }
    }, 1000);
  }

  private onFinishTimer() {

  }

  private initializeInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = null;
  }
  
  render() {
    const rootElement = document.createElement('main');
  
    return rootElement;
  }
}

export default GamePage;
