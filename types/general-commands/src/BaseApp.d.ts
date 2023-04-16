import Base from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordResponder from "discordia-discordresponder-types";
import CommandHandler from "ts-modular-bot-addon-command_handler-types";
import { BaseCommand } from "./commands/BaseCommand";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Events: typeof Events;
    getEvents(): typeof Events;
    static CommandHandler: typeof CommandHandler;
    getCommandHandler(): typeof CommandHandler;
    static DiscordResponder: typeof DiscordResponder;
    getDiscordResponder(): typeof DiscordResponder;
    private commands;
    getCommands(): Set<BaseCommand>;
    addCommand(command: BaseCommand): void;
    addCommands(...commands: BaseCommand[]): void;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
