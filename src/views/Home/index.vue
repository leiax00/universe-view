<template>
  <div class="home-main">
    Home - main
    <v-btn block>
      Block Button
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onClick: function(e) {
      this.$store.commit('uiCtl/CHANGE_SIDE_SHOW')
    }
  }
}
</script>

<style scoped>

</style>