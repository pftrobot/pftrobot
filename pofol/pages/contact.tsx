import { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link'

const ContactPage: NextPage = () => {
  return (
    <div>
      <div>GNB</div>
      <div className="contents">
        <p className="title">Contact</p>
        <p className="desc">여기로 문의하거나 @@로 이메일 보내주세요</p>
        <div className="form">
          <input placeholder={'이름'} />
          <input placeholder={'메일 주소'} />
          <textarea placeholder={'내용을 입력해주세요'} />
          <button type={'submit'}>보내기</button>
        </div>
        <Link href={'/'}>홈으로</Link>
      </div>
    </div>
  )
}

export default ContactPage

const testCss = css`
  font-size: 20px;
`
