import BaseApp from "./BaseApp.js";

class App extends BaseApp {
  constructor() {
    super();
  }

  async init(): Promise<void> {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.INFO,
      "Template Loaded"
    );

    // continue forward on your coding journey!
    // BaseApp.Events, BaseApp.DiscordClient & BaseApp.CommandHandler are available from here onwards!
  }
}

export default App;
