module.exports = {
  input: 'src/index.js',
  outDir: 'dist',
  format: ['cjs', 'es', 'umd'],
  moduleName: 'VuePlyr',
  js: 'babel',
  postcss: {
    extract: true
  },
  plugins: [
    'vue'
  ]
}
