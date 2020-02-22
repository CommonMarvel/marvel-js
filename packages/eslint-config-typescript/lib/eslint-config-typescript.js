module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": ["error", 4, {
      "SwitchCase": 1,
    }],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { "allowExpressions": true, "allowTypedFunctionExpressions": true, "allowHigherOrderFunctions": true },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off"
  },
  "parserOptions": {"parser": "@typescript-eslint/parser"}
};
