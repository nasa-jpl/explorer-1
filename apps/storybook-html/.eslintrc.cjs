/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
