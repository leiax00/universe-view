<template>
  <div class="title-detail-wrapper">
    <slot>
      <h1 class="text-h1">Simple Zero</h1>
      <div class="sub-title text-h4">Everything will be better</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UvTitleMain',
}
</script>

<style lang="scss" scoped>
.title-detail-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 10rem 0;
  color: var(--v-theme-color);

}
</style>