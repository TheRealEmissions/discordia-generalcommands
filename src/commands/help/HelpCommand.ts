import { CommandInteraction, CacheType } from "discord.js";
import App from "../../App";
import { BaseCommand } from "../BaseCommand";
import BaseApp from "../../BaseApp";
import { CommandsConfig } from "../../../config/internal/CommandsConfig";

export class HelpCommand extends BaseCommand {
  constructor(App: App) {
    super(App);
  }

  @BaseApp.CommandHandler.command({
    name: CommandsConfig.commands.help.commandName,
    description: CommandsConfig.commands.help.description,
    options: CommandsConfig.commands.help.options,
  })
  async init(int: CommandInteraction): Promise<void> {
    if (!int.deferred && !int.replied) {
      await int.deferReply({
        ephemeral: CommandsConfig.commands.help.response?.ephemeral ?? true,
      });
    }

    const commands =
      BaseApp.CommandHandler.getCommandConstructor().getBuilders();
  }
}
