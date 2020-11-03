<template>
	<div id="app">
		<h1>vue-plyr demo</h1>
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
	import VuePlyrVideo from './video'
	import VuePlyrAudio from './audio'
	import Youtube from './youtube'
	import YoutubeNp from './youtube-np'
	import Vimeo from './vimeo'
	import VimeoNp from './vimeo-np'

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
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	h1 {
		margin: 3rem;
	}
</style>
