import { ChannelType } from "discord-api-types/v10";
export declare enum Locale {
    Indonesian = "id",
    EnglishUS = "en-US",
    EnglishGB = "en-GB",
    Bulgarian = "bg",
    ChineseCN = "zh-CN",
    ChineseTW = "zh-TW",
    Croatian = "hr",
    Czech = "cs",
    Danish = "da",
    Dutch = "nl",
    Finnish = "fi",
    French = "fr",
    German = "de",
    Greek = "el",
    Hindi = "hi",
    Hungarian = "hu",
    Italian = "it",
    Japanese = "ja",
    Korean = "ko",
    Lithuanian = "lt",
    Norwegian = "no",
    Polish = "pl",
    PortugueseBR = "pt-BR",
    Romanian = "ro",
    Russian = "ru",
    SpanishES = "es-ES",
    Swedish = "sv-SE",
    Thai = "th",
    Turkish = "tr",
    Ukrainian = "uk",
    Vietnamese = "vi"
}
type LocaleString = `${Locale}`;
export declare enum CommandArguments {
    STRING = 0,
    INTEGER = 1,
    BOOLEAN = 2,
    USER = 3,
    CHANNEL = 4,
    ROLE = 5,
    MENTIONABLE = 6,
    NUMBER = 7,
    ATTACHMENT = 8
}
type CommandOptions = {
    dmPermission?: boolean;
    descriptionLocalization?: LocaleString;
    descriptionInLocale?: string;
    descriptionLocalizations?: Partial<Record<LocaleString, string | null>>;
    nameLocalization?: LocaleString;
    nameInLocale?: string;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
};
type CommandArgumentChoice<T> = {
    name: string;
    value: T;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
};
type CommandArgument = {
    type: CommandArguments.STRING;
    name: string;
    nameLocalization?: LocaleString;
    nameInLocale?: string;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
    description: string;
    descriptionLocalization?: LocaleString;
    descriptionInLocale?: string;
    descriptionLocalizations?: Partial<Record<LocaleString, string | null>>;
    required?: boolean;
    choices?: CommandArgumentChoice<string>[];
    autocomplete?: boolean;
    channelTypes?: never;
    minValue?: never;
    maxValue?: never;
} | {
    type: CommandArguments.NUMBER | CommandArguments.INTEGER;
    name: string;
    nameLocalization?: LocaleString;
    nameInLocale?: string;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
    description: string;
    descriptionLocalization?: LocaleString;
    descriptionInLocale?: string;
    descriptionLocalizations?: Partial<Record<LocaleString, string | null>>;
    required?: boolean;
    choices?: CommandArgumentChoice<number>[];
    autocomplete?: boolean;
    channelTypes?: never;
    minValue?: number;
    maxValue?: number;
} | {
    type: CommandArguments.CHANNEL;
    name: string;
    nameLocalization?: LocaleString;
    nameInLocale?: string;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
    description: string;
    descriptionLocalization?: LocaleString;
    descriptionInLocale?: string;
    descriptionLocalizations?: Partial<Record<LocaleString, string | null>>;
    required?: boolean;
    choices?: never;
    autocomplete?: never;
    channelTypes?: (ChannelType.GuildText | ChannelType.GuildVoice | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.AnnouncementThread | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.GuildStageVoice | ChannelType.GuildForum)[];
    minValue?: never;
    maxValue?: never;
} | {
    type: CommandArguments;
    name: string;
    nameLocalization?: LocaleString;
    nameInLocale?: string;
    nameLocalizations?: Partial<Record<LocaleString, string | null>>;
    description: string;
    descriptionLocalization?: LocaleString;
    descriptionInLocale?: string;
    descriptionLocalizations?: Partial<Record<LocaleString, string | null>>;
    required?: boolean;
    autocomplete?: never;
    choices?: never;
    channelTypes?: never;
    minValue?: never;
    maxValue?: never;
};
interface ICommandResponse {
    ephemeral: boolean;
}
interface ISubcommand {
    subcommandName: string;
    description: string;
    options?: Omit<CommandOptions, "dmPermission">;
    args?: CommandArgument[];
    response?: ICommandResponse;
    disabled?: boolean;
}
interface ICommandGroup {
    subcommandGroupName: string;
    description: string;
    options?: Omit<CommandOptions, "dmPermission">;
    subcommands?: ISubcommand[];
    disabled?: boolean;
}
export interface ICommandsConfig {
    commands: {
        [command: string]: {
            commandName: string;
            description: string;
            options?: CommandOptions;
            args?: CommandArgument[];
            groups?: ICommandGroup[];
            subcommands?: ISubcommand[];
            response?: ICommandResponse;
            disabled?: boolean;
        };
    };
}
export {};
