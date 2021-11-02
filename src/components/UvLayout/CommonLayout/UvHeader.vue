<template>
  <v-container class="uv-header">
    <div class="uv-logo">LOGO</div>
    <div class="uv-head-nav">
      <router-link v-for="(item, index) in headers" :key="index" :to="item.path"
                   class="route-item text-teal-lighten-1">
        {{ $t(item.name) }}
      </router-link>
    </div>
    <div class="uv-head-right">RIGHT NAV</div>
  </v-container>
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
@use "~@/styles/mixins.scss" as mixins;

.uv-header {
  @include mixins.container;
  height: 4.5rem;
  .uv-logo {}
  .uv-head-nav {
    flex-grow: 1;
    .route-item {
      &+.route-item {
        margin-left: 1.5rem;
      }
    }
  }
  .uv-head-right {
    justify-content: flex-end;
  }
  &>div+div {
    margin-left: 1.5rem;
  }
}
</style>