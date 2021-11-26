import { hex2Rgba } from '@/utils/colorUtils'
import colors from '@/utils/colors'

export class ColorObj {
  color: string = colors.grey.lighten3
  bgc: string = colors.teal.lighten1
  rippleC: string = colors.grey.darken3
  opacity = 0.4
  constructor(color: string=colors.grey.lighten3,
    bgc:string=colors.teal.lighten1,
    rippleC: string=colors.grey.darken3) {
    this.color = color
    this.bgc = bgc
    this.rippleC = rippleC
  }

  get rgbaC() {
    return hex2Rgba(this.color, this.opacity)
  }

  get rgbaBgc() {
    return hex2Rgba(this.bgc, this.opacity)
  }

  get rgbaRippleC() {
    return hex2Rgba(this.rippleC, this.opacity)
  }
}