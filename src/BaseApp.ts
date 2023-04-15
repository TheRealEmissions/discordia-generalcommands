import Base from "ts-modular-bot-file-design";
import { Dependencies, Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordClient from "ts-modular-bot-addon-discord_client-types";
import CommandHandler from "ts-modular-bot-addon-command_handler-types";
import DiscordResponder from "discordia-discordresponder-types";

abstract class BaseApp extends Base {
  constructor() {
    super();
  }

  type: Dependency = Dependency.GENERAL_COMMANDS; // you need to set this to the correct type! (Dependency.MY_ADDON)
  name: string = "Template"; // change this to the name of your addon!
  load = false; // ensure this is true!

  @Dependencies.inject(Dependency.EVENTS)
  static Events: typeof Events;

  @Dependencies.inject(Dependency.DISCORD_CLIENT)
  static DiscordClient: typeof DiscordClient;

  @Dependencies.inject(Dependency.COMMAND_HANDLER)
  static CommandHandler: typeof CommandHandler;

  @Dependencies.inject(Dependency.DISCORD_RESPONDER)
  static DiscordResponder: typeof DiscordResponder;

  abstract init(): Promise<void>;

  // Ensure that you specify the correct dependencies!
  getDependencies(): Dependency[] {
    return [
      Dependency.EVENTS,
      Dependency.DISCORD_CLIENT,
      Dependency.COMMAND_HANDLER,
    ];
  }
}

export default BaseApp;
