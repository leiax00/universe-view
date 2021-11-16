<template>
  <a-row class="uv-header" type="flex" justify="center">
    <a-col class="title-detail">
      <uv-title />
    </a-col>
    <a-col :span="24">
      <wave />
    </a-col>
  </a-row>
</template>

<script>

import UvTitle from '@/components/business/UvTitle'
import Wave from '@/components/basic/animations/Wave'

export default {
  name: 'UvHeader',
  components: { Wave, UvTitle },
  computed: {
    headers() {
      return this.$store.getters.settings.header.menu
    }
  }

}
</script>

<style lang="scss" scoped>
.uv-header {
  background-attachment: scroll;
  background: var(--v-theme-header-image) no-repeat center center;
  background-size: cover;
  .title-detail {

  }
}
</style>