<template>
  <a-row class="uv-header" type="flex" justify="center">
    <a-col class="title-detail">
      <uv-title>
        <article-title v-if="headerCtl.showArticle"/>
      </uv-title>
    </a-col>
    <a-col :span="24">
      <wave />
    </a-col>
  </a-row>
</template>

<script>

import UvTitle from '@/components/basic/UvTitle'
import ArticleTitle from '@/components/basic/UvTitle/ArticleTitle'
import Wave from '@/components/basic/animations/Wave'

export default {
  name: 'UvHeader',
  components: { Wave, ArticleTitle, UvTitle },
  computed: {
    headers() {
      return this.$store.getters.settings.header.menu
    },
    headerCtl() {
      return this.$store.getters['app/headerCtl']
    }
  }

}
</script>

<style lang="scss" scoped>
.uv-header {
  background-attachment: scroll;
  background: var(--v-theme-header-image) no-repeat center center;
  background-size: cover;
  .title-detail {

  }
}
</style>