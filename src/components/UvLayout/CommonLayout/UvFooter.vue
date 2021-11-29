<template>
  <a-row class="uv-footer">
    <a-col :span="24">
      <a class="nav-item" href="/"><img :src="logoUrl" alt="Simple Zero" height="28"></a>
    </a-col>
    <a-col :span="24">
      <uv-icon icon-class="copyright" />
      <span class="footer-text">{{ `${new Date().getFullYear()} ${copyright}` }}</span>
    </a-col>
    <a-col :span="24">
      <uv-icon icon-class="copyright" />
      <span class="footer-text">{{ selfCopyright }}</span>
    </a-col>
    <a-col :span="24">
      <div v-if="runInfo !== ''">
        <uv-icon icon-class="aixin-left" />
        <span class="footer-text">{{ runInfo }}</span>
        <uv-icon icon-class="aixin-right" />
      </div>
    </a-col>
    <a-col v-if="record" :span="24">
      <uv-icon icon-class="aixin-left" />
      <a href="https://beian.miit.gov.cn/" target="_blank">{{ record }}</a>
      <uv-icon icon-class="aixin-right" />
    </a-col>
  </a-row>
</template>

<script>

import UvIcon from '@/components/basic/UvIcon'
import timeUtils from '@/utils/timeUtils'
import constObj from '@/utils/constObj'
import { startInterval } from '@/utils'
export default {
  name: 'UvFooter',
  components: { UvIcon },
  computed: {
    record() {
      return this.$store.getters.settings.app.copyright || ''
    }
  },
  data: function() {
    return {
      copyright: this.$t('footer.copyright'),
      selfCopyright: this.$t('footer.statement'),
      runInfo: '',
      thanks: this.$t('footer.thanks'),
    }
  },
  inject: [ 'logoUrl' ],
  created() {
    this.refreshRunInfo()
  },
  methods: {
    refreshRunInfo: function() {
      const self = this
      startInterval(()=> {
        const diff = timeUtils.calcTimeDiff(self.$store.getters.settings.app.firstRun)
        diff.time = self.$store.getters.settings.app.firstRun.split(/[\vt]/ig)[0]
        self.runInfo = self.$t('footer.runInfo', diff)
      }, constObj.TIME_UNIT.ONE_SECOND)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>