<template>
  <div class="common-layout">
    <uv-header />
    <router-view />
    <little-cute />
  </div>
</template>

<script>
import UvHeader from '@/components/UvLayout/CommonLayout/UvHeader'
import LittleCute from '@/components/LittleCute'
export default {
  name: 'CommonLayout',
  components: { LittleCute, UvHeader }
}
</script>

<style lang="scss" scoped>
.common-layout {
}
</style>