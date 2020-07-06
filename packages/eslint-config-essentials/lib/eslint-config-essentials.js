module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "max-len": ["error", 150],
    "comma-dangle": [2, "never"],
    "quotes": [
      "error",
      "double",
      { "allowTemplateLiterals": true, "avoidEscape": true },
    ],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "semi": ["error", "always"],
    "prefer-promise-reject-errors": "off",
    "no-console": ["error", { "allow": ["error", "warn", "info"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "complexity": ["error", 8],
    "arrow-parens": ["error", "always"],
    "object-curly-spacing": [2, "always", {
      objectsInObjects: false
    }],
    "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    "quote-props": ["error", "consistent-as-needed"],
    "class-methods-use-this": "off",
    "no-param-reassign": [2, { "props": false }],
    "no-return-assign": ["error", "except-parens"],
    "lines-between-class-members": [
      "warn",
      "always",
      { "exceptAfterSingleLine": true },
    ],
    "accessor-pairs": 2,
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "jest/expect-expect": "off",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
      "alphabetize": {
        "order": "asc", /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
        "caseInsensitive": true /* ignore case. Options: [true, false] */
      }
    }],
    "import/no-unresolved": "off"
  }
};
