<template>
  <div id="app">
    <h1>Video Player</h1>
    <vue-plyr>
      <video
        crossorigin
        playsinline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
      >
        <source
          size="576"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
        >
        <source
          size="720"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
        >
        <source
          size="1080"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
        >
        <track
          default
          kind="captions"
          label="English"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          srclang="en"
        >
        <track
          kind="captions"
          label="Français"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
          srclang="fr"
        >
        <a
          download=""
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        >
          Download
        </a>

      </video>
    </vue-plyr>

    <h1>Audio Player</h1>
    <vue-plyr>
      <audio
        crossorigin
        playsinline
      >
        <source
          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
          type="audio/mp3"
        >
        <source
          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
          type="audio/ogg"
        >
      </audio>
    </vue-plyr>

    <h1>YouTube</h1>
    <vue-plyr>
      <div class="plyr__video-embed">
        <iframe
          allow="autoplay"
          allowfullscreen
          allowtransparency
          src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
        />
      </div>
    </vue-plyr>

    <h1>Vimeo</h1>
    <vue-plyr>
      <div class="plyr__video-embed">
        <iframe
          allow="autoplay"
          allowfullscreen
          allowtransparency
          src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
        />
      </div>
    </vue-plyr>

    <h1>YouTube (Not Progressive Enhancement)</h1>
    <vue-plyr>
      <div
        data-plyr-embed-id="bTqVqk7FSmY"
        data-plyr-provider="youtube"
      />
    </vue-plyr>

    <h1>Vimeo (Not Progressive Enhancement)</h1>
    <vue-plyr>
      <div
        data-plyr-embed-id="76979871"
        data-plyr-provider="vimeo"
      />
    </vue-plyr>
  </div>
</template>

<script>
  // import VuePlyr from './VuePlyr'

  export default {
    name: 'App'
    // components: {
    //   VuePlyr
    // }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
