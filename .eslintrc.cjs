/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@antfu', './.eslintrc-auto-import.json'],
  env: {
    'vue/setup-compiler-macros': true,
  },
}
