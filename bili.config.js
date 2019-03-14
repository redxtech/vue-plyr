module.exports = {
  input: {
    'vue-plyr': 'src/index.js'
  },
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'VuePlyr'
  },
  postcss: {
    extract: true
  },
  plugins: {
    vue: true,
    babel: {
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.vue']
    }
  }
}
