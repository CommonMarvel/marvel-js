"use strict";

module.exports = {
  "processors": ["stylelint-processor-html"],
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "extends": ["stylelint-config-recommended-scss"],
  "rules": {
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "at-rules",
      "declarations",
      "rules"
    ],
    "rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "at-rule-empty-line-before": "never",
    "max-empty-lines": null,
    "declaration-empty-line-before": null,
    "scss/at-rule-no-unknown": true,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "selector-type-case": "lower"
  }
};
