import History from "./history";

class Route {
  private path: string;
  createElement;

  constructor({ path, createElement }:{
    path: string, createElement: (props:{ history: History }) => HTMLElement,
  }) {
    this.path = path;
    this.createElement = createElement;
  }

  getPath() {
    return this.path;
  }
}

export default Route;
