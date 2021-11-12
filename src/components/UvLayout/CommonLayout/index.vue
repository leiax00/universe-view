<template>
  <div class="common-layout">
    <uv-nav />
    <uv-header/>
    <div class="layout-content">
      <router-view/>
    </div>
    <div class="layout-footer">
      <uv-footer/>
    </div>
  </div>
</template>

<script>
import UvHeader from '@/components/UvLayout/CommonLayout/UvHeader'
import UvFooter from '@/components/UvLayout/CommonLayout/UvFooter'
import UvNav from '@/components/UvLayout/CommonLayout/UvNav'

export default {
  name: 'CommonLayout',
  components: { UvNav, UvFooter, UvHeader }
}
</script>

<style lang="scss" scoped>
.layout-content {
  height: 1500px;
}
</style>