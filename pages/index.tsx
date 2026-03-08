import Head from 'next/head'
import { useRef } from 'react'
import Layout from '../components/Layout'
import HeroModel from '../components/HeroModel'
import TerminalAbout from '../components/TerminalAbout'
import IDEProjects from '../components/IDEProjects'
import KineticSkills from '../components/KineticSkills'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

export default function Home() {
  const { personal } = portfolioData
  const aboutRef = useRef<HTMLElement>(null)

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

      {/* ── ABOUT: Terminal REPL ──────────────────────────────────── */}
      <section id="about" className="section terminal-section" ref={aboutRef}>
        <div className="container">
          <div className="reveal">
            <div className="section-marker">
              <span className="section-marker-num">01</span>
              <span className="section-marker-label">$ aditya --about</span>
            </div>
            <TerminalAbout />
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
