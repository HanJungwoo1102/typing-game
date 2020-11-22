import History from "./history";
import Route from "./route";

class Router {
  private rootElement: HTMLElement;
  protected history: History;
  private routeList: Route[];

  constructor(rootElement: HTMLElement, routeList: Route[], initialPath: string) {
    this.rootElement = rootElement;
    this.history = new History({
      onPushed: this.onPushedHistory,
      onPoped: this.onPopedHistory,
    });
    this.routeList = routeList;

    this.history.push(initialPath);
  }

  private onPushedHistory = (path: string) => {
    const route = this.routeList.find(route => route.getPath() === path);
    if (route) {
      this.render(route);
    }
  }

  private onPopedHistory = (path: string) => {
    const route = this.routeList.find(route => route.getPath() === path);
  
    if (route) {
      this.render(route);
    }
  }

  private render(route: Route) {
    const rootElement = this.rootElement;
    rootElement.innerText = '';
    const page = route.getPage()
  
    page.setHistory(this.history);

    rootElement.appendChild(page.render());
  }
}

export default Router;
