<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>

export default {
  name: 'UvIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#sz-${this.iconClass}`
    },
    svgSrc() {
      return this.$store.getters.settings.app.srcSvg
    }
  },
  mounted() {
    let element = document.createElement('script')
    element.src = this.svgSrc
    document.body.appendChild(element)
  },
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>