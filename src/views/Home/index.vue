<template>
  <a-row type="flex" :gutter="48" class="home-main">
    <a-col :span="16">
      <blog-list />
    </a-col>
    <a-col flex="2px">
      <a-divider type="vertical" class="divider"/>
    </a-col>
    <a-col :span="7" class="right-info">
      <div class="plan-list">
        计划列表
      </div>
      <div class="about-me">
        关于我
      </div>
      <div class="recent-update">
        最近更新
      </div>
      <div class="tag-filter">
        tag过滤
      </div>
    </a-col>
  </a-row>
</template>

<script>
import BlogList from '@/components/business/Blog/BlogList'
export default {
  name: 'Home',
  components: { BlogList },
  methods: {
    onClick: function(e) {
      this.$store.commit('uiCtl/CHANGE_SIDE_SHOW')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-main {
  .divider {
    background-color: var(--v-theme-color-border);
    height: 100%;
  }
  .right-info {
    &>div+div {
      margin-top: var(--v-theme-margin);
    }
  }
}
</style>