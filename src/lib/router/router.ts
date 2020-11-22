import History from "./history";
import Route from "./route";

class Router {
  private rootElement: HTMLElement;
  protected history: History;
  private routeList: Route[];

  constructor(rootElement: HTMLElement, routeList: Route[], initialRoutePath: string) {
    this.rootElement = rootElement;
    this.history = new History({
      onPushed: (path: string) => this.onPushedHistory(path),
      onPoped: (path: string) => this.onPopedHistory(path),
    });
    this.routeList = routeList;

    this.history.push(initialRoutePath);
  }

  private onPushedHistory(path: string) {
    const route = this.findRoute(path);
    if (route) {
      this.render(route);
    }
  }

  private onPopedHistory(path: string) {
    const route = this.findRoute(path);
  
    if (route) {
      this.render(route);
    }
  }
  
  private findRoute(path: string) {
    return this.routeList.find(route => route.getPath() === path);
  }

  private render(route: Route) {
    const rootElement = this.rootElement;
    rootElement.innerText = '';
    
    const element = route.createElement({
      history: this.history,
    })
  
    rootElement.appendChild(element);
  }
}

export default Router;
