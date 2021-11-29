<template>
  <div class="blog-list">
    <blog-item v-for="(item, index) in blogList" :key="index" :blog-info="item"/>
    <a-row v-if="blogList.length !== 0" type="flex" justify="space-between" class="pagination-group">
      <a-col class="prev-page">
        <uv-btn class="page-btn">PREV PAGE</uv-btn>
      </a-col>
      <a-col class="next-page">
        <uv-btn class="page-btn">NEXT PAGE</uv-btn>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import server from '@/components/business/Blog/server'
import BlogItem from '@/components/business/Blog/BlogItem'
import UvBtn from '@/components/basic/UvBtn'

export default {
  name: 'BlogList',
  components: { UvBtn, BlogItem },
  setup() {
    const blogList = server.getBlogList(server.pageInfo.value)
    return {
      blogList
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  & > div + div {
    margin-top: var(--v-theme-margin);
  }
}
</style>