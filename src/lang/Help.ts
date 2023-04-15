import {
  APIApplicationCommandSubcommandGroupOption,
  APIApplicationCommandSubcommandOption,
  ApplicationCommandOptionType,
} from "discord.js";
import { LangConfig } from "../../config/internal/LangConfig";
import App from "../App";
import { BaseLang } from "./BaseLang";
import { SlashCommandBuilder } from "@discordjs/builders";

class HelpLang extends BaseLang {
  constructor(App: App) {
    super(App);
  }

  commandList(commands: SlashCommandBuilder[]) {
    const list: string[] = [];
    for (const command of commands) {
      const jsonCommand = command.toJSON();
      if (jsonCommand.options && jsonCommand.options.length > 0) {
        const initialOption = jsonCommand.options.at(0);
        if (!initialOption) continue;
        if (
          initialOption.type === ApplicationCommandOptionType.SubcommandGroup
        ) {
          for (const subcommandGroup of jsonCommand.options as APIApplicationCommandSubcommandGroupOption[]) {
            for (const subcommand of subcommandGroup.options as APIApplicationCommandSubcommandOption[]) {
              const options = subcommand.options
                ?.map(
                  (x) =>
                    `${x.name}${x.required ? "?" : ""}:${
                      ApplicationCommandOptionType[x.type]
                    }`
                )
                .join(" ");
              list.push(
                `**/${jsonCommand.name} ${subcommandGroup.name} ${
                  subcommand.name
                }${options ? " " + options : ""}** - ${
                  subcommand.description
                } ${jsonCommand.nsfw ? "🔞" : ""}}`
              );
            }
          }
        } else if (
          initialOption.type === ApplicationCommandOptionType.Subcommand
        ) {
          for (const subcommand of jsonCommand.options as APIApplicationCommandSubcommandOption[]) {
            const options = subcommand.options
              ?.map(
                (x) =>
                  `${x.name}${x.required ? "?" : ""}:${
                    ApplicationCommandOptionType[x.type]
                  }`
              )
              .join(" ");
            list.push(
              `**/${jsonCommand.name} ${subcommand.name}${
                options ? " " + options : ""
              }** - ${subcommand.description} ${jsonCommand.nsfw ? "🔞" : ""}}`
            );
          }
        } else {
          const options = jsonCommand.options
            .map(
              (x) =>
                `${x.name}${x.required ? "?" : ""}:${
                  ApplicationCommandOptionType[x.type]
                }`
            )
            .join(" ");
          list.push(
            `**/${jsonCommand.name} ${options}** - ${jsonCommand.description} ${
              jsonCommand.nsfw ? "🔞" : ""
            }}`
          );
        }
      } else {
        list.push(
          `**/${jsonCommand.name}** - ${jsonCommand.description} ${
            jsonCommand.nsfw ? "🔞" : ""
          }}`
        );
      }
    }

    return LangConfig.commands.help.commandList({
      "{commands}": list.join("\n"),
    });
  }
}

export default HelpLang;
