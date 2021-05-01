module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-multiple-empty-lines': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-cond-assign': 'off',
    'vue/no-mutating-props': 'off',
  },
};
