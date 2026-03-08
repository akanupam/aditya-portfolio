import { useEffect, useState } from 'react'

type Phase = 'visible' | 'opening' | 'gone'

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>('visible')

  useEffect(() => {
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
        <h1 className="iris-title">Aadi&apos;s Space</h1>
      </div>
    </div>
  )
}
