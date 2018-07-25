<template>
  <div id="app">
    <div class="links">
      <router-link to="/">Home</router-link>
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
    <router-view />
  </div>
</template>

<style lang="scss">
  .links {
    padding: {
      top: 1rem;
      bottom: 1rem;
    }

    a {
      font-family: sans-serif;
      padding: {
        left: 0.5rem;
        right: 0.5rem;
      }
    }
  }
</style>
