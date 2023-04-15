import App from "../App";
import { ICommand } from "./interfaces/ICommand";
import Path from "path";
import { fileURLToPath } from "node:url";
import { CommandInteraction } from "discord.js";
import { createRequire } from "module";
import { BaseLang } from "../lang/BaseLang";

export abstract class BaseCommand implements ICommand {
  App: App;
  Lang: BaseLang;

  constructor(App: App) {
    this.App = App;

    const require = createRequire(import.meta.url);
    const lang = require(`../../lang/${this[Symbol.toStringTag]}.js`);
    this.Lang = new lang.default(this.App);
  }

  get [Symbol.toStringTag](): string {
    const fileName = fileURLToPath(import.meta.url);
    return Path.basename(fileName, Path.extname(fileName)).split(".")[0];
  }
}
