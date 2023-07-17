module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    }
  }],
  rules: {
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-multiple-empty-lines': 'off',
    'import/prefer-default-export': 'off',
    'no-cond-assign': 'off',
    'vue/multi-word-component-names': 'off',
    "import/no-unresolved": [2, { "caseSensitive": false }],
    '@typescript-eslint/no-empty-function': 'off',
    'no-restricted-globals': 'off',
  },
};
