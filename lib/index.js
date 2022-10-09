// Abbreviated example
const stylelint = require('stylelint');

const ruleName = 'my-test/dummy-rule';

const ruleFunction = (primaryOption, secondaryOptionObject) => {
  return (postcssRoot, postcssResult) => {
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {},
    );
    if (!validOptions) {
      return;
    }
    stylelint.utils.report({});
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = stylelint.utils.ruleMessages(ruleName, {
  expected: 'A dummy message',
});
ruleFunction.meta = {
  url: 'https://github.com/AravinthAro/stylelint-my-test/blob/main/README.md',
};

module.exports = stylelint.createPlugin('plugin/foo-bar', ruleFunction);
