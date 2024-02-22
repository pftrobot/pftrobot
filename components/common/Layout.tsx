import { ReactNode } from 'react'

import { css, Theme } from '@emotion/react'
import GNB from '@/components/common/GNB'

const Layout = (props: { children: ReactNode }) => {
  return (
    <div css={LayoutCSS}>
      <GNB />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout

const LayoutCSS = (theme: Theme) => css`
  min-height: 100%;

  main {
    min-height: calc(100vh - ${theme.sizes.gnb}px);
  }
`
