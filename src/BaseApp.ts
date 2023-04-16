import Base from "ts-modular-bot-file-design";
import { Dependencies, Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordResponder from "discordia-discordresponder-types";
import CommandHandler from "ts-modular-bot-addon-command_handler-types";
import { BaseCommand } from "./commands/BaseCommand";

abstract class BaseApp extends Base {
  constructor() {
    super();
  }

  type: Dependency = Dependency.GENERAL_COMMANDS; // you need to set this to the correct type! (Dependency.MY_ADDON)
  name: string = "General Commands"; // change this to the name of your addon!
  load = true; // ensure this is true!

  @Dependencies.inject(Dependency.EVENTS)
  static Events: typeof Events;
  public getEvents(): typeof Events {
    return BaseApp.Events;
  }

  @Dependencies.inject(Dependency.COMMAND_HANDLER)
  static CommandHandler: typeof CommandHandler;
  public getCommandHandler(): typeof CommandHandler {
    return BaseApp.CommandHandler;
  }

  @Dependencies.inject(Dependency.DISCORD_RESPONDER)
  static DiscordResponder: typeof DiscordResponder;
  public getDiscordResponder(): typeof DiscordResponder {
    return BaseApp.DiscordResponder;
  }

  private commands: Set<BaseCommand> = new Set<BaseCommand>();
  public getCommands() {
    return this.commands;
  }
  public addCommand(command: BaseCommand) {
    this.commands.add(command);
  }
  public addCommands(...commands: BaseCommand[]) {
    commands.forEach((command) => this.commands.add(command));
  }

  abstract init(): Promise<void>;

  // Ensure that you specify the correct dependencies!
  getDependencies(): Dependency[] {
    return [
      Dependency.EVENTS,
      Dependency.COMMAND_HANDLER,
      Dependency.DISCORD_RESPONDER,
    ];
  }
}

export default BaseApp;
