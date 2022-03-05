module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
  ],

  parserOptions: {
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
  },

  rules: {
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-multiple-empty-lines': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-cond-assign': 'off',
    'vue/no-mutating-props': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
