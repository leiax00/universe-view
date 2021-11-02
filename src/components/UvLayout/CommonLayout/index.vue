<template>
  <div class="common-layout">
    <uv-header />
    <router-view />
    <div id="little_cute" class="uv_little_cute">
      <little-cute />
    </div>
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
  .uv_little_cute {
    position: fixed;
    width: 250px;
    height: 350px;
    bottom: 0;
    z-index: 10000;
    right: 0.75rem;
    transition: all 0.3s ease-in-out 0s;
  }
}
</style>