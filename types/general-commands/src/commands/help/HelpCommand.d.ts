import { CommandInteraction } from "discord.js";
import App from "../../App.js";
import { BaseCommand } from "../BaseCommand.js";
import HelpLang from "../../lang/Help.js";
export declare class HelpCommand extends BaseCommand {
    static Lang: HelpLang;
    constructor(App: App);
    static help(int: CommandInteraction): Promise<void>;
}
export default HelpCommand;
