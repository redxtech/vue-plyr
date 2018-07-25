# vue-plyr
>A set of Vue components for the plyr video & audio player.

This is useful for when you want a nice video player in your Vue app.

It uses [plyr](https://plyr.io) v3 for the players.

Supported player types: HTML5 video, HTML5 audio, YouTube (div & progressive
enhancement), and Vimeo (div & progressive enhancement).

## Installation

```bash
yarn add vue-plyr plyr # or npm i vue-plyr plyr
```

### Browser

Just include Vue, plyr, the script file, and the css. e.g.:

```html
<script type="text/javascript" src="https://unpkg.com/vue@latest"></script>
<script type="text/javascript" src="https://unpkg.com/plyr@latest"></script>
<script type="text/javascript" src="https://unpkg.com/vue-plyr@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-plyr@latest/dist/vue-plyr.css">
```
### Module

```js
// In your main vue file - the one where you create the initial vue instance.
import 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
```

## Usage

Once installed, it can be used in a template as simply as:

```vue
<!-- video element -->
<vue-plyr>
  <video poster="poster.png" src="video.mp4">
    <source src="video-720p.mp4" type="video/mp4" size="720">
    <source src="video-1080p.mp4" type="video/mp4" size="1080">
    <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
  </video>
</vue-plyr>

<!-- audio element -->
<vue-plyr>
  <audio>
    <source src="audio.mp3" type="audio/mp3"/>
    <source src="audio.ogg" type="audio/ogg"/>
  </audio>
</vue-plyr>

<!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
<vue-plyr>
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
      allowfullscreen allowtransparency allow="autoplay">
    </iframe>
  </div>
</vue-plyr>

<!-- youtube div element -->
<vue-plyr>
  <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
</vue-plyr>

<!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
<vue-plyr>
    <div class="plyr__video-embed">
      <iframe
        src="https://player.vimeo.com/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
        allowfullscreen allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>

<!-- vimeo div element -->
<vue-plyr>
  <div data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>
</vue-plyr>
```

If you want to have events from the plyr instance emitted back to a parent component, just pass an array of the events
you want emitted. Valid events are [here](https://github.com/sampotts/plyr#events).
```html
<vue-plyr :emit="['timeupdate','exitfullscreen']" @timeupdate="videoTimeUpdated" @exitfullscreen="exitedFullScreen">
```

For custom options you can pass an `options` prop which is an object that will be passed to the `new Plyr()`
creation. Available options [here](https://github.com/sampotts/plyr#options). I added an additional option
(`hideYouTubeDOMError`) that hides the error that is always logged when destroying a YouTube player. It defaults to
`true`, and you can disable it to see the error by setting it to false.

To access the player instance, you have two options. In any of the events, you can access the player object through
`event.detail.plyr`. However, the preferred way to access it is through the `@player` event which is emitted when the
component is mounted. The payload is the player object. You can use this to manipulate the instance directly.

## SSR

This should support SSR out of the box. For nuxt, create a file called `vue-plyr.js` in your plugins folder containing
only the two lines `import 'vue-plyr'` & `import 'vue-plyr/dist/vue-plyr.css'`. Then, in your `nuxt.config.js` file add
`'~/plugins/vue-plyr'` to the plugins array. The `vue-plyr` element should be globally registered now.

## Author

**plyr-vue** © [RedXTech](https://github.com/redxtech), Released under the [MIT](./LICENSE.md) License.
