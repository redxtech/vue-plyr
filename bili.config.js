module.exports = {
  input: 'src/index.js',
  outDir: 'dist',
  format: ['cjs', 'es', 'umd-min'],
  moduleName: 'VuePlyr',
  postcss: {
    extract: true
  },
  plugins: [
    'vue'
  ],
  babel: {
    runtimeHelpers: true,
    extensions: ['.js', '.vue']
  }
}
