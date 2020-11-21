import Page from "./page";

class RouteMap {
  private pageMap: {[key: string]: Page};

  setPages(pages: { path: string; page: Page }[]) {
    this.pageMap = pages.reduce((acc, cur) => {
      acc[cur.path] = cur.page;

      return acc;
    }, {} as {[key: string]: Page});
  }

  getPage(path: string) {
    const page = this.pageMap[path];
    if (page) {
      return page;
    }
  }
}

export default RouteMap;
