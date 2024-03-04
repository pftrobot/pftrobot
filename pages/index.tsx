import * as React from 'react'
import { ReactNode, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { css, Theme } from '@emotion/react'

import { MobileStyle, TabletStyle } from '@/styles/mediaQuery'
import Intro from '@/components/intro'
import { useThemeStore } from '@/lib/store'
import { randomNumber } from '@/lib/utils'

const HomePage: NextPage = () => {
  const { theme } = useThemeStore()
  const refContent = useRef<HTMLDivElement>(null)
  const refTitle = useRef<HTMLParagraphElement>(null)
  const refDesc = useRef<HTMLParagraphElement>(null)
  const refButton = useRef<HTMLAnchorElement>(null)
  useGSAP(() => {
    const t0 = gsap.timeline()
    t0.set(refContent.current, {
      alpha: 0,
    })

    t0.set('.gnb', {
      y: '-80px',
    })

    t0.set([refTitle.current, refDesc.current, refButton.current], {
      y: '80px',
      alpha: 0,
    })
    t0.to(
      refContent.current,
      {
        duration: 0.8,
        alpha: 1,
      },
      0
    )
  })

  const setDrops = (): ReactNode => {
    const currentHour = new Date().getHours()
    let dropLength

    if (currentHour <= 3) dropLength = randomNumber(20, 30)
    else if (currentHour >= 6 && currentHour < 19) dropLength = 6
    else dropLength = 12

    const items = [...Array(dropLength)].map(() => 0)

    return items.map((item, itemIdx) => (
      <div
        className="line"
        style={{ marginRight: randomNumber(10, 90) + '%' }}
        key={`drop-${itemIdx}`}
      >
        <span style={{ animationDelay: 2 + 1.5 * itemIdx + 's' }}></span>
      </div>
    ))
  }

  return (
    <div css={ContainerCSS} style={{}} ref={refContent}>
      <div className="lines">{setDrops()}</div>
      <div css={ContentCSS}>
        <Intro />
        <p className="title" ref={refTitle}>
          HI I&apos;m Yiseul
        </p>
        <p className="desc" ref={refDesc}>
          3년차 프론트엔드 개발자 오이슬입니다 <br />
          숫자와 계산하는 것을 좋아합니다 <br />
          나와 다른 것에 편견이 없어 코딩 스타일이나 성향이 다른 사람과도 함께
          어우러질 줄 압니다 <br />
          일하기 편하게 해주는 것이 일을 잘 하는 것이라고 생각합니다
        </p>
        <Link
          href={'/projects'}
          className={'go-btn'}
          css={ButtonCSS}
          ref={refButton}
        >
          궁금하다면 눌러주세요
          <div className="svg-box">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1280.000000pt"
              height="640.000000pt"
              viewBox="0 0 1280.000000 640.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
                fill={theme === 'dark' ? '#333' : '#fff'}
                stroke="none"
              >
                <path
                  d="M9280 5934 c-106 -21 -223 -80 -293 -150 -99 -97 -148 -196 -168
-336 -10 -72 -9 -97 5 -164 22 -108 75 -212 144 -282 33 -33 391 -297 851
-627 l794 -570 -5084 -5 c-4763 -5 -5087 -6 -5132 -22 -146 -52 -265 -152
-330 -275 -114 -217 -77 -472 93 -644 70 -71 126 -108 217 -142 l58 -22 5078
-5 5078 -5 -752 -615 c-414 -338 -776 -638 -804 -667 -29 -29 -68 -84 -89
-125 -112 -224 -73 -470 105 -649 104 -105 233 -159 382 -159 99 0 186 22 270
68 70 39 2847 2303 2942 2399 160 162 199 422 93 633 -46 94 -119 163 -324
311 -1086 782 -2701 1940 -2747 1970 -83 54 -166 80 -272 84 -49 2 -101 1
-115 -1z"
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage

export const ContainerCSS = (theme: Theme) => css`
  opacity: 0;
  display: flex;
  flex-direction: column;
  max-width: ${theme.layout.contents}px;
  min-height: calc(100vh - ${theme.sizes.gnb * 2}px);
  font-size: ${theme.fontSizes.m};
  padding: 0 ${theme.spacings.l}px;
  margin: 0 auto;

  .lines {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    .line {
      opacity: 0.2;
      overflow: hidden;
      position: absolute;
      width: 2px;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      margin-left: auto;
      transform: rotate(-30deg);

      span {
        display: block;
        position: absolute;
        height: 72px;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          ${theme.colors.white} 75%,
          ${theme.colors.white} 100%
        );
        animation: drop 8s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
      }
    }
  }

  @keyframes drop {
    0% {
      top: -20%;
    }
    100% {
      top: 150%;
    }
  }

  ${TabletStyle(css`
    max-width: 100%;
  `)}

  ${MobileStyle(
    css(`
      font-size: ${theme.fontSizes.s}; 
      padding: 0 ${theme.spacings.s}px;
  `)
  )}
`

const ContentCSS = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.m}px;
  width: 100%;
  height: 100%;
  padding: ${theme.sizes.gnb / 2}px ${theme.spacings.xxl}px ${theme.sizes.gnb}px;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 1;

  .title {
    font-size: ${theme.fontSizes.l};
    font-weight: 700;
  }

  .desc {
    font-size: ${theme.fontSizes.s};
    line-height: 1.3;
  }

  ${MobileStyle(
    css(`
      align-items: center;
      padding-left: 0;
      padding-right: 0;
      
      .title{
        text-align: center;
      }
      .desc{ 
        max-width: 300px;
        font-size: ${theme.fontSizes.s};
        text-align: center;
        word-break: keep-all;
      }
      .go-btn{
        margin-top: 8px;
      }
  `)
  )}
`

export const ButtonCSS = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  font-size: ${theme.fontSizes.s};
  font-weight: 500;
  padding: ${theme.spacings.xxs}px ${theme.spacings.s}px;
  margin-top: ${theme.spacings.m}px;
  margin-left: -${theme.spacings.s}px;

  .svg-box {
    overflow: hidden;
    position: absolute;
    right: 6px;
    top: 50%;
    width: 4px;
    height: 12px;
    transform: translate(100%, -50%);
    transition: width 0.3s;

    svg {
      position: absolute;
      top: 50%;
      right: 0;
      width: 20px;
      height: auto;
      transform: translateY(-50%);
    }
  }
  @media (hover: hover) {
    &:hover {
      .svg-box {
        width: 20px;
      }
    }
  }

  ${MobileStyle(
    css(`
          font-size: ${theme.fontSizes.xxs};
          margin-left: 0;
          margin: 0 auto; 
      `)
  )}
`
