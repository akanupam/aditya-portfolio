import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { siteConfig } from '../config/site'
import { CursorAnimation } from '../components/CursorAnimation'
import PageLoader from '../components/PageLoader'

// Feature flag - set to false to disable cursor animation
const ENABLE_CURSOR_ANIMATION = true

/**
 * App Component - Root component for the Next.js application
 * Wraps all pages and applies global styles
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const scrollPositions = useRef<Record<string, number>>({})

  /* Scroll-reveal — adds `is-visible` when .reveal elements enter the viewport */
  useEffect(() => {
    const attach = () => {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.07, rootMargin: '0px 0px -48px 0px' }
      )
      document.querySelectorAll<Element>('.reveal:not(.is-visible)').forEach(el => io.observe(el))
      return io
    }
    let io = attach()
    const onRoute = () => { io.disconnect(); setTimeout(() => { io = attach() }, 80) }
    router.events.on('routeChangeComplete', onRoute)
    return () => { io.disconnect(); router.events.off('routeChangeComplete', onRoute) }
  }, [router.events])

  useEffect(() => {
    // Store scroll position before navigation
    const handleBeforeRouteChange = () => {
      scrollPositions.current[router.asPath] = window.scrollY
    }

    // Restore scroll position or handle hash on route complete
    const handleRouteChange = (url: string) => {
      // If URL has a hash, scroll to that element
      if (url.includes('#')) {
        setTimeout(() => {
          const hash = url.split('#')[1]
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        // Otherwise restore the saved scroll position
        const savedPosition = scrollPositions.current[url] || 0
        window.scrollTo(0, savedPosition)
      }
    }

    router.events.on('beforeHistoryChange', handleBeforeRouteChange)
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('beforeHistoryChange', handleBeforeRouteChange)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteConfig.description} />
        <meta name="author" content={siteConfig.author} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />
      </Head>
      {/* Cursor Animation - Isolated & Detachable */}
      {ENABLE_CURSOR_ANIMATION && <CursorAnimation />}
      {/* Iris aperture - first visit page reveal */}
      <PageLoader />
      <Component {...pageProps} />
    </>
  )
}
