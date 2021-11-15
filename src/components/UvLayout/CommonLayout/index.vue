<template>
  <div class="common-layout">
    <uv-nav/>
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
  components: { UvNav, UvFooter, UvHeader },
  provide() {
    const self = this
    return {
      logoUrl: function() {
        const { base, opts } = self.$store.getters.settings.app.srcCdn
        return `${base}/${opts.pic}/logo-simple_zero.png`
      }()
    }
  }
}
</script>

<style lang="scss" scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout-content {
    flex: auto;
  }

  .layout-content, .layout-footer {
    width: 70%;
    margin: var(--v-theme-margin) auto;
  }
}

@media (max-width: 768px) {
  .common-layout {
    .layout-content, .layout-footer {
      width: 90%;
      margin: var(--v-theme-margin) auto;
    }
  }
}

</style>