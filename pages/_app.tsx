import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/GlobalStyle'
import { Fragment } from 'react'
import { ThemeProvider } from '@emotion/react'
import themeLight from '@/styles/theme'
import themeDark from '@/styles/themeDark'
import { NextComponentType } from 'next'
import { useThemeStore } from '@/lib/store'
import Layout from '@/components/common/Layout'

type CustomPageProps = {
  isDarkMode: boolean
}

type CustomAppProps = AppProps<CustomPageProps>

const App: NextComponentType<AppContext, AppInitialProps, CustomAppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const { theme } = useThemeStore()

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/pftrobot/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pftrobot/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pftrobot/favicon/favicon.png"
        />
        <meta name="theme-color" content="#111" />
        <meta name="description" content="write descriptions here" />
        <meta name="og:image" content="/pftrobot/favicon/favicon.png" />
        <title>오이슬</title>
      </Head>
      <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
        {globalStyles}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <div id="overlay" />
    </Fragment>
  )
}

export default App
