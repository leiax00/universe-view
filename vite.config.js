import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'

const resolvePath = (_path) => path.resolve(__dirname, _path)
const contextPath = (mode) => {
  const context = loadEnv(mode, process.cwd()).VITE_APP_PREFIX
  if (context && context !== '' && context !== '/') {
    return `/${context}/`
  }
  return '/'
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: contextPath(mode),
    build: {},
    resolve: {
      extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.vue' ],
      alias: { '@': resolvePath('src') },
    },
    plugins: [
      vue(),
      vueI18n({
        compositionOnly: false,
        // defaultSFCLang: 'yml',
        include: resolvePath('./**/lang/**')
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: 'expose',
      }),
    ]
  })
}