/* eslint-disable prettier/prettier */
// imports into root eslint.config.js

// @ts-check

import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {}, // Add recommendedConfig property
  allConfig: {} // Add allConfig property
})

export default [
  js.configs.recommended,
  ...compat.extends('plugin:vue/vue3-recommended'),
  ...compat.extends('plugin:storybook/recommended'),
  {
    files: [
      '**/*.vue',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts'
    ],
    ignores: ['**/*.d.ts', '**/dist/**/*', '**/.nuxt/*', '**/node_modules/**/*', '.gitignore'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser
      },
      ecmaVersion: 'latest'
    },
    rules: {
      semi: 'off',
      '@stylistic/semi': ['warn', 'never'],
      // allow async-await
      'generator-star-spacing': 'off',
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',
      'no-void': 'off',
      'multiline-ternary': 'off',
      'no-unused-vars': 'warn',

      'no-undef': 'warn',

      'prefer-promise-reject-errors': 'off',
      'space-before-function-paren': 'off',
      indent: ['error', 2],
      'vue/multi-word-component-names': 'warn',

      // TypeScript
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'storybook/hierarchy-separator': 'off',
      'storybook/prefer-pascal-case': 'off',
      'storybook/story-exports': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off'
    }
  },
  eslintPluginPrettierRecommended
]
