module.exports = {
  "extends": [
    "plugin:vue/essential",
    "@vue/typescript"
  ],
  "rules": {
    "vue/attributes-order": "warn",
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always",
      },
    ],
    "vue/multiline-html-element-content-newline": "error",
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never"
    }],
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/order-in-components": "off",
    "vue/no-use-v-if-with-v-for": ["warn", {
      "allowUsingIterationVar": true
    }],
    "vue/require-prop-types": "off",
    "vue/no-v-html": "off",
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/v-on-function-call": ["error", "never"]
  }
};
