# vue-plyr
>v5.1.3 - [Changelog](https://github.com/redxtech/vue-plyr/blob/master/changelog.md)

>A set of Vue components for the plyr video & audio player.

This is useful for when you want a nice video player in your Vue app.

It uses [plyr](https://plyr.io) v3 for the players.

Supported player types: HTML5 video, HTML5 audio, YouTube (div & progressive
enhancement), and Vimeo (div & progressive enhancement).

## Installation

```bash
yarn add vue-plyr # or npm i vue-plyr
```

### Browser

Just include Vue, the script file, and the css. e.g.:

```html
<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="https://unpkg.com/vue-plyr/dist/vue-plyr.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-plyr/dist/vue-plyr.css">
```
### Module

```js
// In your main vue file - the one where you create the initial vue instance.
import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Vue.use(VuePlyr)
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
      src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
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
        src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
        allowfullscreen allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>

<!-- vimeo div element -->
<vue-plyr>
  <div data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>
</vue-plyr>
```

## Player Instance

To access the player instance, you have two options. The preferred
method is to access the player through the `refs` attribute.

```html
<template>
  <vue-plyr ref="plyr"></vue-plyr>
</template>
<script>
  name: 'Component',
  mounted () {
    console.log(this.player)
  },
  computed: {
    player () { return this.$refs.plyr.player }
  }
</script>
```

You are also able to access it through the `@player` event **(soon to be
removed)** which is emitted when the component is mounted. The payload
is the player object. You can use this to manipulate the instance
directly.

## Events

If you want to capture events from the plyr instance, there are a few
options:

The preferred method is accessing the player instance through the `ref`
attribute and using that object for events, as you would with a vanilla
plyr instance.

Valid events are [here](https://github.com/sampotts/plyr#events).

```html
<template>
  <vue-plyr ref="plyr"></vue-plyr>
</template>
<script>
  name: 'Component',
  mounted () {
    this.player.on('event', () => console.log('event fired'))
  },
  computed: {
    player () { return this.$refs.plyr.player }
  }
</script>
```

The other way **(soon to be removed)** is to just pass an array of the
events you want emitted.

```html
<vue-plyr :emit="['timeupdate','exitfullscreen']" @timeupdate="videoTimeUpdated" @exitfullscreen="exitedFullScreen">
```

## Options

For custom options you can pass an `options` prop which is an object
that will be passed to the `new Plyr()` creation. Available options
[here](https://github.com/sampotts/plyr#options). I added an additional
option (`hideYouTubeDOMError`) that hides the error that is always
logged when destroying a YouTube player. It defaults to `true`, and you
can disable it to see the error by setting it to false.

## SSR

This should support SSR out of the box. For nuxt, create a file called `vue-plyr.js` in your plugins folder containing
only the three lines:
```js
import Vue from 'vue'
import VuePlyr from 'vue-plyr'

Vue.use(VuePlyr)
```

Then, in your `nuxt.config.js` file add `'~/plugins/vue-plyr'` to the plugins array. The `vue-plyr` element should be globally registered now. I might add a nuxt config file to the package at some point in the future so that you do not have to create the file yourself, but currently you have to make it manually.

You will also want to add `vue-plyr/dist/vue-plyr.css` to your css array in the same file.

The `nuxt.config.js` file should at minimum include this:
```js
export default {
  plugins: [
    '~/plugins/vue-plyr'
  ],
  css: [
    'vue-plyr/dist/vue-plyr.css'
  ]
}
```

## Author

**vue-plyr** © [RedXTech](https://github.com/redxtech), Released under the [MIT](./LICENSE.md) License.
