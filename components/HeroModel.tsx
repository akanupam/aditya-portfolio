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

// Extend JSX IntrinsicElements to include model-viewer
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

    // Load model-viewer script from CDN
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [isClient])

  // Server-side: render nothing
  if (!isClient) {
    return <div className="hero-model-container" />
  }

  return (
    <div className="hero-model-container">
      <model-viewer
        src="/robotic_eye.glb"
        alt="3D robotic eye model"
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
