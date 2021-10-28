<template>
  <div class="home-main">
    Home - main
    <button type="button" @click="onClick">点击我</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onClick: function(e) {
      this.$store.commit('uiCtl/CHANGE_SIDE_SHOW');
    }
  }
};
</script>

<style scoped>

</style>