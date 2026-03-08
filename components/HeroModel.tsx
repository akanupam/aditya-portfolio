import { useEffect, useRef, useState } from 'react'

/**
 * HeroModel Component
 * 
 * Displays a 3D .glb model using the <model-viewer> web component.
 * Designed for the hero section with:
 * - Slow auto-rotation
 * - Camera controls for user interaction
 * - Responsive sizing (desktop → tablet → mobile/hidden)
 * - Respects prefers-reduced-motion
 * - Accessibility-friendly (aria-hidden, no keyboard trap)
 */

// Pinned version — prevents unintentional upgrades and supply-chain drift
const MODEL_VIEWER_SRC =
  'https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any
    }
  }
}

export default function HeroModel() {
  const [isClient, setIsClient] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Client-side only rendering
    setIsClient(true)

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Guard: don't append a second script if model-viewer is already in head
    if (document.querySelector(`script[src="${MODEL_VIEWER_SRC}"]`)) return

    const script = document.createElement('script')
    script.type = 'module'
    script.src = MODEL_VIEWER_SRC
    script.async = true
    document.head.appendChild(script)

    // No cleanup removal — once loaded, the custom element registry is global.
    // Removing and re-adding the script doesn't un-register the element.
  }, [isClient])

  // Server-side: render nothing
  if (!isClient) {
    return <div className="hero-model-container" />
  }

  return (
    <div className="hero-model-container">
      <model-viewer
        src="/robotic_eye.glb"
        alt="Interactive 3D robotic eye model"
        camera-controls={true}
        auto-rotate={!prefersReducedMotion}
        rotation-per-second="30deg" /* Slow rotation: 24s per full rotation */
        interaction-prompt="none"
        ar-modes="none"
        exposure="1"
        shadow-intensity="0.3"
        environment-image="neutral"
        className="hero-model"
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}
