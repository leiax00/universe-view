<template>
  <div class="blog-item">
    <div class="blog-main-info">
      <div class="title">{{ blogInfo.title }}</div>
      <div class="sub-title">{{ blogInfo.subTitle }}</div>
      <div class="summary">{{ blogInfo.summary }}</div>
    </div>
    <div class="id-card">{{ blogInfo.author }}</div>
    <div class="time">{{ blogInfo.tags }}</div>
  </div>
</template>

<script>

export default {
  name: 'BlogItem',
  props: {
    blogInfo: Object
  }
}
</script>

<style lang="scss" scoped>
@use "~@/styles/tools/_index.sass" as tools;
.blog-item {
  border-bottom: solid 1px var(--v-theme-color-border);
  padding-bottom: var(--v-theme-padding);
  .blog-main-info {
    cursor: pointer;
    &:hover {
      color: var(--v-theme-color-hover);
    }
    .title {
      @include tools.font-style-title();
    }
  }
}
</style>