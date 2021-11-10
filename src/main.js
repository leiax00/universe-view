import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import vuetify from './plugins/vuetify/vuetify.ts'
import { loadFonts } from './plugins/webfontloader'
import { i18n } from '@/plugins/vueI18n'
import '@/styles/index.scss'

loadFonts().then(()=>{})

createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')