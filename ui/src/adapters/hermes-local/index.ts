import type { UIAdapterModule } from "../types";
import { parseHermesStdoutLine } from "@henkey/hermes-paperclip-adapter/ui";
import { buildHermesConfig } from "@henkey/hermes-paperclip-adapter/ui";
import { SchemaConfigFields } from "../schema-config-fields";

export const hermesLocalUIAdapter: UIAdapterModule = {
  type: "hermes_local",
  label: "Hermes Agent",
  parseStdoutLine: parseHermesStdoutLine,
  ConfigFields: SchemaConfigFields,
  buildAdapterConfig: buildHermesConfig,
};
