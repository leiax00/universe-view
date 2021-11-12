<template>
  <div class="title-detail-wrapper">
    <slot>
      <h1>Simple Zero</h1>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UvTitle',
  setup(props, context) {
    console.log(context.slots)
  }
}
</script>

<style lang="scss" scoped>
.title-detail-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 10rem 0;

}
</style>