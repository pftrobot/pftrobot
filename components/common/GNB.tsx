import * as React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useThemeStore } from '@/lib/store'
import dragon from '@/public/icons/dragon.svg'
import { css, Theme } from '@emotion/react'
import { MobileStyle } from '@/styles/mediaQuery'

const GNB = () => {
  const { theme, setTheme } = useThemeStore()
  useEffect(() => {
    setTheme(window.__darkMode__ ? 'dark' : 'light')
  }, [setTheme])

  return (
    <div className={'gnb'} css={GnbCSS}>
      <Link href={'/'} className="logo-area">
        <Image src={dragon} alt={'dragon image'} />
      </Link>
      <div className="menu">
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contact'}>Contact</Link>
        <button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          다크모드<span></span>
        </button>
      </div>
    </div>
  )
}

export default GNB

const GnbCSS = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.layout.contents}px;
  height: ${theme.sizes.gnb}px;
  padding: 0 ${theme.spacings.l}px;
  margin: 0 auto;

  .logo-area {
    display: block;
    max-width: 36px;
    padding: ${theme.spacings.xxxs}px;
    margin-left: -${theme.spacings.xxxs}px;
    box-sizing: content-box;

    img {
      width: 100%;
      height: auto;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: ${theme.spacings.s}px;

    a,
    button {
      flex: 1;
    }
    a {
      font-size: ${theme.fontSizes.s};
      font-weight: 600;
      padding: ${theme.spacings.xxxs}px;
      ${MobileStyle(
        css(`
          font-size: ${theme.fontSizes.xxs}; 
        `)
      )}
    }
    button {
      position: relative;
      width: 24px;
      height: 24px;
      font-size: 0;
      border: solid 2px #111;
      border-radius: 50%;
      background-color: ${theme.colors.white};

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        z-index: 1;
        transform: translate(-50%, -50%);
      }

      span {
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        &:after {
          display: block;
          content: '';
          width: 50%;
          height: 100%;
          background-color: ${theme.colors.black};

          margin-left: auto;
        }
      }
    }
  }
`
