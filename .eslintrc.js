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
    indent: 0,
    'indent-legacy': ['error', 2]
  }
}