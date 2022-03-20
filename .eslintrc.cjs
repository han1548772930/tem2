/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['./.eslintrc-auto-import.json', '@antfu'],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': 'off',
  },
}
