import { APIEmbed } from "discord.js";

export interface ILangConfig {
  commands: {
    [command: string]: {
      [lang: string]: APIEmbed & { content?: string };
    };
  };
}
