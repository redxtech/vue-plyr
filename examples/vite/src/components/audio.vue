<template>
	<div>
		<h2>audio player</h2>
		<vue-plyr>
			<audio controls crossorigin playsinline>
				<source
					src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
					type="audio/mp3"
				/>
				<source
					src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
					type="audio/ogg"
				/>
			</audio>
		</vue-plyr>
	</div>
</template>
