// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/GlobalStyle'
import { Fragment } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          // content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
          content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        {/*
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="/manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        */}
        <meta name="description" content="write descriptions here" />
        {/*<meta name="og:image" content="og.png" />*/}
        <title>포트폴리오</title>
      </Head>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
