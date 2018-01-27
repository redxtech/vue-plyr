# vue-plyr
>A Vue.js component that is a plyr video player.

This is useful for when you want a nice video player in your Vue app.

## Installation

```bash
yarn add vue-plyr # or npm i vue-plyr --save
```

### Browser

Include the script file, then use it in the app; e.g.:

```html
<script type="text/javascript" src="https://unpkg.com/vue@latest"></script>
<script type="text/javascript" src="https://unpkg.com/vue-plyr-simple@latest"></script>
```

### Module

```js
import VuePlyr from 'vue-plyr';
Vue.use(VuePlyr)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-plyr poster="poster.png" :videos="this.videos" :subs="this.subtitles" />
```
```js
// this.videos
[
	{ src: 'path/to/video.mp4', format: 'mp4' },
	{ src: 'path/to/video,webm', format: 'webm' }
]
// this.subtitles
{
	label: "English Captions",
	src: "path/to/captions.vtt",
	srclang: "en"
}
```

