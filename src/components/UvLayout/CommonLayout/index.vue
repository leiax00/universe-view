<template>
  <div class="common-layout">
    <div class="layout-header">
      <uv-header/>
    </div>
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

export default {
  name: 'CommonLayout',
  components: { UvFooter, UvHeader }
}
</script>

<style lang="scss" scoped>
$layout-max-w: 80%;
$header-h: 4.5rem;
$footer-h: 3rem;
$content-hm: calc(100vh - #{$header-h} - #{$footer-h});
$content-h: calc(100% - #{$header-h} - #{$footer-h});
$mapping: (
  'header': $header-h,
  'content': $content-h,
  'footer': $footer-h,
);
.common-layout {
  max-width: $layout-max-w;
  margin: 0 auto;
  @each $k, $v in $mapping {
    .layout-#{$k} {
      height: $v;
      @if($k == 'content') {
        min-height: $content-hm;
      }
      padding: calc(0.75 * var(--v-theme-padding));
    }
  }
}
</style>