// @ts-check

/** @satisfies {import('eslint').ESLint.Plugin} */
module.exports = {
    rules: {
        'prefer-early-return': require('./rules/prefer-early-return'),
    },
};
