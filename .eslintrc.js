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
  ignorePatterns: ['dist/**/*.js'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'no-unused-vars': 'off',
  },
}
