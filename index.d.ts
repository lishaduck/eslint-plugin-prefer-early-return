import type { ESLint } from "eslint";

declare namespace Plugin {
  export const rules: NonNullable<ESLint.Plugin["rules"]>;
}

export = Plugin;
