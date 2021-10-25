import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

const contextPath = (mode) => {
  if (mode && mode !== '' && mode !== '/') {
    return `/${loadEnv(mode, process.cwd()).VITE_APP_PREFIX}/`
  }
  return '/'
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base: contextPath(mode),
    build: {}
  })
}
