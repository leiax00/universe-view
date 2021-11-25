<template>
  <div ref="app" :class="appClazz">
    <router-view/>
  </div>
</template>
<script>
import { computed } from 'vue'
import store from '@/plugins/store'
import colorUtils from '@/utils/colors'

export default {
  name: 'App',
  setup() {
    const themeManager = computed(() => store.getters.themeManager)
    const appClazz = computed(() => `uv-app ${themeManager.value.getClass().join(' ')}`)
    themeManager.value.applyTheme()
    return { themeManager, appClazz }
  },
  provide() {
    return {
      colors: colorUtils
    }
  }
}
</script>
<style lang="scss" scoped>
.uv-app {
  height: 100%;
  min-height: 100vh;
  background-color: var(--v-theme-background);
  color: var(--v-theme-color);
}
</style>