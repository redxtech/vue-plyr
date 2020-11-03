<template>
	<div class="demo">
		<h1>vue-plyr demo.</h1>
		<h3>
			sources can be found at
			<a href="https://github.com/redxtech/vue-plyr/tree/master/examples">
				github.com/redxtech/vue-plyr</a
			>.
		</h3>
		<div class="components">
			<vue-plyr-video />
			<vue-plyr-audio />
			<youtube />
			<youtube-np />
			<vimeo />
			<vimeo-np />
		</div>
	</div>
</template>

<script>
	import VuePlyrVideo from './video.vue'
	import VuePlyrAudio from './audio.vue'
	import Youtube from './youtube.vue'
	import YoutubeNp from './youtube-np.vue'
	import Vimeo from './vimeo.vue'
	import VimeoNp from './vimeo-np.vue'

	export default {
		name: 'Demo',
		components: {
			VuePlyrVideo,
			VuePlyrAudio,
			Youtube,
			YoutubeNp,
			Vimeo,
			VimeoNp
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

	.demo {
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #273849;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.components > div {
		margin: 2rem 0;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 2rem;
	}
</style>
