'use client'

import { useEffect } from 'react'

/**
 * Cursor Animation Hook
 * Creates particle trail + glow effect following the cursor
 * Completely isolated and safe - no impact if disabled or fails
 */
export function useCursorAnimation() {
  useEffect(() => {
    try {
      // Safely check if cursor animation is already initialized
      if ((window as any).__cursorAnimationInit) return

      // Canvas setup for particles
      const canvas = document.createElement('canvas')
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        width: 100%;
        height: 100%;
        mix-blend-mode: screen;
      `
      
      try {
        document.body.appendChild(canvas)
      } catch (e) {
        console.warn('Could not append cursor animation canvas')
        return
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        console.warn('Could not get 2D context for cursor animation')
        document.body.removeChild(canvas)
        return
      }

      // Resize canvas
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)

      // Cursor position
      let mouseX = 0
      let mouseY = 0
      let isMouseMoving = false

      // Particles array
      const particles: Particle[] = []
      const maxParticles = 20

      class Particle {
        x: number
        y: number
        vx: number
        vy: number
        life: number
        size: number

        constructor(x: number, y: number) {
          this.x = x
          this.y = y
          // Random velocity
          this.vx = (Math.random() - 0.5) * 4
          this.vy = (Math.random() - 0.5) * 4
          this.life = 1
          this.size = Math.random() * 3 + 2
        }

        update() {
          this.x += this.vx
          this.y += this.vy
          this.life -= 0.02
          this.vx *= 0.95 // Friction
          this.vy *= 0.95
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save()
          ctx.globalAlpha = this.life
          ctx.fillStyle = '#FF6B35' // Orange accent color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      // Mouse move handler
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
        isMouseMoving = true

        // Create particles
        if (particles.length < maxParticles) {
          particles.push(new Particle(mouseX, mouseY))
        }
      }

      // Animation loop
      const animate = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw glow circle around cursor
        if (isMouseMoving) {
          ctx.save()
          ctx.globalAlpha = 0.3
          const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 30)
          gradient.addColorStop(0, '#FF6B35')
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(mouseX - 40, mouseY - 40, 80, 80)
          ctx.restore()
        }

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i]
          p.update()
          p.draw(ctx)

          // Remove dead particles
          if (p.life <= 0) {
            particles.splice(i, 1)
          }
        }

        requestAnimationFrame(animate)
      }

      // Event listeners
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', () => {
        isMouseMoving = false
      })
      document.addEventListener('mouseenter', () => {
        isMouseMoving = true
      })

      animate()

      // Mark as initialized
      ;(window as any).__cursorAnimationInit = true

      // Cleanup function
      return () => {
        try {
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseleave', () => {})
          document.removeEventListener('mouseenter', () => {})
          window.removeEventListener('resize', resizeCanvas)
          if (canvas.parentNode) {
            document.body.removeChild(canvas)
          }
          ;(window as any).__cursorAnimationInit = false
        } catch (e) {
          console.warn('Error cleaning up cursor animation:', e)
        }
      }
    } catch (error) {
      // Silently fail - animation is optional and should not break the site
      console.warn('Cursor animation failed to initialize:', error)
    }
  }, [])
}
