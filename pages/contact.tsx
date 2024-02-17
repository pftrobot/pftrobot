import { MutableRefObject, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import gsap from 'gsap-trial'
import { useGSAP } from '@gsap/react'

import { css, Theme } from '@emotion/react'
import { ButtonCSS, ContainerCSS } from './index'
import { SubContentCSS } from './projects'
import { MobileStyle } from '@/styles/mediaQuery'

import emailjs from '@emailjs/browser'
import { useThemeStore } from '@/lib/store'

type TRef = MutableRefObject<any>

interface IMail {
  name: string
  email: string
  message: string
}

const ContactPage: NextPage = () => {
  const { theme } = useThemeStore()
  const refContent: TRef = useRef()
  const form: TRef = useRef()

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_3kxyi38',
        'template_8xuweqg',
        form.current,
        'eBY8yf0yt5DdtqvhP'
      )
      .then(
        (result) => {
          alert('메일을 성공적으로 전송했어요. 감사합니다.')
        },
        (error) => {
          alert('메일 전송에 실패했어요. 잠시 후 다시 시도해주세요')
        }
      )
  }

  useGSAP(() => {
    const t0 = gsap.timeline()

    t0.set(refContent.current, {
      alpha: 0,
    })

    t0.to(refContent.current, {
      duration: 0.8,
      alpha: 1,
    })
  })

  return (
    <div css={ContainerCSS} ref={refContent}>
      <div css={SubContentCSS}>
        <p className="title">Contact</p>
        <p className="desc">
          아래 형식으로 문의하거나 <span>pftrobot@gmail.com</span>{' '}
          {/*<button css={CopyBtnCSS}>COPY</button>*/}로 이메일을 보내주세요
        </p>
        <form ref={form} onSubmit={sendEmail} css={FormCSS}>
          <input type="text" name="name" placeholder={'이름'} />
          <input type="email" name="email" placeholder={'메일 주소'} />
          <textarea name="message" placeholder={'내용을 입력해주세요'} />
          <input type="submit" value="전송하기" />
          {/*<button className="submit-btn">*/}
          {/*  <span>전송하기</span>*/}
          {/*</button>*/}
        </form>
        <Link href={'/'} css={ButtonCSS}>
          홈으로
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

export default ContactPage

const CopyBtnCSS = (theme: Theme) => css`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: ${theme.fontSizes.xxxxs};
  font-weight: 800;
  color: ${theme.colors.gray780};
  padding: 1px 3px;
  margin-top: -${theme.spacings.xxxxxxs}px;
  background-color: ${theme.colors.gray100};
  border: solid 1px ${theme.colors.gray750};
  border-radius: 4px;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 200%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

const FormCSS = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.s}px;
  width: 100%;
  margin-top: ${theme.spacings.m}px;

  input,
  textarea {
    display: block;
    width: 90%;
    max-width: 500px;
    font-size: ${theme.fontSizes.s};
    font-weight: 500;
    color: ${theme.colors.gray100};
    padding: 20px ${theme.spacings.m}px;
    border-radius: 3px;
    background-color: ${theme.colors.gray900};

    &::placeholder {
      color: ${theme.colors.gray750};
      font-weight: 400;
    }

    &:focus-visible {
      outline: none;
    }
  }

  textarea {
    min-height: 120px;
    resize: none;
  }

  .submit-btn {
    position: relative;
    display: block;
    width: 180px;
    padding: ${theme.spacings.xs}px ${theme.spacings.s}px;
    border: solid 2px ${theme.colors.gray700};
    border-radius: 3px;

    span {
      position: relative;
      font-size: ${theme.fontSizes.xs};
      font-weight: 500;
      letter-spacing: -0.3px;
      color: ${theme.colors.white};
      z-index: 2;
      transition: all 0.2s;
    }

    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0;
      background-color: ${theme.colors.gray100};
      z-index: 0;
      transition: width 0.2s;
    }

    &:hover {
      border-color: ${theme.colors.gray100};
      span {
        color: ${theme.colors.black};
        font-weight: ${theme.fontWeights.bold};
      }

      &:before {
        width: 100%;
      }
    }
  }
`
