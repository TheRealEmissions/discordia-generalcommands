import App from "../App.js";
import { BaseLang } from "./BaseLang.js";
import { SlashCommandBuilder } from "@discordjs/builders";
declare class HelpLang extends BaseLang {
    constructor(App: App);
    commandList(commands: SlashCommandBuilder[]): import("discord.js").APIEmbed & {
        content?: string | undefined;
    };
}
export default HelpLang;
