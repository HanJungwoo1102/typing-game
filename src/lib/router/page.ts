import History from "./history";

abstract class Page {
  protected history: History;

  setHistory({ history }: { history: History }) {
    this.history = history;
  }
  
  abstract render(): HTMLElement;
  abstract onRendered(): void;
}

export default Page;
