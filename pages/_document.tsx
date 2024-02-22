import Document, {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

interface Props extends DocumentProps {
  darkMode: boolean
}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
