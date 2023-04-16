import { ApplicationCommandOptionType, CommandInteraction } from "discord.js";
import App from "../../App.js";
import BaseApp from "../../BaseApp.js";
import RemindMeLang from "../../lang/RemindMeLang.js";
import { BaseCommand } from "../BaseCommand.js";
import { CommandArguments } from "ts-modular-bot-addon-command_handler-types/command-handler/src/CommandConstructor.js";
import { CommandsConfig } from "../../../config/internal/CommandsConfig.js";

export class RemindMeCommand extends BaseCommand {
  declare static Lang: RemindMeLang;
  constructor(App: App) {
    super(App, import.meta.url);
  }

  @BaseApp.CommandHandler.command({
    name: CommandsConfig.commands.remindme.commandName,
    description: CommandsConfig.commands.remindme.description,
    options: CommandsConfig.commands.remindme.options,
    args: [
      {
        name: CommandsConfig.commands.remindme.args?.[0].name ?? "time",
        description:
          CommandsConfig.commands.remindme.args?.[0].description ??
          "The time to remind you (ex. 1d)",
        required: true,
        type: CommandArguments.STRING,
      },
      {
        name: CommandsConfig.commands.remindme.args?.[1].name ?? "message",
        description:
          CommandsConfig.commands.remindme.args?.[1].description ??
          "The message to remind you of",
        required: true,
        type: CommandArguments.STRING,
      },
    ],
  })
  static async remindMe(
    int: CommandInteraction,
    time: string,
    message: string
  ): Promise<void> {}
}
