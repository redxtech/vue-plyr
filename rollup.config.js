import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
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
      resolve({
        only: ['vue-runtime-helpers']
      }),
      vue({
        template: {
          optimizeSSR: true
        }
      })
    ],
    output: {
      file: pkg.ssr,
      format: 'cjs'
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
