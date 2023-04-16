import BaseApp from "./BaseApp.js";

class App extends BaseApp {
  constructor() {
    super();
  }

  public async init(): Promise<void> {
    BaseApp.Events.getEventEmitter().emit(
      BaseApp.Events.GeneralEvents.INFO,
      "General Commands Loaded"
    );

    const { default: HelpCommand } = await import(
      "./commands/Help/HelpCommand.js"
    );

    this.addCommands(new HelpCommand(this));
  }
}

export default App;
