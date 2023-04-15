import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";
import {
  ILangConfig,
  ILangPlaceholders,
  ILangYMLConfig,
} from "./interfaces/ILangConfig";

const config: ILangYMLConfig = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Settings.yml", import.meta.url)),
    "utf8"
  )
);

const commands = Object.keys(config.commands);
const newConfig: ILangConfig = {
  commands: {},
};
for (const command of commands) {
  Object.assign(newConfig.commands, {
    [command]: {},
  });
}

for (const command of Object.values(config.commands)) {
  for (const lang of Object.keys(command)) {
    const str = command[lang];
    Object.assign(newConfig, {
      [lang]: (placeholders: ILangPlaceholders) => {
        let newStr = str;
        for (const [key, value] of Object.entries(placeholders)) {
          newStr = newStr.replaceAll(key, value);
        }
        return newStr;
      },
    });
  }
}

export const LangConfig: ILangConfig = newConfig;
