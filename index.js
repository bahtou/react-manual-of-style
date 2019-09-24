module.exports = {
  extends: [
    'eslint-config-jsmos',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
