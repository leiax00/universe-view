export default {
  animate(
    componentObj, target, interval, sp, callback
  ) {
    clearInterval(componentObj.timer)
    function getStyle(obj, item) {
      if (item === 'scrollTop') {
        return obj.scrollTop
      }
      if (obj.currentStyle) {
        return obj.currentStyle[item] //针对ie
      } else {
        return document.defaultView.getComputedStyle(obj, null)[item]
      }
    }
    componentObj.timer = setInterval(function() {
      let flag = true
      for (let item in target) {

        let icur = 0
        if (item === 'opacity') {
          icur = Math.round(parseFloat(getStyle(componentObj, item))*100)
        } else {
          icur = parseInt(getStyle(componentObj, item))
        }
        let speed = (target[item] - icur) * sp
        speed = speed > 0 ? Math.ceil(speed): Math.floor(speed)
        if (icur !== target[item]) {
          flag = false
        }
        if (item === 'opacity') {
          componentObj.style.filter = `alpha(opacity: ${icur + speed})`
          componentObj.style.opacity = (icur + speed)/100
        } else if (item === 'scrollTop') {
          componentObj.scrollTop = icur + speed
        } else {
          componentObj.style[item] = icur + speed + 'px'
        }
      }

      if (flag) {
        clearInterval(componentObj.timer)
        if (callback) {
          callback()
        }
      }
    }, interval)
  },
  algorithm: {
    linear() {
      return 0
    }
  }
}