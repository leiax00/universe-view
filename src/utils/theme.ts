import { App } from 'vue'

class Responsive {
  public type: string
  public min: number
  public max: number
  public vars: Map<string, string>

  constructor(type, opts) {
    this.type = type
    this.min = opts.min
    this.max = opts.max
    this.vars = opts.vars
  }
}

export class Theme {
  public name: string
  public vars?: Map<string, string>
  public respProps?: Map<string, Responsive> = new Map<string, Responsive>()
  public sameNameThemeList?: Array<Theme>
  public classList: Array<string> = new Array<string>()

  constructor(options) {
    this.name = options.name
    this.vars = options.vars
    this.parseRespProps(options.responsive)
  }

  private parseRespProps(responsive: any): void {
    if (responsive) {
      Object.entries(responsive).forEach(([ k, v ]) => {
        this.respProps.set(k, new Responsive(k, v))
      })
    }
  }

  private parseVars(vars, name) {
    const classWithObj = {}
    if (vars) {
      this.classList.push(`uv-theme-${name}`)
      classWithObj[`uv-theme-${this.name}`] = {}
      classWithObj[':root'] = {}
    }
  }

  private imposeVars(vars, name, dst) {
    if (vars) {
      this.classList.push(`uv-theme-${name}`)
      dst[`uv-theme-${name}`] = {}
      Object.keys(vars).forEach(k => {
        if (k.startsWith('--global')) {
          dst[':root'][k] = vars[k]
        } else {
          dst[`uv-theme-${name}`][k] = vars[k]
        }
      })
    }
  }

  get cssStyle(): string {
    const classWithObj = { ':root': {}}
    this.imposeVars(this.vars, this.name, classWithObj)
    this.respProps.forEach((v, k) => {
      this.imposeVars(v.vars, k, classWithObj)
    })

    return Object.entries(classWithObj).map(([ k, v ]) => {

      return `${k === ':root' ? ':root' : '.' + k} {\n${
        Object.entries(v).map(([ k1, v1 ]) => `  ${k1}: ${v1};`).join('\n')
      }\n}`
    }).join('\n\n')
  }

  // todo: 解析当前选中主题, 将主题进行合并(也许会存在多主题合并的情况)
  public parseCurrent(): Theme {
    return this
  }
}

export class ThemeManager {
  private static default = 'default'
  private elId = 'uv-theme-stylesheet'
  public current: Theme
  themeList: Map<string, Theme>
  private vueMeta = null as any | null
  private cspNonce: string
  public styleEl?: HTMLStyleElement
  public cacheTheme: Map<string, string> = new Map()

  constructor(ctx) {
    this.themeList = this.list2Map(ctx.themeList)
    this.current = ctx.current || this.themeList.get(ThemeManager.default)
  }

  public fillCtx(ctx): ThemeManager {
    this.mergeTheme(ctx.themeList)
    this.current = ctx.current || this.themeList.get(ThemeManager.default)
    this.cacheTheme = new Map<string, string>()
    return this
  }

  private mergeTheme(list: Array<any>) {
    const newThemeMap = this.list2Map(list)
    if (!newThemeMap) {
      return
    }
    newThemeMap.forEach((v, k) => {
      if (this.themeList.has(k)) {
        this.themeList.get(k).sameNameThemeList.push(v)
      } else {
        this.themeList.set(k, v)
      }
    })
  }

  private list2Map(list: Array<any>): Map<string, Theme> {
    const tmp = new Map<string, Theme>()
    if (list) {
      list.forEach(item => tmp.set(item.name, new Theme(item)))
    }
    return tmp
  }

  public getClass(): Array<string> {
    return this.current ? this.current.classList : []
  }

  public initWith(root: App, ssrContext?: any): ThemeManager {
    if ((root as any).$meta) {
      this.initVueMeta(root)
    } else if (ssrContext) {
      this.initSSR(ssrContext)
    }
    return this
  }

  public applyTheme(themeName?: string): void {
    // if (this.disabled) return this.clearCss()
    this.current = this.themeList.get(themeName) || this.themeList.get(ThemeManager.default)
    this.css = this.generatedStyles
  }

  public clearCss(): void {
    this.css = ''
  }

  // When setting css, check for element and apply new values
  /* eslint-disable-next-line accessor-pairs */
  set css(val: string) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23()
      }
      return
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val)
  }

  // Check for existence of style element
  private checkOrCreateStyleElement(): boolean {
    this.styleEl = document.getElementById(this.elId) as HTMLStyleElement

    /* istanbul ignore next */
    if (this.styleEl) return true

    this.genStyleElement() // If doesn't have it, create it

    return Boolean(this.styleEl)
  }

  private genStyleElement(): void {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return

    /* istanbul ignore next */
    this.styleEl = document.createElement('style')
    this.styleEl.type = 'text/css'
    this.styleEl.id = this.elId

    if (this.cspNonce) {
      this.styleEl.setAttribute('nonce', this.cspNonce)
    }

    document.head.appendChild(this.styleEl)
  }

  private initVueMeta(root: any) {
    this.vueMeta = root.$meta()
    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23()
      })
      return
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo'
    const metaInfo = root.$options[metaKeyName] || {}

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || []

      const vuetifyStylesheet = metaInfo.style.find((s: any) => s.id === this.elId)

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: this.elId,
          nonce: this.cspNonce
        })
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles
      }

      return metaInfo
    }
  }

  private initSSR(ssrContext?: any) {
    // SSR
    const nonce = this.cspNonce ? ` nonce="${this.cspNonce}"` : ''
    ssrContext.head = ssrContext.head || ''
    ssrContext.head += '<style type="text/css" id=' + this.elId + `${nonce}>${this.generatedStyles}</style>`
  }

  private get isVueMeta23(): boolean {
    return typeof this.vueMeta.addApp === 'function'
  }

  private applyVueMeta23() {
    const { set } = this.vueMeta.addApp('vuetify')

    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: this.elId,
        nonce: this.cspNonce,
      }],
    })
  }

  get generatedStyles(): string {
    if (this.current) {
      if (this.cacheTheme.has(this.current.name)) {
        return this.cacheTheme.get(this.current.name)
      }

      const css = this.current.parseCurrent().cssStyle
      this.cacheTheme.set(this.current.name, css)
      return css
    }
    return ''
  }

}

export const themeManager = new ThemeManager({})