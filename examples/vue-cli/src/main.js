import { createApp } from 'vue'
import App from './App.vue'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App).use(VuePlyr).mount('#app')
