import { createStore } from 'vuex';
import getters from './getters';
import { batchParseJsFile } from '@/utils';

const modules = batchParseJsFile(import.meta.globEager('./modules/*.js'));

const store = createStore({
  modules,
  getters,
});

export default store;