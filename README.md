# vue-plyr
>A set of Vue components for the plyr video & audio player.

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
<script type="text/javascript" src="https://unpkg.com/vue-plyr-simple@latest/dist/vue-plyr.css"></script>
```

```js
Vue.use(VuePlyr)
```

### Module

```js
import VuePlyr from 'vue-plyr';
Vue.use(VuePlyr)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<plyr-video poster="path/to/poster.png" :videos="this.videos" :subtitles="this.subtitles" />
<plyr-audio :tracks="this.tracks" />
<plyr-youtube :id="this.youtubeID" />
<plyr-vimeo :id="this.vimeoID" />
```
```js
export default {
    data () {
        return {
            // Array of objects with path to video files and format.
            videos: [
                { src: 'path/to/video.mp4', format: 'mp4' },
                { src: 'path/to/video.webm', format: 'webm' }
            ]

            // Object with subtitles label, source, and language.
            subtitles: {
                label: "English Captions",
                src: "path/to/captions.vtt",
                srclang: "en"
            },

            // Array of objects with path to audio files and format.
            tracks: [
                { src: 'path/to/audio.mp3', format: 'mp3' },
                { src: 'path/to/audio.ogg', format: 'ogg' }
            ],

            // YouTube video ID or video URL.
            // https://www.youtube.com/watch?v=bTqVqk7FSmY & https://youtu.be/bTqVqk7FSmY would have the same effect.
            youtubeID: 'bTqVqk7FSmY'

            // Vimeo video ID or video URL.
            // https://vimeo.com/147865858 would have the same effect.
            vimeoID: '147865858'
        }
    }
}
```
