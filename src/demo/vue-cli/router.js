import Vue from 'vue'
import Router from 'vue-router'
import Video from '../components/Video'
import Audio from '../components/Audio'
import Vimeo from '../components/Vimeo'
import YouTube from '../components/YouTube'
import YouTubeNP from '../components/YouTubeNP'
import VimeoNP from '../components/VimeoNP'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Video',
      component: Video
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/vimeo',
      name: 'Vimeo',
      component: Vimeo
    },
    {
      path: '/youtube',
      name: 'YouTube',
      component: YouTube
    },
    {
      path: '/vimeo-np',
      name: 'Vimeo NP',
      component: VimeoNP
    },
    {
      path: '/youtube-np',
      name: 'YouTube NP',
      component: YouTubeNP
    }
  ]
})
