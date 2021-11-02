<template>
  <div class="common-layout">
    <uv-header />
    <router-view />
  </div>
</template>

<script>
import UvHeader from '@/components/UvLayout/CommonLayout/UvHeader'
export default {
  name: 'CommonLayout',
  components: { UvHeader }
}
</script>

<style scoped>

</style>