import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'

const config = {
  input: './src/main.js',
  plugins: [
    vue(),
    resolve(),
    commonjs()
  ]
}

export default [
  {
    // ESM module
    ...config,
    output: {
      file: './dist/vue-plyr.esm.js',
      format: 'esm'
    }
  },
  {
    // SSR module
    ...config,
    plugins: [
      ...config.plugins,
      vue({ template: { optimizeSSR: true } }),
      copy({
        targets: [
          {
            src: './src/extra/nuxt/vue-plyr.plugin.js',
            dest: './dist/extra/nuxt/vue-plyr.plugin.js'
          }
        ]
      })
    ],
    output: {
      format: 'esm',
      file: './dist/vue-plyr.ssr.js'
    }
  },
  {
    // Browser build
    ...config,
    output: {
      format: 'iife',
      file: './dist/vue-plyr.js',
      name: 'VuePlyr'
    }
  }
]
