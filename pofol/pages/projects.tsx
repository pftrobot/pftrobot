import { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link'

const ProjectPage: NextPage = () => {
  return (
    <div>
      <div>GNB</div>
      <div className="contents">
        <p className="title">Projects</p>
        <div className="list">
          <div className="item">
            <div className="media">preview media</div>
            <div className="floating-area">
              <p className="title">프로젝트명</p>
              <p className="desc">요약</p>
              <div className="tech">
                <span>JS</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="media">preview media</div>
            <div className="floating-area">
              <p className="title">프로젝트명</p>
              <p className="desc">요약</p>
              <div className="tech">
                <span>JS</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
        </div>
        <Link href={'/contact'}>관심이 생겼다면 눌러요</Link>
      </div>

      <div id="overlay">
        <div className="back"></div>
        <div className="content">
          <button>뒤로</button>
          <p className="title">프로젝트명</p>
          <p className="desc">프로젝트 설명</p>
          <div className="media">영상이나 사진 나열</div>
          <p className="section">About</p>
          <p className="desc2">트러블 슈팅 경험이나 특이 사항 설명</p>
          <p className="section">Technologies</p>
          <div className="tech-box">
            <span>JS</span>
            <span>Gsap</span>
          </div>
          <p className="section">Website</p>
          <p className="url-box">https://~~</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

const testCss = css`
  font-size: 20px;
`
