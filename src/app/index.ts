import AppRouter from "./router";

class App {
  private appRouter: AppRouter;

  constructor() {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      this.appRouter = new AppRouter(rootElement);

      this.appRouter.start('loading');
    }
  }
}

export default App;
