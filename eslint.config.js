// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

/* eslint-disable prettier/prettier */
// eslint.config.js
// imports config from the shared eslint-config package `packages/configs/eslint`
import config from '@explorer-1/eslint-config'

export default [
  ...config,
  ...storybook.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"]
];
