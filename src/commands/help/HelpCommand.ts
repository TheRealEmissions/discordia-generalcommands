import {
  CommandInteraction,
  CacheType,
  ApplicationCommandOptionType,
  APIApplicationCommandOption,
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
} from "discord.js";
import App from "../../App.js";
import { BaseCommand } from "../BaseCommand.js";
import BaseApp from "../../BaseApp.js";
import { CommandsConfig } from "../../../config/internal/CommandsConfig.js";
import HelpLang from "../../lang/HelpLang.js";

export class HelpCommand extends BaseCommand {
  declare static Lang: HelpLang;
  constructor(App: App) {
    super(App, import.meta.url);
  }

  @BaseApp.CommandHandler.command({
    name: CommandsConfig.commands.help.commandName,
    description: CommandsConfig.commands.help.description,
    options: CommandsConfig.commands.help.options,
  })
  static async help(int: CommandInteraction): Promise<void> {
    if (!int.deferred && !int.replied) {
      await int.deferReply({
        ephemeral: CommandsConfig.commands.help.response?.ephemeral ?? true,
      });
    }

    const commands = this.App.getCommandHandler()
      .getCommandConstructor()
      .getBuilders();

    try {
      await this.App.getDiscordResponder().edit(
        int,
        this.Lang.commandList(commands),
        {}
      );
    } catch (e) {
      this.App.getEvents()
        .getEventEmitter()
        .emit(this.App.getEvents().GeneralEvents.ERROR, e);
      throw e;
    }
  }
}

export default HelpCommand;
