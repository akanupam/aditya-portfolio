import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { siteConfig } from '../config/site'

/**
 * App Component - Root component for the Next.js application
 * Wraps all pages and applies global styles
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteConfig.description} />
        <meta name="author" content={siteConfig.author} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
