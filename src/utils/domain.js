import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

export const i18n = createI18n({
  // legacy: false, // Composition API 模式
  locale: 'zh',
  messages
  // messages: batchParseFile(import.meta.globEager("./lang/*.js"))
});