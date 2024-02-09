import { css, SerializedStyles } from '@emotion/react'

export const breakPoints = {
  desktop: 1920,
  tablet: 980,
  mobile: 767,
}

export const TabletStyle = (style: SerializedStyles) => css`
  @media all and (max-width: ${breakPoints.tablet}px) {
    ${style}
  }
`

export const MobileStyle = (style: SerializedStyles) => css`
  @media all and (max-width: ${breakPoints.mobile}px) {
    ${style}
  }
`
