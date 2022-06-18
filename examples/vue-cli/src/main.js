import { createApp } from 'vue'
import App from './App.vue'

import VuePlyr from '@skjnldsv/vue-plyr'
import '@skjnldsv/vue-plyr/dist/dist/vue-plyr.css'

createApp(App).use(VuePlyr).mount('#app')
