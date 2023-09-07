// eslint-disable-next-line @typescript-eslint/no-var-requires
const extendedVueParser = require('typescript-eslint-parser-for-extra-files');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: extendedVueParser,
      js: '@typescript-eslint/parser',
      '<template>': extendedVueParser,
      vue: 'vue-eslint-parser',
    },
  },
  rules: {
    semi: ['warn', 'always'],
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-multiple-empty-lines': 'off',
    'import/prefer-default-export': 'off',
    'no-cond-assign': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-restricted-globals': 'off',
  },
};
