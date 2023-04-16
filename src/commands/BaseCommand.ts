import App from "../App.js";
import { ICommand } from "./interfaces/ICommand.js";
import Path from "path";
import { fileURLToPath } from "node:url";
import { createRequire } from "module";
import { BaseLang } from "../lang/BaseLang.js";

export abstract class BaseCommand implements ICommand {
  static App: App;
  static Lang: BaseLang;

  constructor(App: App, im: string) {
    BaseCommand.App = App;
    this.load(im);
  }

  private async load(im: string) {
    const lang = await import(`../lang/${this.getFolderName(im)}.js`);
    BaseCommand.Lang = new lang.default(BaseCommand.App);
  }

  private getFolderName(im: string): string {
    return Path.basename(Path.dirname(fileURLToPath(im)));
  }
}
