import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";
import {
  ILangConfig,
  ILangPlaceholders,
  ILangYMLConfig,
} from "./interfaces/ILangConfig.js";

const config: ILangYMLConfig = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Lang.yml", import.meta.url)),
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

for (const command of Object.keys(config.commands)) {
  for (const lang of Object.keys(config.commands[command])) {
    const embed = config.commands[command][lang];
    Object.assign(newConfig.commands[command], {
      [lang]: (placeholders: ILangPlaceholders) => {
        const newEmbed = {};
        for (const [embedKey, embedValue] of Object.entries(embed)) {
          for (const [key, value] of Object.entries(placeholders)) {
            Object.assign(newEmbed, {
              [embedKey]: embedValue.replaceAll(key, value),
            });
          }
        }
        return newEmbed;
      },
    });
  }
}

export const LangConfig: ILangConfig = newConfig;
