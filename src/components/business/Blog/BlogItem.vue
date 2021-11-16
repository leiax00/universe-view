<template>
  <div class="blog-item">
    <div class="blog-main-info" @mouseover="changeColor" @mouseout="changeColor">
      <h2
        class="title text-h4"
        :class="{'text-pink-lighten-2': needChangeColor}"
      >
        {{ blogInfo.title }}
      </h2>

      <h4
        class="sub-title text-subtitle-1"
        :class="{'text-pink-lighten-2': needChangeColor}"
      >
        {{ blogInfo.subTitle }}
      </h4>

      <div
        class="summary"
        :class="{'text-pink-lighten-2': needChangeColor, 'text-grey-darken-1': !needChangeColor}"
      >
        {{ blogInfo.summary }}
      </div>
    </div>
    <div class="id-card text-grey-darken-2">
      {{ $t('blog.ownerInfo', { author: blogInfo.author, time: formatTime(blogInfo.time)}) }}
    </div>
    <div class="time">{{ blogInfo.tags }}</div>
  </div>
</template>

<script>


import timeUtils from '@/utils/timeUtils'

export default {
  name: 'BlogItem',
  props: {
    blogInfo: Object
  },
  data() {
    return {
      needChangeColor: false
    }
  },
  methods: {
    changeColor() {
      this.needChangeColor = !this.needChangeColor
    },
    formatTime(time) {
      return timeUtils.formatTime(time)
    }
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
  }
  .summary, .id-card {
    font-style: italic;
  }
}
</style>