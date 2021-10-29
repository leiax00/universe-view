// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.css'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify/dist/vuetify'

const self: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#2f2f2f',
    surface: '#5d5656',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {}
}


export default createVuetify({
  // display: {
  //   mobileBreakpoint: 'sm',
  //   thresholds: {
  //     xs: 0,
  //     sm: 360,
  //     md: 540,
  //     lg: 800,
  //     xl: 1280,
  //   },
  // },
  theme: {
    defaultTheme: 'self',
    themes: {
      self
    }
  }
})