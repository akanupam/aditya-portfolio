import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document — sets lang attribute on <html> (WCAG 3.1.1 Level A)
 * and provides a hook for server-side document structure.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230A0A0A'/><text y='72' x='50' text-anchor='middle' font-size='62' font-family='Space Grotesk,sans-serif' font-weight='700' fill='%23E8E8E8'>A</text></svg>"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
