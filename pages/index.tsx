import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/**
 * Home Page - Portfolio Landing Page
 * Displays hero section, about, projects, skills, and contact information
 */
export default function Home() {
  const { projects, skills: skillsByCategory } = portfolioData
  const { personal, interests } = portfolioData

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.home.title}</title>
        <meta name="description" content={siteConfig.pages.home.description} />
        <meta property="og:title" content={siteConfig.pages.home.title} />
        <meta property="og:description" content={siteConfig.pages.home.description} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ===== HERO SECTION ===== */}
      {/* Main hero section with greeting, CTA buttons, and avatar */}
      <section id="hero" className="hero">
        <div className="container hero-container">
          {/* Hero Left - Text Content */}
          <div className="hero-left">
            <h1 className="hero-heading">
              Hello, <span className="gradient-text">I'm {personal.name}</span> 
            </h1>
            
            <p className="hero-subtitle">
              {personal.bio}
            </p>

            {/* Primary action buttons */}
            <div className="hero-buttons">
              <a className="btn primary" href="#contact">
                {siteConfig.contact.ctaText}
                <span className="btn-icon">→</span>
              </a>
              <a className="btn secondary" href="#projects">
                View my work
              </a>
            </div>
          </div>

          {/* Hero Right - Visual element (avatar circle) */}
          <div className="hero-right">
            <div className="hero-circle">
              <Image 
                src="/avatar.jpg" 
                alt={personal.name}
                className="hero-circle-img"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      {/* Personal introduction, education, and interests */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            {personal.about.summary}
          </p>
          <h3>Education</h3>
          <p>{personal.about.education}</p>
          <h3>Interests</h3>
          <ul className="interests-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      {/* Showcase of featured projects with links to GitHub repositories */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                {/* Project color thumbnail banner */}
                <div className="project-thumbnail" style={{background: p.gradient}}></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                {/* Technology tags */}
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {/* GitHub repository link */}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SKILLS & TECHNOLOGIES SECTION ===== */}
      {/* Technical skills organized by category (Frontend, Backend, Tools) */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          
          {/* Render skills grouped by category */}
          <div className="skills-by-category">
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="badges">
                  {items.map((skill) => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL-TO-ACTION SECTION ===== */}
      {/* Motivational section encouraging visitors to reach out */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>I'm always interested in hearing about new projects and opportunities. Whether you want to collaborate, have a question, or just want to chat, feel free to reach out!</p>
            <a href="#contact" className="btn primary btn-large">Start a Project</a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      {/* Contact methods - Email, GitHub, and LinkedIn */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>I'd love to hear from you. Feel free to reach out for internships, collaborations, or just to chat.</p>
          <div className="contact-methods">
            <a className="btn primary" href="mailto:aditanupam@gmail.com?subject=Hello%20Aditya&body=Hi%20Aditya%2C%0A%0AI%20would%20like%20to%20connect%20with%20you.">Email Me</a>
            <a className="btn ghost" href={siteConfig.socialLinks.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn ghost" href={siteConfig.socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
