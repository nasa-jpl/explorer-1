module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-hex-length': 'long',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        // Ignore at-rules introduced by Tailwind via PostCSS.
        ignoreAtRules: [
          'tailwind',
          'variants',
          'responsive',
          'apply',
          'screen',
          'layer',
          'include',
          'mixin',
          'for',
        ],
      },
    ],
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
}
