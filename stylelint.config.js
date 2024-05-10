module.exports = {
  extends: ['stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-blockless'],
        ignoreAtRules: ['apply'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        // Ignore at-rules introduced by Tailwind and Sass via PostCSS.
        ignoreAtRules: [
          'apply',
          'extend',
          'for',
          'function',
          'include',
          'layer',
          'mixin',
          'responsive',
          'return',
          'screen',
          'tailwind',
          'use',
          'variants',
        ],
      },
    ],
    'color-hex-length': 'long',
    'declaration-block-trailing-semicolon': null,
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['pxToRem'],
      },
    ],
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use'], // Sass will not compile if `@use` is not before all other rules.
      },
    ],
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
}
