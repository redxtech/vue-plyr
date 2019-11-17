import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

// default config options
const config = {
  input: './src/main.js',
  plugins: [
    resolve({
      only: ['vue-runtime-helpers']
    }),
    vue()
  ],
  output: {
    file: pkg.module,
    format: 'esm'
  },
  external: ['plyr']
}

export default [
  {
    // ESM module
    ...config
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
      file: pkg.main,
      format: 'esm'
    }
  },
  {
    // Browser build
    ...config,
    output: {
      file: pkg.unpkg,
      format: 'iife',
      name: 'VuePlyr',
      globals: {
        plyr: 'Plyr'
      }
    }
  }
]
