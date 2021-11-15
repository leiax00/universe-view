<template>
  <uv-title-main>
    <article-title v-if="headerCtl.showArticle"/>
  </uv-title-main>
</template>

<script>
import UvTitleMain from '@/components/basic/UvTitle/UvTitleMain'
import ArticleTitle from '@/components/basic/UvTitle/ArticleTitle'
export default {
  name: 'UvTitle',
  components: { ArticleTitle, UvTitleMain },
  computed: {
    headerCtl() {
      return this.$store.getters['app/headerCtl']
    }
  }
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