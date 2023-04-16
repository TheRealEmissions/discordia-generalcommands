import App from "../App.js";

export abstract class BaseLang {
  App: App;
  constructor(App: App) {
    this.App = App;
  }
}
