module.exports = {
  input: "src/index.js",
  outDir: 'dist',
  format: ['cjs', 'cjs-min', 'umd', 'umd-min'],
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