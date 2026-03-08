import { useEffect, useState } from 'react'

type Phase = 'visible' | 'opening' | 'gone'

export default function PageLoader() {
  // Start as 'visible' so the overlay is in the server-rendered HTML,
  // covering the page before any JS runs — no flash of content.
  const [phase, setPhase] = useState<Phase>('visible')

  useEffect(() => {
    // Return visits — kill the overlay instantly, no animation
    if (sessionStorage.getItem('siteLoaded')) {
      setPhase('gone')
      return
    }

    document.body.style.overflow = 'hidden'

    const minDelay = new Promise<void>(res => setTimeout(res, 2200))
    const windowLoad =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>(res => window.addEventListener('load', () => res(), { once: true }))

    Promise.all([minDelay, windowLoad]).then(() => {
      setPhase('opening')
      setTimeout(() => {
        setPhase('gone')
        document.body.style.overflow = ''
        sessionStorage.setItem('siteLoaded', 'true')
      }, 1200)
    })

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      className={`iris-overlay${phase === 'opening' ? ' iris-opening' : ''}`}
      aria-hidden="true"
    >
      <div className="iris-logo">
        <p className="iris-label">welcome to</p>
        <h1 className="iris-title">Aadi's Space</h1>
      </div>
    </div>
  )
}
