<template>
  <div class="blog-list">
    <blog-item v-for="(item, index) in blogList" :key="index" :blog-info="item" />
  </div>
</template>

<script>
import server from '@/components/business/Blog/server'
import BlogItem from '@/components/business/Blog/BlogItem'

export default {
  name: 'BlogList',
  components: { BlogItem },
  setup() {
    const blogList = server.getBlogList(server.pageInfo.value)
    return {
      blogList
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  &>div+div {
    margin-top: var(--v-theme-margin);
  }
}
</style>