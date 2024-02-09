import { NextPage } from 'next'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
// import gsap from 'gsap-trial'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'
// import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin'
import { TRef } from '@/pages'
import * as React from 'react'
import { css, Theme } from '@emotion/react'
import { breakPoints, MobileStyle } from '@/styles/mediaQuery'

const Intro: NextPage = () => {
  const [introElem, setIntroElem] = useState(true)
  const refContent: TRef = useRef()
  const refGNB: TRef = useRef()
  const refIntro: TRef = useRef()
  const refTitle: TRef = useRef()
  const refDesc: TRef = useRef()
  const refButton: TRef = useRef()
  const refBlink: TRef = useRef()
  const refEye: TRef = useRef()
  const refDragon: TRef = useRef()
  const ref1_1: TRef = useRef()
  const ref1_2: TRef = useRef()
  const ref2_1: TRef = useRef()
  const ref2_2: TRef = useRef()
  const ref2_3: TRef = useRef()
  const ref2_4: TRef = useRef()
  const ref3_1: TRef = useRef()
  const ref3_2: TRef = useRef()
  const ref3_3: TRef = useRef()
  const ref3_4: TRef = useRef()
  const ref3_5: TRef = useRef()
  const ref3_6: TRef = useRef()
  const ref3_7: TRef = useRef()
  const ref4_1: TRef = useRef()
  const ref4_2: TRef = useRef()
  const ref4_3: TRef = useRef()
  const refList = [
    [ref1_1, ref1_2],
    [ref2_1, ref2_2, ref2_3, ref2_4],
    [ref3_1, ref3_2, ref3_3, ref3_4, ref3_5, ref3_6, ref3_7],
    [ref4_1, ref4_2, ref4_3],
  ]

  const removeItem = () => {
    setIntroElem(false)
  }

  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    const width = window.innerWidth
    const drawDelayTime = 4.8
    const drawOverlapTime = 0.08
    const drawDurationTime = 2.5

    const t0 = gsap.timeline()
    const t1 = gsap.timeline()

    t0.set(refIntro.current, {
      backgroundColor: '#111',
      alpha: 1,
    })

    t0.set(refBlink.current, {
      scale: 1,
      x: 0,
      y: 0,
      alpha: 1,
    })
    t0.set(refEye.current, {
      scale: 0,
      x: 0,
      y: '50px',
    })
    t0.set(refDragon.current, {
      scale: 1,
      x: 0,
      y: 0,
    })

    t0.to(
      refEye.current,
      {
        duration: 0.8,
        delay: 1,
        scale: 1,
        y: 0,
        ease: 'elastic.out(1,0.8)',
      },
      0
    )
      .to(
        refEye.current,
        { duration: 0.05, delay: 2, scaleY: 0, y: '50px', ease: 'ease.in' },
        1
      )
      .to(
        refEye.current,
        { duration: 0.2, delay: 2, scaleY: 1, y: 0, ease: 'ease.out' },
        1.1
      )
      .to(
        refEye.current,
        { duration: 0.05, delay: 2, scaleY: 0, y: '50px', ease: 'ease.in' },
        1.3
      )
      .to(
        refEye.current,
        { duration: 0.2, delay: 2, scaleY: 1, y: 0, ease: 'ease.out' },
        1.4
      )
      .to(
        refBlink.current,
        {
          duration: 0.2,
          delay: 3,
          scale: '0.1 0.01',
          x: width <= breakPoints.mobile ? '-60px' : '-110px',
          y: width <= breakPoints.mobile ? '-36px' : '-80px',
          alpha: 1,
        },
        1.6
      )
      .to(refBlink.current, { duration: 0.2, delay: 3, alpha: 0 }, 1.8)

    refList.forEach((items, listIdx) => {
      // ex) items : [ref1_1, ref1_2]
      items.forEach((item, itemIdx) => {
        // ex) item : ref1_1
        t1.set(item.current, { drawSVG: 0 })
      })
    })
    t1.to(
      refList[0][0].current,
      { duration: 1, delay: drawDelayTime, drawSVG: '100%', ease: 'expo.out' },
      0
    )
      .to(
        refList[0][1].current,
        {
          duration: 1,
          delay: drawDelayTime,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0
      )
      .to(
        refList[1][0].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.2
      )
      .to(
        refList[1][1].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.2
      )
      .to(
        refList[1][2].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.2
      )
      .to(
        refList[1][3].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.2
      )
      .to(
        refList[2][0].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][1].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][2].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][3].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][4].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][5].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[2][6].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 2,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.4
      )
      .to(
        refList[3][0].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 3,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.6
      )
      .to(
        refList[3][1].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 3,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.6
      )
      .to(
        refList[3][2].current,
        {
          duration: drawDurationTime,
          delay: drawDelayTime + drawOverlapTime * 3,
          drawSVG: '100%',
          ease: 'expo.out',
        },
        0.6
      )
      .to(
        refIntro.current,
        {
          duration: 1.5,
          delay: drawDelayTime + drawOverlapTime * 3 + 1.1,
          alpha: 0,
          onComplete: () => removeItem(),
        },
        1
      )
      .to(
        '.gnb',
        {
          duration: 0.8,
          y: '0',
          delay: drawDelayTime + drawOverlapTime * 3 + 1.1,
        },
        1.2
      )
      .to(
        '.title',
        {
          duration: 0.8,
          y: '0',
          alpha: 1,
          delay: drawDelayTime + drawOverlapTime * 3 + 1.1,
        },
        1.5
      )
      .to(
        '.desc',
        {
          duration: 0.8,
          y: '0',
          alpha: 1,
          delay: drawDelayTime + drawOverlapTime * 3 + 1.1,
        },
        1.7
      )
      .to(
        '.go-btn',
        {
          duration: 0.8,
          y: '0',
          alpha: 1,
          delay: drawDelayTime + drawOverlapTime * 3 + 1.1,
        },
        1.9
      )
  })

  return (
    <>
      {introElem && (
        <div className="intro" css={IntroCSS} ref={refIntro}>
          <div className="blink" ref={refBlink}>
            <div className="circle">
              <div className="eye" ref={refEye}>
                <div className="iris"></div>
              </div>
            </div>
          </div>
          <svg
            id="dragon"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={refDragon}
          >
            <path
              ref={ref1_1}
              d="M85.802286,92.641137q0,12.89452-14.736593,17.499704Q74.749841,98.16736,85.802286,92.641137Z"
              transform="translate(.000001 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref1_2}
              d="M42.974061,101.390989q1.381555,10.591927,7.828816,8.749852q1.842073-8.749852-7.828816-8.749852Z"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref2_1}
              d="M55.868581,77.444025q2.302592,15.197112,6.447259,15.197112c4.144667,0,5.98674-5.526224,2.302592-17.039187s-3.22363-40.065115,70.919856-40.525633"
              transform="translate(.000002 0.000001)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref2_2}
              d="M56.789618,78.82558q-1.842075,11.512964-3.684149,16.578668c-1.842074,5.065704-14.736592-4.605186-2.302592-23.486446s21.262816-37.223039,84.511782-35.841484"
              transform="translate(-1-1)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref2_3}
              d="M85.802286,117.509138c0-.460519,1.381556-11.052445,9.210371-6.907778c2.302592,4.144666,4.144665,11.512963-12.434002,25.328519-2.763111,2.763111-5.065703,16.578667,1.381556,11.973482s11.052445-8.289333,15.197112-17.039186s9.670889-10.591926,9.670889-11.052445q0-.460519-9.670889.460518-.000001-7.368296,4.605185-14.736593c4.605186-7.368297,1.842075-13.355039,1.842075-13.815557s-17.499706,14.276076-16.11815,4.605186s5.80301-5.501243,8.105603-11.948503"
              transform="translate(.000001 0.000001)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref2_4}
              d="M85.802286,117.969657q-12.434-2.302594-18.88126,3.223629c-6.44726,5.526223-6.907779,13.355037-6.907779,17.499704s-30.394226,36.380965,10.131407,68.156745"
              transform="translate(.000002 0.000001)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_1}
              d="M168.235106,40.142022Q59.092209,10.208317,24.092801,92.641137C0.145836,139.614028,22.250726,246.454331,136.459325,265.79611"
              transform="translate(.000001 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_2}
              d="M27.158505,113.364472c0-.460518-21.025927,82.893337,59.1043,110.52445c10.591926,3.22363,9.052445,7.368296,11.815556,12.894519s3.131679,12.336658,36.289014,28.915325"
              transform="translate(2 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_3}
              d="M28.921616,112.982915q4.381555,2.22363,3,28.933706t3.684149,24.868001q-4.605186-16.578668,3.684148-31.315261t9.591926-15.276075q2.381557,2.381557,2.842075,7.907779c.921037,1.381555-36.841484,36.841483,18.736593,79.367115"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_4}
              d="M168.695623,40.142022Q97.775767,29.550096,85.802286,62.707431c-.921038.460519,52.499112-32.696816,94.866819,1.381556s59.406893,80.590744,56.183263,122.958451"
              transform="translate(.000001 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_5}
              d="M110.670288,63.628468c0-.460518-2.302593-5.065704,3.684148-5.065704s92.103708-16.118149,122.497932,127.563637"
              transform="translate(.000001 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_6}
              d="M134.617252,87.575433q14.276074-14.276075,25.789038,2.763111c11.512964,17.039186,25.789039,43.288741,8.749853,80.590744-6.447261,11.512963-27.170596,18.881259-32.696818,34.53889"
              transform="translate(.000001 0.000002)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref3_7}
              d="M97.53888,84.27284c0-.460519,10.368296-5.447259,20.499704,6.065704s20.723335,26.710075,9.67089,49.736002-47.433411,46.512374-7.828816,88.419561c18.651008,18.651008,90.261636,29.012668,121.116378,6.447259s35.459929-17.960223,47.893929-18.88126"
              transform="translate(0 0.000001)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref4_1}
              d="M110.814954,64.010024q56.499114-2.22363,82.288153,51.65704c25.789039,53.88067-23.486445,112.366524-36.841483,107.30082c0-.46052,3.684148,6.907778,17.039186,5.526222s46.512372-5.68415,62.170003-13.973483c0-.000001-15.65763,8.907778-31.775779,14.894519.921039.000003,21.644371.921037,38.223039-6.44726s32.012668-7.670889,46.288743-6.749852"
              transform="translate(0 0.000003)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref4_2}
              d="M134.657151,87.615141q21.604473,19.76259,20.222917,45.551628c-1.381556,25.789038-11.052445,51.578077-13.815557,53.420151.000001,1.381557-.460519-10.591926,1.842073-18.88126.000003-.921034-16.960224,19.197112-6.828816,37.157335"
              transform="translate(.000002 0)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={ref4_3}
              d="M83.499693,124.416916q-13.355038-5.526223-12.894519,4.144667c.460519,9.67089,11.052445,19.802297,3.22363,25.32852s-13.815557,5.526222-12.434001,12.894519c0-.000001,2.223629-6.986741,11.894519-6.526223c5.986741,0,10.512964-8.289333,4.526223-23.025927s-.302593-11.434,5.684148-12.815556Z"
              transform="translate(-3 0.000001)"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default Intro

const IntroCSS = (theme: Theme) => css`
  .blink {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 100%;
      max-width: 200px;
      overflow: hidden;
      margin: 0 auto;
      border-top-left-radius: 60%;
      border-top-right-radius: 0;
      ${MobileStyle(
        css(`
            // max-width: 100px; 
            // border-top-left-radius: 30%;
        `)
      )}

      .eye {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #f1f1f1;
        border-bottom-left-radius: 80%;
        border-bottom-right-radius: 120%;
        top: -50px;
        border-bottom: 8px inset #000;
        ${MobileStyle(
          css(` 
              // border-bottom-left-radius: 40%;
              // border-bottom-right-radius: 60%;
          `)
        )}
      }

      .iris {
        width: 50%;
        max-width: 300px;
        height: 300px;

        ${MobileStyle(
          css(`
            // max-width: 150px;
            // height: 150px; 
          `)
        )}

        &:before {
          content: '';
          width: 40%;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 30%;
          background: black;
          transform: translate(-50%, -50%);
          border-top-left-radius: 10%;
          border-top-right-radius: 10%;
          border-bottom-left-radius: 40%;
          border-bottom-right-radius: 80%;
          ${MobileStyle(
            css(` 
              // border-top-left-radius: 5%;
              // border-top-right-radius: 5%;
              // border-bottom-left-radius: 20%;
              // border-bottom-right-radius: 40%;
          `)
          )}
        }

        &:after {
          content: '';
          width: 30%;
          height: 40%;
          border-radius: 50%;
          position: absolute;
          left: 20%;
          top: 20%;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  @keyframes blink {
    78% {
      transform: none;
      animation-timing-function: ease-in;
    }
    81% {
      transform: translateY(50px) scaleY(0);
    }
    88% {
      transform: none;
      animation-timing-function: ease-in;
    }
    90% {
      transform: none;
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(50px) scaleY(0);
    }
    100% {
      animation-timing-function: ease-out;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #111;

  svg {
    max-width: 500px;
    margin: 0 auto;

    ${MobileStyle(
      css(`
          max-width: 250px; 
      `)
    )}
  }
`
