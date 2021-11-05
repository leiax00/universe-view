import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import { i18n } from '@/plugins/vueI18n'
import '@/styles/index.scss'


const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .mount('#app')
// store.getters.themeManager.initWith(app).applyTheme('base')