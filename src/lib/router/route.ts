import Page from "./page";

class Route {
  private path: string;

  constructor({ path, getPage }:{
    path: string, getPage: () => Page,
  }) {
    this.path = path;
    this.getPage = getPage;
  }

  getPath() {
    return this.path;
  }

  getPage: () => Page;
}

export default Route;
