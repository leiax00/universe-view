<template>
  <header class="uv-header">
    aaaa
  </header>
</template>

<script>

export default {
  name: 'UvHeader',
  computed: {
    headers() {
      return this.$store.getters.settings.header.menu
    }
  }

}
</script>

<style lang="scss" scoped>
.uv-header {

}
</style>