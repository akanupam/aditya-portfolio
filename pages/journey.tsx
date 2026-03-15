import Head from 'next/head'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/* ── Types inferred from data ────────────────────────────────── */
type JourneyEntry = (typeof portfolioData.journey)[number]
type Certification = (typeof portfolioData.certifications)[number]

/* ── Badge labels ────────────────────────────────────────────── */
const TYPE_LABEL: Record<string, string> = {
  education: 'education',
  project:   'project',
  milestone: 'milestone',
}

export default function Journey() {
  const { journey, certifications } = portfolioData

  /* Render timeline in reverse-chronological order (newest first) */
  const timelineEntries = [...journey].reverse()

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.journey.title}</title>
        <meta name="description" content={siteConfig.pages.journey.description} />
        <meta property="og:title" content={siteConfig.pages.journey.title} />
        <meta property="og:description" content={siteConfig.pages.journey.description} />
      </Head>

      <div className="journey-page">
        <div className="container">

          {/* ── Page Header ─────────────────────────────────────── */}
          <header className="journey-header">
            <p className="journey-header-pre">{'// git log --oneline --author="aditya"'}</p>
            <h1 className="journey-header-title">The Journey.</h1>
            <p className="journey-header-sub">
              education &nbsp;·&nbsp; projects &nbsp;·&nbsp; milestones &nbsp;·&nbsp; certifications
            </p>
          </header>

          {/* ── 01: Timeline ────────────────────────────────────── */}
          <section className="journey-section">
            <div className="journey-section-marker">
              <span className="journey-marker-num">01</span>
              <span className="journey-marker-label">$ git log --reverse --pretty=oneline</span>
            </div>

            <div className="journey-timeline">
              {timelineEntries.map((entry: JourneyEntry, i: number) => (
                <div
                  key={i}
                  className={`journey-entry journey-entry-type-${entry.type}`}
                >
                  <span className="journey-year">{entry.year}</span>
                  <div className="journey-content">
                    <span className="journey-type-badge">
                      {TYPE_LABEL[entry.type]}
                    </span>
                    <h3 className="journey-title">{entry.title}</h3>
                    <p className="journey-org"># {entry.org}</p>
                    <p className="journey-desc">{entry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 02: Certifications ──────────────────────────────── */}
          <section className="journey-section">
            <div className="journey-section-marker">
              <span className="journey-marker-num">02</span>
              <span className="journey-marker-label">$ ls -la ./certifications/</span>
            </div>

            <div className="cert-grid">
              {certifications.map((cert: Certification, i: number) => (
                <div key={i} className="cert-card">
                  <p className="cert-card-pre">-rw-r--r-- &nbsp; {cert.date}</p>
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-issuer">{cert.issuer}</p>
                  <div className="cert-card-meta">
                    <span className="cert-card-id">{cert.credentialId}</span>
                    {cert.verifyUrl && cert.verifyUrl !== '' && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card-link"
                      >
                        verify ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 03: Resume ──────────────────────────────────────── */}
          <section className="journey-section">
            <div className="journey-section-marker">
              <span className="journey-marker-num">03</span>
              <span className="journey-marker-label">$ cat resume.pdf | less</span>
            </div>

            <div className="resume-cta">
              <div className="resume-cta-text">
                <p className="resume-cta-pre">{'// full professional profile'}</p>
                <h2 className="resume-cta-title">Download my CV.</h2>
                <p className="resume-cta-sub">
                  AI engineering, NLP, agentic systems, full-stack development, and
                  everything in between. All in one document — updated for 2026.
                </p>
              </div>
              <a href={siteConfig.resume.url} download className="resume-cta-btn">
                ↓&nbsp;&nbsp;Download CV
              </a>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}
