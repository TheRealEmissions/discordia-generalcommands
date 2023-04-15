import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";
import { ILangConfig } from "./interfaces/ILangConfig";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Settings.yml", import.meta.url)),
    "utf8"
  )
);

export const LangConfig: ILangConfig = config;
