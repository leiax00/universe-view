<template>
  <div class="layout-main">
    <common-layout />
    <little-cute />
  </div>
</template>

<script type="text/tsx">
import CommonLayout from './CommonLayout'
import LittleCute from '../LittleCute'
import Sidecar from 'gitter-sidecar/dist/sidecar-module'
export default {
  name: 'UvLayout',
  components: { LittleCute, CommonLayout },
  setup() {
    new Sidecar({
      room: 'exploding-universe/universe'
    })
  }
}
</script>

<style scoped>

</style>