import App from "../../App";
import { CommandInteraction } from "discord.js";
import { BaseLang } from "../../lang/BaseLang";

export interface ICommand {
  App: App;
  Lang: BaseLang;

  get [Symbol.toStringTag](): string;
}
