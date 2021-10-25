import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

const resolvePath = (_path) => path.resolve(__dirname, _path);
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
    plugins: [vue()],
    base: contextPath(mode),
    build: {},
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      alias: {
        '@': resolvePath('src'),
      },
    }
  })
}
