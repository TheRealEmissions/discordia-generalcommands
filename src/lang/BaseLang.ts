import App from "../App";

export abstract class BaseLang {
  App: App;
  constructor(App: App) {
    this.App = App;
  }
}
