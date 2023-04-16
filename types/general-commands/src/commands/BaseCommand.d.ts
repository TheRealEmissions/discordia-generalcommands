import App from "../App.js";
import { ICommand } from "./interfaces/ICommand.js";
import { BaseLang } from "../lang/BaseLang.js";
export declare abstract class BaseCommand implements ICommand {
    static App: App;
    static Lang: BaseLang;
    constructor(App: App, im: string);
    private load;
    private getFolderName;
}
