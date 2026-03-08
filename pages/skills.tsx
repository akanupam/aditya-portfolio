import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/* Category metadata: display name + mono color accent */
const CAT_META: Record<string, { label: string; color: string; glyph: string }> = {
  Core_Languages:        { label: 'Core Languages',        color: '#58a6ff', glyph: '</>'},
  AI_ML_Engineering:     { label: 'AI / ML Engineering',   color: '#7ee787', glyph: '∿'  },
  Frontend_Development:  { label: 'Frontend',              color: '#ffa657', glyph: '◧'  },
  Backend_Development:   { label: 'Backend',               color: '#d2a8ff', glyph: '⬡'  },
  Mobile_Development:    { label: 'Mobile',                color: '#79c0ff', glyph: '◻'  },
  Databases:             { label: 'Databases',             color: '#a5d6ff', glyph: '⛁'  },
  DevOps_Infrastructure: { label: 'DevOps',                color: '#ff7b72', glyph: '⚙'  },
  Emerging_Focus:        { label: 'Emerging Focus',        color: '#f0883e', glyph: '◈'  },
}

const CATS = Object.keys(CAT_META)

export default function Skills() {
  const skills = portfolioData.skills as Record<string, string[]>
  const [activeCat, setActiveCat] = useState(CATS[0])

  const totalSkills = Object.values(skills).flat().length
  const activeSkills = skills[activeCat] ?? []
  const meta = CAT_META[activeCat]

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.skills.title}</title>
        <meta name="description" content={siteConfig.pages.skills.description} />
        <meta property="og:title" content={siteConfig.pages.skills.title} />
        <meta property="og:description" content={siteConfig.pages.skills.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="sk-page">

        {/* ── Header ───────────────────────────────────────── */}
        <header className="sk-header reveal">
          <div className="container">
            <p className="sk-header-pre">{'~ skills && technologies'}</p>
            <h1 className="sk-header-title">
              {totalSkills}+ tools.<br />One stack.
            </h1>
            <p className="sk-header-sub">
              {CATS.length} categories · built over years of shipping real things.
            </p>
          </div>
        </header>

        {/* ── Main matrix ──────────────────────────────────── */}
        <div className="sk-matrix">
          <div className="container sk-matrix-inner">

            {/* Left: category nav */}
            <nav className="sk-nav">
              {CATS.map(cat => {
                const m = CAT_META[cat]
                const count = (skills[cat] ?? []).length
                return (
                  <button
                    key={cat}
                    className={`sk-nav-btn${activeCat === cat ? ' sk-nav-active' : ''}`}
                    style={{ '--cat-color': m.color } as React.CSSProperties}
                    onClick={() => setActiveCat(cat)}
                  >
                    <span className="sk-nav-glyph">{m.glyph}</span>
                    <span className="sk-nav-label">{m.label}</span>
                    <span className="sk-nav-count">{count}</span>
                  </button>
                )
              })}
            </nav>

            {/* Right: skill panel */}
            <div className="sk-panel" key={activeCat}>
              <div
                className="sk-panel-head"
                style={{ '--cat-color': meta.color } as React.CSSProperties}
              >
                <span className="sk-panel-glyph">{meta.glyph}</span>
                <div>
                  <p className="sk-panel-pre">
                    {'// ' + activeCat.toLowerCase().replace(/_/g, '-')}
                  </p>
                  <h2 className="sk-panel-title">{meta.label}</h2>
                </div>
                <span className="sk-panel-total">{activeSkills.length}</span>
              </div>

              <ul className="sk-skill-list">
                {activeSkills.map((skill, i) => (
                  <li
                    key={skill}
                    className="sk-skill-item"
                    style={{
                      '--cat-color': meta.color,
                      animationDelay: `${i * 38}ms`,
                    } as React.CSSProperties}
                  >
                    <span className="sk-skill-idx">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="sk-skill-name">{skill}</span>
                    <span className="sk-skill-dot" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────────── */}
        <div className="sk-foot reveal">
          <div className="container">
            <p className="sk-foot-text">Always learning. Always building.</p>
            <a href="/#contact" className="sk-foot-link">
              get in touch →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
