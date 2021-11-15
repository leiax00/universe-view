<template>
  <a-row :class="clazz" type="flex" align="middle" :gutter="24">
    <a-col flex="0 1 100px" class="uv-logo">
      <a class="nav-item" href="/"><img :src="logoUrl" alt="Simple Zero" height="28"></a>
    </a-col>
    <a-col flex="auto" class="uv-head-nav">
      <router-link v-for="(item, index) in headers" :key="index" :to="item.path"
                   class="route-item text-teal-lighten-1">
        {{ $t(item.name) }}
      </router-link>
    </a-col>
    <a-col flex="0 1 auto" class="uv-head-right">RIGHT NAV</a-col>
  </a-row>
</template>

<script>
import { onBeforeUnmount, ref, toRefs } from 'vue'

export default {
  name: 'UvNav',
  computed: {
    clazz() {
      return {
        'main-nav': true,
        // 往下滚动时, 自动隐藏nav
        'fixed-top': this.navState.scrollTop !== 0 && this.navState.scrollTop > this.navState.preScrollTop,
        // 往上滚动时添加背景色, 因为可能和正文重叠
        'with-bg': this.navState.scrollTop !== 0 && this.navState.scrollTop < this.navState.preScrollTop
      }
    },
    headers() {
      return this.$store.getters.settings.header.menu
    },
  },
  inject: [ 'logoUrl' ],
  setup() {
    let navState = ref({ scrollTop: 0, preScrollTop: 0 })
    const handleScroll = function() {
      navState.value.preScrollTop = navState.value.scrollTop
      navState.value.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    }
    document.addEventListener('scroll', handleScroll )
    onBeforeUnmount(() => {
      document.removeEventListener('scroll', handleScroll)
    })
    return {
      navState
    }
  },

}
</script>

<style lang="scss" scoped>
@use "~@/styles/tools/_index.sass" as tools;
$nav-h: var(--v-theme-nav-height);
.main-nav {
  @include tools.p_fixed($height: $nav-h);
  @include tools.font-style($font-weight:'bold');
  padding: 0 var(--v-theme-padding);
  z-index: 1;
  &.fixed-top {
    top: calc(#{$nav-h} * -1);
  }
  &.with-bg {
    background-color: var(--v-theme-nav-bgc);
  }

  .uv-head-nav {
    .route-item {
      &+.route-item {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>