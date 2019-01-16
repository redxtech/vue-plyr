module.exports = {
  srcDir: `${process.cwd()}/src/demo/nuxt`,
  mode: 'universal',
  head: {
    title: 'vue-plyr demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '../../../dist/vue-plyr.css'
  ],
  plugins: [
    '~/plugins/vue-plyr'
  ]
}

