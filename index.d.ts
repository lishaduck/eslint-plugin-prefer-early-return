import type { ESLint } from "eslint";

declare const Plugin: ESLint.Plugin;
declare namespace Plugin {
    export const rules: NonNullable<ESLint.Plugin["rules"]>;
}

export = Plugin;
