<template>
  <div id="app">
    <div class="links">
      <router-link to="/">Video</router-link>
      |
      <router-link to="/audio">Audio</router-link>
      |
      <router-link to="/vimeo">Vimeo</router-link>
      |
      <router-link to="/youtube">YouTube</router-link>
      |
      <router-link to="/vimeo-np">Vimeo Non Progressive</router-link>
      |
      <router-link to="/youtube-np">YouTube Non Progressive</router-link>
    </div>
    <router-view/>
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
