import { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

interface Props extends DocumentProps {
  darkMode: boolean
}

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
