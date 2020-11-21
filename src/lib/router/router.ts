import History from "./history";
import Page from "./page";
import RouteMap from "./route-map";

export abstract class Router {
  private rootElement: HTMLElement;
  protected history: History;
  private pages: RouteMap;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.pages = new RouteMap();
    this.history = new History({
      onPushed: this.onPushedHistory,
      onPoped: this.onPopedHistory,
    });
  }

  private onPushedHistory = (path: string) => {
    const page = this.pages.getPage(path);

    if (page) {
      this.renderPage(page); 
    }
  }

  private onPopedHistory = (path: string) => {
    const page = this.pages.getPage(path);

    if (page) {
      this.renderPage(page);
    }
  }

  private renderPage(page: Page) {
    const rootElement = this.rootElement;
  
    rootElement.appendChild(page.render());
    page.onRendered();
  }

  start(path: string) {
    const pages = this.route();

    this.pages.setPages(pages);

    this.history.push(path);
  }

  protected abstract route(): { path: string, page: Page }[];
}
