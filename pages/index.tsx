import Head from 'next/head'
import * as React from 'react'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { css, Theme } from '@emotion/react'

import { MobileStyle, TabletStyle } from '@/styles/mediaQuery'
import Intro from '@/components/intro'

export type TRef = MutableRefObject<any>

const isProd = process.env.NODE_ENV === 'production'

const HomePage: NextPage = () => {
  const refContent: TRef = useRef()
  const refTitle: TRef = useRef()
  const refDesc: TRef = useRef()
  const refButton: TRef = useRef()
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

  return (
    <div css={ContainerCSS} style={{}} ref={refContent}>
      <div css={ContentCSS}>
        <Intro />
        <p className="title" ref={refTitle}>
          HI I&apos;m Yiseul
        </p>
        <p className="desc" ref={refDesc}>
          5년차 프론트엔드 개발자 오이슬입니다 <br />
          숫자와 계산하는 것을 좋아합니다 <br />
          나와 다른 것에 편견이 없어 코딩 스타일이나 성향이 다른 사람과도 함께
          어우러질 줄 압니다 <br />
          일을 잘하는 것은 상대방이 일하기 편하게 해주는 것이라고 생각합니다
        </p>
        <Link
          href={'/projects'}
          className={'go-btn'}
          css={ButtonCSS}
          ref={refButton}
        >
          궁금하면 눌러주세요
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
  min-height: calc(100vh - ${theme.sizes.gnb}px);
  font-size: ${theme.fontSizes.m};
  padding: 0 ${theme.spacings.l}px;
  margin: 0 auto;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.m}px;
  width: 100%;
  height: 100%;
  padding: ${theme.sizes.gnb / 2}px ${theme.spacings.xxl}px ${theme.sizes.gnb}px;
  margin-top: auto;
  margin-bottom: auto;

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
        // font-size: ${theme.fontSizes.hl};
        text-align: center;
      }
      .desc{
        font-size: ${theme.fontSizes.s};
        text-align: center; 
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

  &:before {
    overflow: hidden;
    display: block;
    content: '';
    position: absolute;
    right: 6px;
    top: 50%;
    width: 4px;
    height: 12px;
    transform: translate(100%, -50%);
     background: url(${isProd ? '/pftrobot/icons/arrow_right_dark.svg':'/icons/arrow_right_dark.svg'}) no-repeat 100% 50%;
    background-size: 20px;
    transition: width 0.3s;
  }
  @media (hover: hover) {
    &:hover {
      &:before {
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
