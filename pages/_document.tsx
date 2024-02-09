// import { DocumentProps, Html, Head, Main, NextScript } from 'next/document'
//
// export default function Document() {
//   return (
//     <Html lang="ko">
//       <Head>
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import Document, {
  DocumentContext,
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
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);

  //   const userAgent = ctx.req?.headers['user-agent'];
  //   const darkMode = userAgent?.match(/dark-mode/) ? true : false;

  //   return { ...initialProps, darkMode };
  // }

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
