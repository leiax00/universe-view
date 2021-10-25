import { createApp } from 'vue'
import App from '@/App'
import router from "@/router";
import store from "@/store";
import './styles/index.scss'

let rootApp = createApp(App);
rootApp.use(router).use(store)
rootApp.mount('#app')
