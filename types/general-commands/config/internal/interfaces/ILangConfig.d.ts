import { APIEmbed } from "discord.js";
export interface ILangPlaceholders {
    [key: string]: string;
}
export interface ILangConfig {
    commands: {
        [command: string]: {
            [lang: string]: (placeholders: ILangPlaceholders) => APIEmbed & {
                content?: string;
            };
        };
    };
}
export interface ILangYMLConfig {
    commands: {
        [command: string]: {
            [lang: string]: string;
        };
    };
}
