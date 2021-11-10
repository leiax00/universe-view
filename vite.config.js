import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
// 加载yaml/xml/xlsx/ini/toml/csv/plist/properties等
import content from '@originjs/vite-plugin-content'

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
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: 'import { h } from "vue";'
    },
    base: contextPath(mode),
    build: {},
    resolve: {
      extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.vue' ],
      alias: {
        '@': resolvePath('src'),
        '~@': resolvePath('src'),
      },
    },
    plugins: [
      vue(),
      vueI18n({
        compositionOnly: false,
        // defaultSFCLang: 'yml',
        include: resolvePath('./**/lang/**')
      }),
      content()
    ]
  })
}