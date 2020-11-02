export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'vue-plyr-nuxt',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		]
	},

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [{ src: '~/plugins/vue-plyr.js', mode: 'client' }]
}
