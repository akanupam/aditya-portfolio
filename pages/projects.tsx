import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

const FILTERS = ['all', 'AI/ML', 'Web App', 'Mobile App']

export default function Projects() {
  const { projects } = portfolioData
  const [activeFilter, setActiveFilter] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  const toggle = (i: number) => setOpenIdx(prev => prev === i ? null : i)

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.projects.title}</title>
        <meta name="description" content={siteConfig.pages.projects.description} />
        <meta property="og:title" content={siteConfig.pages.projects.title} />
        <meta property="og:description" content={siteConfig.pages.projects.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="proj-page">
        {/* ── Page header ──────────────────────────────── */}
        <header className="proj-header reveal">
          <div className="container">
            <p className="proj-header-pre">{'{/* work */}'}</p>
            <h1 className="proj-header-title">Things I&apos;ve<br />shipped.</h1>
            <p className="proj-header-sub">
              {projects.length} projects across AI/ML, web, and mobile.
              Code on GitHub, ideas everywhere else.
            </p>
          </div>
        </header>

        {/* ── Filter bar ────────────────────────────── */}
        <div className="proj-filter-bar">
          <div className="container">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`proj-filter-btn${activeFilter === f ? ' pf-active' : ''}`}
                onClick={() => { setActiveFilter(f); setOpenIdx(null) }}
              >
                {f === 'all' ? 'all types' : f.toLowerCase()}
              </button>
            ))}
            <span className="proj-filter-count">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* ── Case-study list ──────────────────────────── */}
        <section className="proj-list">
          <div className="container">
            {filtered.map((p, i) => {
              const isOpen = openIdx === i
              return (
                <article
                  key={p.title}
                  className={`proj-row${isOpen ? ' proj-row-open' : ''}`}
                >
                  <button
                    className="proj-row-head"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="proj-row-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="proj-row-title">{p.title}</span>
                    <span className="proj-row-type">
                      {p.type}
                    </span>
                    {p.featured && (
                      <span className="proj-row-star" title="Featured">★</span>
                    )}
                    <span className="proj-row-chevron">{isOpen ? '−' : '+'}</span>
                  </button>

                  {isOpen && (
                    <div className="proj-row-body">
                      <div className="proj-row-desc">
                        <p>{p.desc}</p>
                        <div className="proj-row-tags">
                          {p.tags.map(t => (
                            <span key={t} className="proj-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="proj-row-actions">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-gh-link"
                        >
                          <span className="proj-gh-link-label">view source</span>
                          <span className="proj-gh-link-arrow">↗</span>
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}

            {filtered.length === 0 && (
              <p className="proj-empty">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* ── Footer row ───────────────────────────────── */}
        <div className="proj-foot reveal">
          <div className="container">
            <p className="proj-foot-text">
              More experiments and learning projects live on GitHub.
            </p>
            <a
              href={siteConfig.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-foot-link"
            >
              @akanupam on GitHub →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
