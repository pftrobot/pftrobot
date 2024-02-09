export type TTheme = {
  layout: {
    contents: number
  }
  sizes: {
    gnb: number
  }
  fontSizes: {
    xxxxs: string
    xxxs: string
    xxs: string
    xs: string
    s: string
    hl: string
    m: string
    l: string
    xl: string
    xxl: string
  }
  fontWeights: {
    bold: number
  }
  colors: {
    white: string
    black: string
    gray50: string
    gray100: string
    gray400: string
    gray500: string
    gray700: string
    gray750: string
    gray780: string
    gray800: string
    gray900: string
  }
  spacings: {
    xxxxxxs: number
    xxxxxs: number
    xxxxs: number
    xxxs: number
    xxs: number
    xs: number
    s: number // 16
    m: number //24
    hxl: number //32
    l: number
    xl: number //64
    xxl: number
    xxxl: number
  }
}
const theme: TTheme = {
  layout: {
    contents: 1200,
  },
  sizes: {
    gnb: 72,
  },
  fontSizes: {
    xxxxs: '10px',
    xxxs: '12px',
    xxs: '14px',
    xs: '15px',
    s: '16px',
    hl: '18px',
    m: '20px',
    l: '36px',
    xl: '48px',
    xxl: '56px',
  },
  fontWeights: {
    bold: 700,
  },
  colors: {
    white: '#fff',
    black: '#111',
    gray50: '#f1f1f1',
    gray100: '#eeeeee',
    gray400: '#9f9f9f',
    gray500: '',
    gray700: '#727272',
    gray750: '#666666',
    gray780: '#333333',
    gray800: '#2a2a2a',
    gray900: '#191919',
  },
  spacings: {
    xxxxxxs: 2,
    xxxxxs: 4,
    xxxxs: 6,
    xxxs: 8,
    xxs: 12,
    xs: 14,
    s: 16,
    m: 24,
    hxl: 32,
    l: 36,
    xl: 64,
    xxl: 72,
    xxxl: 96,
  },
}

export default theme
