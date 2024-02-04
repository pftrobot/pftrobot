import '@emotion/react'

import theme from '.'

type ExtendedTheme = typeof theme

declare module '@emotion/react' {
  // @emotion의 경우
  interface Theme extends ExtendedTheme {}
}
