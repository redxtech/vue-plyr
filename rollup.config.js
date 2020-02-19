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

const configPolyfilled = {
  input: './src/main-polyfilled.js',
  plugins: [
    resolve({
      only: ['vue-runtime-helpers']
    }),
    vue()
  ],
  output: {
    file: pkg.modulePolyfilled,
    format: 'esm'
  },
  external: ['plyr/dist/plyr.polyfilled.min.js']
}

export default [
  {
    // ESM module
    ...config
  },
  {
    // ESM Polyfilled module
    ...configPolyfilled
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
    // SSR Polyfilled module
    ...configPolyfilled,
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
      file: pkg.ssrPolyfilled,
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
  },
  {
    // Browser Polyfilled build
    ...configPolyfilled,
    output: {
      file: pkg.unpkgPolyfilled,
      format: 'iife',
      name: 'VuePlyr',
      globals: {
        'plyr/dist/plyr.polyfilled.min.js': 'Plyr'
      }
    }
  }
]
