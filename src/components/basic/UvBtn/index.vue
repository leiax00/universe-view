<!-- material 风格的按钮 -->
<template>
  <a-button @click="onRipple" class="uv-btn">
    <div ref="mask" class="mask" :style="rippleStyle"></div>
    <slot/>
  </a-button>
</template>

<script>
import colors from '@/utils/colors'
import { hex2Rgba } from '@/utils/colorUtils'

export default {
  name: 'UvBtn',
  props: {
    color: {
      type: String,
      default: colors.grey.lighten3
    },
    bgColor: {
      type: String,
      default: colors.teal.lighten1
    },
    rippleColor: {
      type: String,
      default: colors.grey.darken3
    }
  },
  computed: {
    rippleRgba() {
      return hex2Rgba(this.rippleColor, 0.4)
    }
  },
  data() {
    return {
      rippleStyle: {
        width: '100%',
        height: '100%'
      }
    }
  },
  methods: {
    onRipple(event) {
      const mask = this.$refs.mask
      this.rippleStyle.width = this.rippleStyle.height = Math.max(this.$el.offsetWidth, this.$el.offsetHeight) + 'px'
      let left = event.clientX - this.$el.getBoundingClientRect().left - mask.offsetWidth / 2 + 'px'
      let top = event.clientY - this.$el.getBoundingClientRect().top - mask.offsetHeight / 2 + 'px'
      mask.classList.remove('drop')
      mask.style.left=left
      mask.style.top=top
      setTimeout(function() {
        mask.classList.add('drop')
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes button-ripple {
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(2);
    opacity: 0;
  }
}

.uv-btn {
  background-color: v-bind(bgColor);
  border-color: v-bind(bgColor);
  color: v-bind(color);

  position: relative;
  transition: background-color 200ms;
  cursor: pointer;
  overflow: hidden;

  .mask {
    position: absolute;
    border-radius: 100%;
    //background-color: #C9C6C672;
    background-color: v-bind(rippleRgba);
    transform: scale(0);
    z-index: 1;

    &.drop {
      animation: button-ripple linear 400ms;
    }
  }

  span {
    position: relative;
    z-index: 2;
  }
}

</style>