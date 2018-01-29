module.exports = {
  input: "src/index.js",
  outDir: 'dist',
  format: ['cjs', 'umd'],
  moduleName: 'VuePlyr',
  js: 'buble',
  postcss: {
    extract: true
  },
  plugin: [
    'vue'
  ],
  uglifyEs: true
}