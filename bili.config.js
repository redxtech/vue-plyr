const babel = require('rollup-plugin-babel')

module.exports = {
  input: 'src/index.js',
  outDir: 'dist',
  format: ['cjs', 'es', 'umd'],
  moduleName: 'VuePlyr',
  postcss: {
    extract: true
  },
  plugins: [
    'vue',
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.vue']
    })
  ]
}
