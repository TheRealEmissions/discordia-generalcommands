import { CommandInteraction, CacheType } from "discord.js";
import App from "../../src/App";
import { BaseCommand } from "../BaseCommand";
import BaseApp from "../../src/BaseApp";

export class HelpCommand extends BaseCommand {
  constructor(App: App) {
    super(App);
  }

  @BaseApp.CommandHandler.Builders.command({
    name: "help",
    description: "See a list of all commands!",
  })
  async init(int: CommandInteraction): Promise<void> {}
}
