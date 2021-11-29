<!-- material 风格的按钮 -->
<template>
  <a-button @click="onRipple" class="uv-btn">
    <div ref="mask" class="mask" :style="rippleStyle"></div>
    <slot/>
  </a-button>
</template>

<script>
import { ColorObj } from '@/components/basic/UvBtn/uvBtn'

export default {
  name: 'UvBtn',
  props: {
    colorOpts: {
      type: ColorObj,
      default: () => new ColorObj()
    },
    width: {
      type: [ String, Number ],
      default: 150
    }
  },
  data() {
    return {
      rippleStyle: {
        width: `${this.width}px`,
        height: `${this.width}px`
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
      mask.style.left = left
      mask.style.top = top
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

.uv-btn, .uv-btn:hover, .uv-btn:focus {
  background-color: v-bind('colorOpts.bgc');
  border-color: v-bind('colorOpts.bgc');
  color: v-bind('colorOpts.color');
  width: v-bind('rippleStyle.width');
  .mask {
    //background-color: #C9C6C672;
    background-color: v-bind('colorOpts.rgbaRippleC');
  }
}

.uv-btn {
  position: relative;
  transition: background-color 200ms;
  cursor: pointer;
  overflow: hidden;

  .mask {
    position: absolute;
    border-radius: 100%;
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