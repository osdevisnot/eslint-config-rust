const rules = {};

const all = require("eslint/lib/rules");

for (const [ruleId, rule] of all) {
  if (!rule.meta.deprecated) {
    rules[ruleId] = "error";
  }
}

module.exports = { rules };
