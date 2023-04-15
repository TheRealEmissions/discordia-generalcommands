import { BaseLang } from "../../lang/BaseLang";
import App from "../../src/App";
import { CommandInteraction } from "discord.js";

export interface ICommand {
  App: App;
  Lang: BaseLang;

  init(int: CommandInteraction, ...args: any[]): Promise<void>;

  get [Symbol.toStringTag](): string;
}
