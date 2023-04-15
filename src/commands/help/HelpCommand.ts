import {
  CommandInteraction,
  CacheType,
  ApplicationCommandOptionType,
  APIApplicationCommandOption,
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
} from "discord.js";
import App from "../../App";
import { BaseCommand } from "../BaseCommand";
import BaseApp from "../../BaseApp";
import { CommandsConfig } from "../../../config/internal/CommandsConfig";
import HelpLang from "../../lang/Help";

export class HelpCommand extends BaseCommand {
  declare Lang: HelpLang;
  constructor(App: App) {
    super(App);
  }

  @BaseApp.CommandHandler.command({
    name: CommandsConfig.commands.help.commandName,
    description: CommandsConfig.commands.help.description,
    options: CommandsConfig.commands.help.options,
  })
  async help(int: CommandInteraction): Promise<void> {
    if (!int.deferred && !int.replied) {
      await int.deferReply({
        ephemeral: CommandsConfig.commands.help.response?.ephemeral ?? true,
      });
    }

    const commands = this.App.getCommandHandler()
      .getCommandConstructor()
      .getBuilders();

    await this.App.getDiscordResponder().edit(
      int,
      this.Lang.commandList(commands),
      {}
    );
  }
}

export default HelpCommand;
