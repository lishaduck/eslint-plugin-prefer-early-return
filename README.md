# eslint-plugin-prefer-early-return

Copy-paste from `eslint-plugin-shopify` from Shopify team without unwanted dependencies and restrictions.

## Installation

`npm install @regru/eslint-plugin-prefer-early-return --save-dev`

## Usage

```js
import preferEarlyReturn from "@regru/eslint-plugin-prefer-early-return";

export default [
  {
    plugins: { "@regru": preferEarlyReturn },
    rules: {
      "@regru/prefer-early-return": ["warn", { maximumStatements: 1 }],
    },
  },
];
```

## Plugin-Provided Rules

- [prefer-early-return](docs/rules/prefer-early-return.md)
