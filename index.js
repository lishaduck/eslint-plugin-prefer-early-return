const package = require("./package.json");

const meta = {
    name: package.name,
    version: package.version,
    namespace: "@regru/prefer-early-return",
};

const rules = { "prefer-early-return": require("./rules/prefer-early-return") };

module.exports = {
    meta,
    rules,
};
