<template>
	<div>
		<h2>video player</h2>
		<vue-plyr :options="options">
			<video
				controls
				crossorigin
				playsinline
				data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
			>
				<source
					size="576"
					src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
					type="video/mp4"
				/>
				<source
					size="720"
					src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
					type="video/mp4"
				/>
				<source
					size="1080"
					src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
					type="video/mp4"
				/>
				<track
					default
					kind="captions"
					label="English captions"
					src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
					srclang="en"
				/>
				<track
					kind="captions"
					label="Légendes en français"
					src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
					srclang="fr"
				/>
				<a
					download=""
					href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
				>
					Download
				</a>
			</video>
		</vue-plyr>
	</div>
</template>

<script>
	export default {
		name: 'Video',
		data() {
			return {
				options: { quality: { default: '1080p' } }
			}
		}
	}
</script>
