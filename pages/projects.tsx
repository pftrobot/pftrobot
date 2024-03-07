import { Fragment, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from '@/components/common/Image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { css, Theme } from '@emotion/react'
import Vimeo from '@u-wave/react-vimeo'
import { ButtonCSS, ContainerCSS } from './index'
import { MobileStyle, TabletStyle } from '@/styles/mediaQuery'

import { lockScroll, unlockScroll, useMounted } from '@/lib/utils'
import { useThemeStore } from '@/lib/store'

const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PROD_ASSET_PREFIX
    : ''

interface IMedia {
  type: string
  source: string
  ratio?: string
}

interface IProject {
  title: string
  summary: string
  desc: string
  desc2?: string
  tech: string[]
  media: IMedia[]
  url?: string
}

const ProjectPage: NextPage = () => {
  const { theme } = useThemeStore()
  const isMounted = useMounted()
  const [currentProject, setCurrentProject] = useState<IProject | null>(null)
  const refContent = useRef<HTMLDivElement>(null)
  const refTitle = useRef<HTMLParagraphElement>(null)
  const refList = useRef<HTMLDivElement>(null)
  const refButton = useRef<HTMLAnchorElement>(null)
  const refModalWrap = useRef<HTMLDivElement>(null)
  const refModal = useRef<HTMLDivElement>(null)
  const projectList: IProject[] = [
    {
      title: 'Solvook',
      summary: "디지털 교재 플랫폼 '쏠북'",
      desc: '선생님과 학생들이 디지털 문제자료를 저작권 걱정 없이 거래할 수 있는 마켓 플랫폼',
      desc2:
        '검색필터 페이지를 전면 리뉴얼하는 데에 코어 로직을 작업하였고, 기존 상태관리 라이브러리인 mobX를 zustand로 변경 도입하였습니다. cs 불편사항 개선을 통해 상세페이지 전환율이 18% 증가했습니다.',
      tech: [
        'React',
        'NextJs',
        'Typescript',
        'zustand',
        'react-query',
        'mobX',
        'styled-components',
        'mixpanel',
        'antd',
      ],
      media: [
        {
          type: 'image',
          source: '/assets/solvook.jpg',
        },
        {
          type: 'video',
          ratio: '65.03',
          source: '914699761',
        },
      ],
      url: 'https://www.solvook.com',
    },
    {
      title: 'ActionMan',
      summary: '방송 송출용 데스크탑 앱 ActionMan',
      desc: '버츄얼 유투버들이 특수장비 없이 휴대폰만으로 방송을 할 수 있는 앱',
      desc2:
        'Electron과 Socket 통신 기반으로, 백엔드, iOS, 안드로이드, 유니티 팀과 협업하여 데스크탑 앱을 개발하였습니다.',
      tech: [
        'React',
        'Electron',
        'Typescript',
        'mobX',
        'styled-components',
        'amplitude',
        'antd',
        'storybook',
      ],
      media: [
        {
          type: 'image',
          source: '/assets/actionman.jpg',
        },
        {
          ratio: '50.42',
          type: 'video',
          source: '914699666',
        },
      ],
      url: 'https://www.actionman.ai/',
    },
    {
      title: 'Solvook Note',
      summary: '디지털 자료로 수업 가능한 환경을 제공하는 서비스',
      desc: "PdfTron의 WebViewer 기반으로 canvas를 활용하여 필기서비스 '노트' 제작",
      tech: ['PdfTron', 'React', 'NextJs', 'styled-components', 'mixpanel'],
      media: [
        {
          type: 'video',
          ratio: '87.21',
          source: '914699740',
        },
      ],
    },
    {
      title: 'Dashboard',
      summary: '쏠북 자료에 대해 법적조치를 할 수 있는 Admin',
      desc: '신탁사, 법률대리인 등 자교 저작권에 대한 법적 조치에 대한 활동을 할 수 있는 대시보드',
      desc2:
        'ASW(S3, cloudFront), github action으로 배포 환경을 구성하였습니다.',
      tech: [
        'React',
        'NextJS',
        'Typescript',
        'Zustand',
        'React-query',
        'emotion',
      ],
      media: [
        {
          type: 'image',
          source: '/assets/dashboard.jpg',
        },
        {
          type: 'video',
          ratio: '62.5',
          source: '914699708',
        },
      ],
      url: 'https://dashboard.solvook.com/',
    },
    {
      title: 'Galaxy S22 Metabus',
      summary: 'Galaxy S22 시리즈를 엿볼 수 있는 메타버스 체험존',
      desc: 'Galaxy S22 시리즈를 엿볼 수 있는 메타버스 체험존',
      desc2:
        '모션팀, 유니티 팀과 협업하여 webGL 기반의 맵에서 인터랙티브 채팅, 360 제품 체험 등을 구현하였습니다.',
      tech: ['WebGL', 'JS'],
      media: [
        {
          type: 'video',
          ratio: '179.17',
          source: '914699457',
        },
        {
          type: 'video',
          ratio: '179.17',
          source: '914699486',
        },
      ],
    },
    {
      title: 'HankookTire',
      summary: '한국타이어 브랜드 특화페이지',
      desc: '한국타이어 브랜드 특화페이지',
      desc2:
        'ScrollTrigger를 사용하여 이미지가 최대 2천 장인 브랜드 페이지에 스크롤 애니메이션을 구현하였습니다.',
      tech: ['GSAP', 'scrollTrigger'],
      media: [
        {
          type: 'video',
          ratio: '54.61',
          source: '914699511',
        },
      ],
      url: 'https://www.hankooktire.com/global/ko/tires/ventus.html',
    },
    {
      title: 'BandaiNamco Mall',
      summary: '반다이남코코리아 쇼핑몰 구축',
      desc: '반다이남코코리아 쇼핑몰 구축',
      desc2:
        '적응형 사이트로 세 개의 개발사와 협업하여 쇼핑몰에 필요한 UI를 작업했고, 어플리케이션화를 위한 지원을 진행했습니다.',
      tech: ['HTML5', 'CSS3', 'JS'],
      media: [
        {
          type: 'image',
          source: '/assets/bandai.jpg',
        },
      ],
      url: 'https://www.bnkrmall.co.kr/',
    },
    {
      title: 'SK Magic 360',
      summary: 'SK 매직의 제품들을 360 뷰로 둘러볼 수 있는 체험존',
      desc: 'SK 매직의 제품들을 360 뷰로 둘러볼 수 있는 체험존',
      desc2:
        '생산성 향상을 위한 가이드 시스템을 구축했습니다. 디자인 가이드를 토대로 레이아웃, 폰트, 공통 컴포넌트로 분류 후 코드와 설명을 정리하여 사전작업 시간을 단축하는 데에 기여했습니다.',
      tech: ['WebGL', 'JS'],
      media: [
        {
          type: 'video',
          ratio: '53.32',
          source: '914699616',
        },
      ],
      url: 'https://company.skmagic.com/introduction/magicalwalk.do',
    },
  ]

  const videoOptions = {
    autoplay: true,
    muted: true,
    paused: false,
    autopause: false,
    showByline: false,
    controls: false,
    loop: true,
    playsInline: false,
  }

  const clickAnimation = (isOpen?: boolean) => {
    if (isOpen) {
      gsap.to(refModalWrap.current, {
        duration: 0.3,
        visibility: 'visible',
        alpha: 1,
      })
      gsap.to(refModal.current, { duration: 0.3, x: 0 })
      if (refModal?.current?.scrollTop) refModal.current.scrollTop = 0
    } else {
      gsap
        .timeline()
        .to(refModal.current, { duration: 0.3, x: '100%' }, 0)
        .to(refModalWrap.current, { duration: 0.3, alpha: 0 }, 0)
        .to(refModalWrap.current, { duration: 0.3, visibility: 'hidden' }, 0.2)
    }
  }

  const openModal = (target: IProject) => {
    if (currentProject !== target) setCurrentProject(target)
    lockScroll()
    clickAnimation(true)
  }

  const closeModal = () => {
    unlockScroll()
    clickAnimation(false)
  }

  useGSAP(
    () => {
      if (isMounted) {
        gsap.set(refModalWrap.current, { visibility: 'hidden', alpha: 0 })
        gsap.set(refModal.current, { x: '100%' })
      }
    },
    { dependencies: [isMounted], scope: refModalWrap }
  )

  useGSAP(() => {
    const t0 = gsap.timeline()

    t0.set(refContent.current, {
      alpha: 0,
    })

    t0.set([refTitle.current, refList.current, refButton.current], {
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
      .to(
        refTitle.current,
        {
          duration: 0.8,
          y: 0,
          alpha: 1,
        },
        0
      )
      .to(
        refList.current,
        {
          duration: 0.8,
          y: 0,
          alpha: 1,
        },
        0.2
      )
      .to(
        refButton.current,
        {
          duration: 0.8,
          y: 0,
          alpha: 1,
        },
        0.3
      )
  })

  return (
    <div css={ContainerCSS} ref={refContent}>
      <div css={SubContentCSS}>
        <p className="title" ref={refTitle}>
          Projects
        </p>
        <div css={ListCSS} ref={refList}>
          {projectList.map((projectItem, projectIdx) => {
            const firstMedia = projectItem.media[0]

            return (
              <ProjectItem
                item={projectItem}
                thumbnailSource={firstMedia}
                handleClick={openModal}
                videoOption={videoOptions}
                key={`project-item_${projectIdx}`}
              />
            )
          })}
        </div>
        <Link href={'/contact'} css={ButtonCSS} ref={refButton}>
          관심이 생겼다면 눌러주세요
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

      {isMounted ? (
        createPortal(
          <div css={OverlayCSS} ref={refModalWrap}>
            <div className="back" onClick={() => closeModal()}></div>
            <div className="content" ref={refModal}>
              <button onClick={() => closeModal()}>
                <span>뒤로</span>
              </button>
              {currentProject && (
                <>
                  <p className="title">{currentProject.title}</p>
                  <p className="desc">{currentProject.desc}</p>
                  <div className="media">
                    {currentProject.media.map(
                      (currentMedia, currentMediaIdx) => {
                        return (
                          <Fragment
                            key={`current-item_media_${currentProject.title}_${currentMediaIdx}`}
                          >
                            {currentMedia.type === 'video' ? (
                              <div className={'player-box'}>
                                <div
                                  className="embed-container"
                                  style={{
                                    padding: `${currentMedia.ratio ? currentMedia.ratio : '50'}% 0 0`,
                                  }}
                                >
                                  <Vimeo
                                    video={`https://player.vimeo.com/video/${currentMedia.source}?h=41e251e138&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                                    {...videoOptions}
                                  />
                                </div>
                              </div>
                            ) : (
                              <Image
                                src={`${assetPrefix}${currentMedia.source}`}
                                alt={'item image'}
                                width={500}
                                height={500}
                                priority={true}
                                unoptimized={true}
                              />
                            )}
                          </Fragment>
                        )
                      }
                    )}
                  </div>
                  {currentProject.desc2 && (
                    <>
                      <p className="section">About</p>
                      <p className="desc">{currentProject.desc2}</p>
                    </>
                  )}
                  <p className="section">Technologies</p>
                  <div className="tech" css={TechBoxCSS}>
                    {currentProject.tech.map((techItem, techIdx) => {
                      return (
                        <span key={`current-item_tech_${techIdx}`}>
                          {techItem}
                        </span>
                      )
                    })}
                  </div>
                  {currentProject.url && (
                    <>
                      <p className="section web">Website</p>
                      <Link href={currentProject.url} className="url-box">
                        {currentProject.url}
                      </Link>
                    </>
                  )}{' '}
                </>
              )}
            </div>
          </div>,
          document.getElementById('overlay')!
        )
      ) : (
        <></>
      )}
    </div>
  )
}

interface ProjectItemProps {
  item: IProject
  thumbnailSource: IMedia
  handleClick: (target: IProject) => void
  videoOption: {}
}
const ProjectItem = ({
  item,
  thumbnailSource,
  handleClick,
  videoOption,
}: ProjectItemProps) => {
  return (
    <div className="item" onClick={() => handleClick(item)}>
      <div className="media">
        {thumbnailSource.type === 'video' ? (
          <div className={'player-box'}>
            <div
              className="embed-container"
              style={{
                padding: `${thumbnailSource.ratio ? thumbnailSource.ratio : '50'}% 0 0`,
              }}
            >
              <Vimeo
                video={`https://player.vimeo.com/video/${thumbnailSource.source}?h=41e251e138&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                {...videoOption}
              />
            </div>
          </div>
        ) : (
          <Image
            src={`${assetPrefix}${thumbnailSource.source}`}
            alt={'item image'}
            width={500}
            height={500}
            priority={true}
            unoptimized={true}
          />
        )}
      </div>
      <div className="floating-area">
        <p className="title">{item.title}</p>
        <p className="desc">{item.summary}</p>
        <div className="tech" css={TechBoxCSS}>
          {item.tech.map((techItem, techIdx) => {
            if (techIdx > 3) return
            return <span key={`current-item_tech_${techIdx}`}>{techItem}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

export const SubContentCSS = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.m}px;
  width: 100%;
  word-break: keep-all;
  padding: ${theme.sizes.gnb}px ${theme.spacings.xxl}px ${theme.sizes.gnb * 2}px;

  & > .title {
    font-size: ${theme.fontSizes.xxl};
    font-weight: 900;
  }

  & > .desc {
    font-size: ${theme.fontSizes.hl};
    line-height: 1.3;
  }

  ${MobileStyle(
    css(`
          padding: ${theme.spacings.l}px 0 ${theme.spacings.xl}px;  
          gap: ${theme.spacings.l}px;
          
          & > .title{
            width: 100%;
            font-size: ${theme.fontSizes.l};
            text-align: center;
          }
      `)
  )}
`

const ListCSS = (theme: Theme) => css`
  column-count: 2;
  gap: ${theme.spacings.m}px;
  width: 100%;

  ${MobileStyle(
    css(`
      max-width: 360px;
      column-count: 1;
      margin: 0 auto; 
    `)
  )}

  .item {
    overflow: hidden;
    position: relative;
    margin-bottom: ${theme.spacings.m}px;
    border-radius: 8px;
    border: solid 1px ${theme.colors.gray800};

    &:before {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(25, 25, 25);
      background: linear-gradient(
        0deg,
        rgba(25, 25, 25, 0.75) 0%,
        rgba(0, 0, 0, 0.45) 26%,
        rgba(0, 0, 0, 0) 99%
      );
      z-index: 1;

      ${MobileStyle(
        css(`
          background: #191919;
          background: linear-gradient(
            0deg,
            rgba(25, 25, 25, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 38%,
            rgba(0, 0, 0, 0) 100%
          );
        `)
      )}
    }

    &:nth-of-type(even) {
      margin-left: auto;
    }

    .media {
      img {
        display: block;
        height: auto;
      }
      .player-box {
        max-height: 600px;

        .embed-container {
          overflow: hidden;
          position: relative;
          height: 0;
          max-width: 100%;

          & > div,
          iframe,
          object,
          embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          iframe {
            border-radius: 8px;
          }
        }
      }
      video {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 500px;
        object-fit: cover;

        ${MobileStyle(
          css(`
            max-height: 360px; 
        `)
        )}
      }
    }

    .floating-area {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      padding: ${theme.spacings.m}px;
      transition: all 0.3s;
      transform: translateY(50%);
      z-index: 5;

      .title {
        font-size: 28px;
        font-weight: 700;
      }

      .desc {
        font-size: ${theme.fontSizes.hl};
        font-weight: 400;
        line-height: 1.3;
        word-break: keep-all;
        margin-top: ${theme.spacings.xxs}px;
      }

      .tech {
        margin-top: ${theme.spacings.m}px;
      }

      ${TabletStyle(
        css(`
          opacity: 1;
          transform: none;
          padding: ${theme.spacings.m}px ${theme.spacings.s}px;
          
          .title{
            font-size: ${theme.fontSizes.m};
          }
          .desc{
            font-size: ${theme.fontSizes.s};
            margin-top: ${theme.spacings.xxxs}px;
          }
           .tech{
            margin-top: ${theme.spacings.xxs}px;
           }
        `)
      )}
    }

    @media (hover: hover) {
      &:hover {
        &:before {
          background: #191919;
          background: linear-gradient(
            0deg,
            rgba(25, 25, 25, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 38%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .floating-area {
          opacity: 1;
          transform: translateY(0);
        }
      }

      ${TabletStyle(
        css(`
        .floating-area{
          opacity: 0;
        `)
      )}
    }
  }
`

const TechBoxCSS = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.xxxs}px;

  span {
    font-size: ${theme.fontSizes.xxs};
    font-weight: 400;
    color: #fff;
    padding: ${theme.spacings.xxxxxs}px ${theme.spacings.xxxs}px;
    border-radius: 16px;
    background-color: ${theme.colors.gray700};
  }
`

const OverlayCSS = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .content {
    overflow: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 540px;
    max-height: 100vh;
    padding: ${theme.spacings.hxl}px ${theme.spacings.hxl}px
      ${theme.spacings.xxxl}px;
    z-index: 1;
    background-color: ${theme.colors.gray800};

    ${MobileStyle(
      css(`
        width: 100%;
        padding: ${theme.spacings.s}px ${theme.spacings.s}px
      ${theme.spacings.xxl}px;
      `)
    )}

    &::-webkit-scrollbar {
      width: 6px;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.3);
    }

    button {
      position: relative;
      width: 20px;
      height: 20px;
      font-size: 0;
      border: solid 2px ${theme.colors.gray780};
      border-radius: 50%;
      background: url(${assetPrefix}/icons/arrow_left.svg) no-repeat 30% 50%
        ${theme.colors.gray800};
      background-size: 10px;
      transition: background-color 0.2s;

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        transform: translate(-50%, -50%);
      }

      @media (hover: hover) {
        &:hover {
          background-color: ${theme.colors.gray700};
        }
      }
    }

    .title {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: -0.3px;
      padding-top: ${theme.spacings.l}px;
      margin-top: ${theme.spacings.s}px;
      border-top: solid 1px ${theme.colors.gray750};

      ${MobileStyle(
        css(`
          font-size: ${theme.fontSizes.m}; 
          text-align: center;
          padding-top: ${theme.spacings.m}px;
          margin-top: ${theme.spacings.xxs}px;
        `)
      )}
    }

    .desc {
      font-size: ${theme.fontSizes.xxs};
      font-weight: 500;
      color: #727272;
      line-height: 1.3;
      margin-top: ${theme.spacings.s}px;
    }

    .media {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxs}px;
      margin-top: ${theme.spacings.m}px;

      img {
        overflow: hidden;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 500px;
        margin: 0 auto;
        border: solid 1px ${theme.colors.gray800};
        border-radius: 8px;

        ${MobileStyle(
          css(`
            max-height: 360px;
          `)
        )}
      }

      .player-box {
        overflow: hidden;
        width: 100%;
        height: auto;
        max-height: 1000px;
        margin: 0 auto;
        border: solid 1px ${theme.colors.gray800};
        border-radius: 8px;

        ${MobileStyle(
          css(`
            max-height: 1000px;
          `)
        )}

        .embed-container {
          overflow: hidden;
          position: relative;
          height: 0;
          max-width: 100%;

          & > div,
          iframe,
          object,
          embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          iframe {
            overflow: hidden;
            border-radius: 8px;
          }
        }
      }
    }

    .section {
      font-size: ${theme.fontSizes.hl};
      font-weight: 600;
      letter-spacing: -0.3px;
      margin-top: ${theme.spacings.hxl}px;

      ${MobileStyle(
        css(`
          font-size: ${theme.fontSizes.s}; 
        `)
      )}
    }

    .web {
      &:before {
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 16px;
        height: 16px;
        margin-top: -${theme.spacings.xxxxxxs}px;
        margin-right: ${theme.spacings.xxxxs}px;
        background: url(${assetPrefix}/icons/www.svg) no-repeat 0 50%;
        background-size: 16px;

        ${MobileStyle(
          css(`
          width: 14px;
          height: 14px;
          margin-top: -${theme.spacings.xxxxxs}px;
          background-size: 14px;
        `)
        )}
      }
    }

    .tech {
      margin-top: ${theme.spacings.s}px;
    }

    .url-box {
      position: relative;
      display: inline-block;
      font-size: ${theme.fontSizes.xxs};
      font-weight: 700;
      color: ${theme.colors.gray700};
      margin-top: ${theme.spacings.s}px;

      &:before {
        display: block;
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: ${theme.colors.gray700};
        transition: width 0.2s;
      }

      @media (hover: hover) {
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
`
