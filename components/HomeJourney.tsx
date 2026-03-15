'use client'

import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

const TYPE_COLOR = {
  education: '#58a6ff',
  project:   '#7ee787',
  milestone: '#f0883e',
} as const

export default function HomeJourney() {
  const { personal, journey, certifications } = portfolioData
  const softSkills = portfolioData.softSkills as string[]

  /* Education + milestone entries only for homepage timeline — tells the story cleanly */
  const timelineEntries = [...journey]
    .filter(e => e.type === 'education' || e.type === 'milestone')
    .sort((a, b) => parseInt(a.year) - parseInt(b.year))

  return (
    <div className="hj-root">

      {/* ── 01: Profile — Photo + Identity ─────────────────────────────── */}
      <div className="hj-profile">
        <div className="hj-photo-col">
          <div className="hj-photo-card">
            <Image
              src={personal.photo}
              alt={`${personal.name} — AI Engineer`}
              width={480}
              height={640}
              className="hj-photo"
              priority
            />
            <div className="hj-photo-caption">
              <span className="hj-photo-name">{personal.name}</span>
              <span className="hj-photo-role">AI Eng&nbsp;·&nbsp;Full-Stack&nbsp;·&nbsp;LPU &apos;27</span>
            </div>
          </div>
        </div>

        <div className="hj-identity">
          <p className="hj-label">$ whoami --verbose</p>
          <h2 className="hj-name">{personal.name}</h2>
          <p className="hj-title">{personal.title}</p>

          <div className="hj-meta-grid">
            <div className="hj-meta-item">
              <span className="hj-meta-key">university</span>
              <span className="hj-meta-val">Lovely Professional University</span>
            </div>
            <div className="hj-meta-item">
              <span className="hj-meta-key">degree</span>
              <span className="hj-meta-val">B.Tech &mdash; CS &amp; Engineering</span>
            </div>
            <div className="hj-meta-item">
              <span className="hj-meta-key">batch</span>
              <span className="hj-meta-val">2023 &ndash; 2027</span>
            </div>
            <div className="hj-meta-item">
              <span className="hj-meta-key">focus</span>
              <span className="hj-meta-val">NLP&nbsp;&middot;&nbsp;Agentic AI&nbsp;&middot;&nbsp;Full-Stack</span>
            </div>
          </div>

          {/* Soft skills chips */}
          <div className="hj-chips">
            {softSkills.slice(0, 8).map((s, i) => (
              <span key={i} className="hj-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 02: Timeline ─────────────────────────────────────────────────── */}
      <div className="hj-tl-section">
        <p className="hj-label">$ git log --oneline --reverse</p>

        <div className="hj-timeline">
          {timelineEntries.map((entry, i) => (
            <div key={i} className="hj-tl-col">
              <span className="hj-tl-year">{entry.year}</span>
              <div
                className="hj-tl-dot"
                style={{ background: TYPE_COLOR[entry.type as keyof typeof TYPE_COLOR] ?? '#555' }}
              />
              <p className="hj-tl-text">{entry.title}</p>
            </div>
          ))}
        </div>

        <div className="hj-tl-footer">
          <span className="hj-legend">
            <span className="hj-lgd-dot" style={{ background: '#58a6ff' }} />
            education
          </span>
          <span className="hj-legend">
            <span className="hj-lgd-dot" style={{ background: '#f0883e' }} />
            milestone
          </span>
          <Link href="/journey" className="hj-full-link">
            View full journey &rarr;
          </Link>
        </div>
      </div>

      {/* ── 03: Certifications + Resume ──────────────────────────────────── */}
      <div className="hj-bottom">

        <div className="hj-certs-col">
          <p className="hj-label">$ ls -la ./certifications/</p>
          <ul className="hj-cert-list">
            {certifications.map((cert, i) => (
              <li key={i} className="hj-cert-item">
                <div className="hj-cert-info">
                  <span className="hj-cert-title">{cert.title}</span>
                  <span className="hj-cert-sub">{cert.issuer}&nbsp;&middot;&nbsp;{cert.date}</span>
                </div>
                {cert.verifyUrl && cert.verifyUrl !== '' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hj-cert-link"
                  >
                    verify ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hj-resume-col">
          <p className="hj-label">$ cat resume.pdf | head -10</p>
          <div className="hj-resume-card">
            <p className="hj-resume-pre">{'// full professional profile'}</p>
            <h3 className="hj-resume-title">Download my CV.</h3>
            <p className="hj-resume-sub">
              AI engineering, NLP, agentic systems, and full-stack development.
              Everything in one document &mdash; updated 2026.
            </p>
            <a href={siteConfig.resume.url} download className="hj-resume-btn">
              &#8595;&nbsp;&nbsp;Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
