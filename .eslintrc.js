module.exports = {
  root: true,
  env: {
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'vue/script-indent': [
      'error', 2, {
        'baseIndent': 1
      }],
    'indent': 'off',
    'indent-legacy': ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
