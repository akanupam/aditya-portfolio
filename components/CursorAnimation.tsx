'use client'

import { useCursorAnimation } from '../hooks/useCursorAnimation'

/**
 * Cursor Animation Component
 * Isolated wrapper for cursor particle trail + glow effect
 * Can be easily removed or disabled without affecting the site
 */
export function CursorAnimation() {
  // Use the cursor animation hook
  useCursorAnimation()

  // Component renders nothing - animation is handled entirely by the hook
  return null
}
