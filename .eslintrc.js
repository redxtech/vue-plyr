module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    indent: 0,
    'indent-legacy': ['error', 2]
  }
}