import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";
import { ICommandsConfig } from "./interfaces/ICommandsConfig";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Commands.yml", import.meta.url)),
    "utf8"
  )
);

export const CommandsConfig: ICommandsConfig = config;
