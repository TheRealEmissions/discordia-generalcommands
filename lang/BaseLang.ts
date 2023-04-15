import App from "../src/App";

export abstract class BaseLang {
  App: App;
  constructor(App: App) {
    this.App = App;
  }
}
