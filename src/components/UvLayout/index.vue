<template>
  <div class="layout-main">
    <common-layout />
    <little-cute />
    <div class="ctl-bar">
      <uv-icon v-if="!isStart" icon-class="toTop" class="icon-resize" @click="toTop" />
    </div>
  </div>
</template>

<script>
import Sidecar from 'gitter-sidecar/dist/sidecar-module'
import animateUtils from '../../utils/animateUtils'
import CommonLayout from '@/components/UvLayout/CommonLayout'
import LittleCute from '@/components/LittleCute'
import UvIcon from '@/components/basic/UvIcon'
export default {
  name: 'UvLayout',
  components: { UvIcon, LittleCute, CommonLayout },
  computed: {
    isStart() {
      return false
    }
  },
  setup() {
    new Sidecar({
      room: 'exploding-universe/universe'
    })
  },
  methods: {
    toTop() {
      animateUtils.animate(document.documentElement, { scrollTop: 0 }, 10, .1)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-main {
  .ctl-bar {
    width: 5.25rem;
    position: fixed;
    right: 10px;
    text-align: center;
    bottom: 2rem;
    .icon-resize {
      cursor: pointer;
      height: 2rem;
      width: 2rem;
    }
  }
}

</style>