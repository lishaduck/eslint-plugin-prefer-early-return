import type { ESLint } from "eslint";

interface Plugin extends ESLint.Plugin {
  rules: NonNullable<ESLint.Plugin["rules"]>;
}

declare const Plugin: Plugin;

export = Plugin;
