module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  ignorePatterns: ['dist/**/*', 'node_modules/**/*'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'no-unused-vars': 'off',
  },
  extends: ['plugin:storybook/recommended'],
}
