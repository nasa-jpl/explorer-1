module.exports = {
  extends: ['stylelint-config-standard-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-blockless'],
        ignoreAtRules: ['apply']
      }
    ],
    'color-hex-length': 'long',
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['pxToRem']
      }
    ],
    'import-notation': null,
    'keyframes-name-pattern': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use'] // Sass will not compile if `@use` is not before all other rules.
      }
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-function-pattern': null,
    'scss/at-rule-no-unknown': [
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
          'variants'
        ]
      }
    ],
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*']
}
