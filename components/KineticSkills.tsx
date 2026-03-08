'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioData } from '../data/portfolio'

/* ── category → color mapping ────────────────────────────── */
const CAT_COLOR: Record<string, string> = {
  Core_Languages:        '#58a6ff',
  AI_ML_Engineering:     '#7ee787',
  Frontend_Development:  '#ffa657',
  Backend_Development:   '#d2a8ff',
  DevOps_Infrastructure: '#ff7b72',
  Mobile_Development:    '#79c0ff',
  Databases:             '#a5d6ff',
  Emerging_Focus:        '#f0883e',
}

/* Three strip groupings, each at a different speed */
const STRIPS: Array<{ cats: string[]; duration: number; dir: 'normal' | 'reverse' }> = [
  { cats: ['Core_Languages', 'DevOps_Infrastructure'],                                    duration: 18, dir: 'normal' },
  { cats: ['AI_ML_Engineering', 'Emerging_Focus'],                                        duration: 30, dir: 'reverse' },
  { cats: ['Frontend_Development', 'Backend_Development', 'Mobile_Development', 'Databases'], duration: 46, dir: 'normal' },
]

type Pill = { label: string; color: string }

export default function KineticSkills() {
  const skills = portfolioData.skills as Record<string, string[]>
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const strips: Pill[][] = STRIPS.map(({ cats }) =>
    cats.flatMap(cat =>
      (skills[cat] ?? []).map(label => ({ label, color: CAT_COLOR[cat] ?? '#ccc' }))
    )
  )

  const totalSkillCount = Object.values(skills).flat().length

  return (
    <div
      className="kinetic-wrapper"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setHoveredSkill(null) }}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => { setIsHovering(false); setHoveredSkill(null) }}
    >
      {strips.map((pills, si) => {
        /* Duplicate pills for seamless infinite loop */
        const doubled = [...pills, ...pills]
        const dur = STRIPS[si].duration * (isHovering ? 4 : 1)
        const dir = STRIPS[si].dir

        return (
          <div key={si} className="kinetic-strip">
            <div
              className="kinetic-track"
              style={{ animationDuration: `${dur}s`, animationDirection: dir }}
            >
              {doubled.map((pill, idx) => (
                <span
                  key={`${pill.label}-${idx}`}
                  className={`kinetic-pill${hoveredSkill === pill.label ? ' kinetic-pill-lit' : ''}`}
                  style={{ '--pill-color': pill.color } as React.CSSProperties}
                  onMouseEnter={() => setHoveredSkill(pill.label)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span
                    className="kinetic-dot"
                    style={{ background: pill.color }}
                  />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        )
      })}

      <div className="kinetic-footer">
        <span className="kinetic-hint">hover / tap to slow · {totalSkillCount}+ technologies</span>
        <Link href="/skills" className="view-all-link">
          View full skill set →
        </Link>
      </div>
    </div>
  )
}
