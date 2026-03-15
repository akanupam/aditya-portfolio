import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import Layout from '../components/Layout'
import HeroModel from '../components/HeroModel'
import TerminalAbout from '../components/TerminalAbout'
import IDEProjects from '../components/IDEProjects'
import KineticSkills from '../components/KineticSkills'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

export default function Home() {
  const { personal, journey, certifications } = portfolioData
  const aboutRef = useRef<HTMLElement>(null)
  const journeyPreview = [...journey].reverse().slice(0, 5)
  const certPreview = certifications.slice(0, 3)

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.home.title}</title>
        <meta name="description" content={siteConfig.pages.home.description} />
        <meta property="og:title" content={siteConfig.pages.home.title} />
        <meta property="og:description" content={siteConfig.pages.home.description} />
        <meta property="og:type" content="website" />
      </Head>

      {/* ===== HERO SECTION ===== */}
      {/* Cinematic hero: full-width composition with layered content */}
      <section id="hero" className="hero-cinematic">
        {/* Layer 1: Constrained text content */}
        <div className="hero-text-layer">
          <div className="hero-content">
            <p className="hero-greeting">
              <span className="hero-greeting-prompt">❯</span>{' '}{personal.name}
            </p>
            
            {/* Primary headline - dominant visual element */}
            <h1 className="hero-headline">
              Building Intelligent<br />Systems.
            </h1>
            <p className="hero-tagline">
              NLP&nbsp;&nbsp;·&nbsp;&nbsp;Agentic AI&nbsp;&nbsp;·&nbsp;&nbsp;Full-Stack
            </p>
          </div>
        </div>

        {/* Layer 2: Unconstrained 3D model - positioned absolutely */}
        <div className="hero-visual-layer">
          <div className="hero-model-space">
            <HeroModel />
          </div>
        </div>

        {/* Scroll Arrow - Animated indicator */}
        <button 
          className="hero-scroll-arrow"
          onClick={handleScrollToAbout}
          aria-label="Scroll to about section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </section>

      {/* ── ABOUT: Terminal REPL + Photo ────────────────────────────── */}
      <section id="about" className="section terminal-section" ref={aboutRef}>
        <div className="container">
          <div className="reveal">
            <div className="section-marker">
              <span className="section-marker-num">01</span>
              <span className="section-marker-label">$ aditya --about</span>
            </div>
            <div className="about-split">
              {/* Terminal REPL (left) */}
              <div className="about-terminal">
                <TerminalAbout />
              </div>
              {/* Photo Card (right) */}
              <div className="about-split-photo">
                <div className="about-photo-card">
                  <Image
                    src={personal.photo}
                    alt={`${personal.name} - AI Engineer & Full-Stack Developer`}
                    width={240}
                    height={320}
                    className="about-photo"
                    priority
                    quality={95}
                  />
                  <div className="about-photo-caption">
                    <span className="about-photo-name">{personal.name}</span>
                    <span className="about-photo-role">AI Engineer · LPU &apos;27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS: VS Code IDE ───────────────────────────────── */}
      <section id="projects" className="section ide-section">
        <div className="container">
          <div className="reveal">
            <div className="section-marker">
              <span className="section-marker-num">02</span>
              <span className="section-marker-label">{'// projects'}</span>
            </div>
            <IDEProjects />
          </div>
        </div>
      </section>

      {/* ── SKILLS: Kinetic Ticker ────────────────────────────────── */}
      <section id="skills" className="section kinetic-section">
        <div className="container">
          <div className="reveal">
            <div className="section-marker">
              <span className="section-marker-num">03</span>
              <span className="section-marker-label">{'~ skills && technologies'}</span>
            </div>
          </div>
        </div>
        <KineticSkills />
      </section>

      {/* ── JOURNEY: Academic credentials & professional timeline ────────── */}
      <section id="journey" className="section home-journey-section">
        <div className="container">
          <div className="reveal">
            <div className="section-marker">
              <span className="section-marker-num">04</span>
              <span className="section-marker-label">$ academic --profile --achievements</span>
            </div>

            <div className="home-journey-shell">
              {/* Academic Header — University Context */}
              <header className="home-journey-header">
                <p className="home-journey-pre">{'// formal education & professional development'}</p>
                <h2 className="home-journey-title">Academic Profile & Growth.</h2>
                <div className="home-journey-academic-meta">
                  <div className="home-academic-card">
                    <span className="home-academic-label">University</span>
                    <span className="home-academic-value">Lovely Professional University</span>
                  </div>
                  <div className="home-academic-card">
                    <span className="home-academic-label">Degree</span>
                    <span className="home-academic-value">B.Tech — CS &amp; Engineering</span>
                  </div>
                  <div className="home-academic-card">
                    <span className="home-academic-label">Expected</span>
                    <span className="home-academic-value">2027</span>
                  </div>
                </div>
              </header>

              <div className="home-journey-grid">
                {/* Timeline — Center */}
                <div className="home-journey-timeline">
                  <p className="home-tl-label">milestones &amp; achievements</p>
                  {journeyPreview.map((entry, idx) => (
                    <article
                      key={`${entry.year}-${entry.title}-${idx}`}
                      className={`home-journey-item home-journey-${entry.type}`}
                    >
                      <span className="home-journey-year">{entry.year}</span>
                      <div className="home-journey-main">
                        <span className="home-journey-kind">{entry.type}</span>
                        <h3 className="home-journey-item-title">{entry.title}</h3>
                        <p className="home-journey-item-org"># {entry.org}</p>
                        <p className="home-journey-item-desc">{entry.desc}</p>
                      </div>
                    </article>
                  ))}
                  <p className="home-tl-footer">
                    <Link href="/journey" className="home-view-full">
                      view complete timeline →
                    </Link>
                  </p>
                </div>

                {/* Side Panel — Certifications + Resume */}
                <aside className="home-journey-side">
                  {/* Certifications Block */}
                  <div className="home-cert-stack">
                    <p className="home-cert-pre">professional certifications</p>
                    {certPreview.map((cert, idx) => (
                      <article key={`${cert.title}-${idx}`} className="home-cert-item">
                        <div className="home-cert-header">
                          <h3 className="home-cert-title">{cert.title}</h3>
                          <span className="home-cert-date">{cert.date}</span>
                        </div>
                        <p className="home-cert-issuer">{cert.issuer}</p>
                      </article>
                    ))}
                  </div>

                  {/* Resume CTA — Prominent */}
                  <div className="home-resume-card">
                    <p className="home-resume-pre">complete cv</p>
                    <h3 className="home-resume-title">Full Resume</h3>
                    <p className="home-resume-sub">
                      Comprehensive academic record, certifications, projects, technical skills, and professional experience.
                    </p>
                    <a href={siteConfig.resume.url} download className="home-resume-btn">
                      ↓ Download CV
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ────────────────────────────────────────────────── */}
      <section id="contact" className="section closing-section">
        <div className="container">
          <div className="reveal closing-inner">
            <p className="closing-pre">{"// what's next"}</p>
            <h2 className="closing-headline">
              Let&apos;s build<br />something real.
            </h2>
            <p className="closing-sub">
              Open to the right opportunity — research collaborations,
              product ideas, or technically interesting problems.
              Don&apos;t be a stranger.
            </p>
            <ul className="closing-links">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="closing-link">
                  <span className="closing-link-type">email</span>
                  <span className="closing-link-val">{siteConfig.contact.email}</span>
                  <span className="closing-link-arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="closing-link"
                >
                  <span className="closing-link-type">github</span>
                  <span className="closing-link-val">@akanupam</span>
                  <span className="closing-link-arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="closing-link"
                >
                  <span className="closing-link-type">linkedin</span>
                  <span className="closing-link-val">aditanupam</span>
                  <span className="closing-link-arrow">→</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.resume.url} download className="closing-link">
                  <span className="closing-link-type">resume</span>
                  <span className="closing-link-val">download CV</span>
                  <span className="closing-link-arrow">↓</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
