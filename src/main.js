import {createApp} from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import './styles/index.scss';
import {i18n} from '@/utils/domain';

let rootApp = createApp(App);
rootApp.use(i18n).use(store).use(router);
rootApp.mount('#app');
