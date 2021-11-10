<template>
  <div class="uv-footer">
    copyright
  </div>
</template>

<script>

export default {
  name: 'UvFooter',
  data: function() {
    return {
      copyright: 'Lei.AoX Powered by JcTec',
      selfCopyright: '版权说明：[本网站所有内容均收集于互联网或自己创作,方便于网友与自己学习交流，如有侵权，请留言，立即处理]',
      runInfo: '',
      thanks: '感谢小伙伴的光临!',
    }
  },
  created() {
    this.refreshRunInfo()
  },
  methods: {
    refreshRunInfo: function() {
      // todo
    },
  },
}
</script>
<style lang="scss" scoped>

</style>