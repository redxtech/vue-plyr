import vue from 'rollup-plugin-vue'

const config = {
  input: 'src/main.js',
  plugins: [
    vue()
  ],
  external: ['plyr', 'vue-runtime-helpers']
}

export default [
  {
    ...config,
    output: {
      file: './dist/vue-plyr.js',
      format: 'esm'
    }
  },
  {
    ...config,
    output: {
      file: './dist/vue-plyr.cjs.js',
      format: 'cjs'
    }
  },
  {
    ...config,
    output: {
      file: './dist/vue-plyr.umd.js',
      globals: {
        plyr: 'Plyr',
        'vue-runtime-helpers': 'VueRuntimeHelpers'
      },
      name: 'VuePlyr',
      format: 'umd'
    }
  }
]
