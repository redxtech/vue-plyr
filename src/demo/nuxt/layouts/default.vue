<template>
  <div id="app">
    <div class="links">
      <nuxt-link to="/">Video</nuxt-link>
      |
      <nuxt-link to="/audio">Audio</nuxt-link>
      |
      <nuxt-link to="/vimeo">Vimeo</nuxt-link>
      |
      <nuxt-link to="/youtube">YouTube</nuxt-link>
      |
      <nuxt-link to="/vimeonp">Vimeo Non Progressive</nuxt-link>
      |
      <nuxt-link to="/youtubenp">YouTube Non Progressive</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style>
  .links {
    padding: 1rem 0;
  }

  .links a {
    font-family: sans-serif;
    padding: 0 0.5rem;
  }
</style>
