import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
              Hello, <span className="gradient-text">I&apos;m {personal.name}</span> 
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
              {/* <a className="btn secondary" href="#projects">
                View my work
              </a> */}
              <a className="btn secondary" href={siteConfig.resume.url} download>
                📄 {siteConfig.resume.label}
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
          
          <div className="about-section">
            <ul className="about-highlights">
              {personal.about.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="about-section">
            <h3>Education</h3>
            <p className="about-detail">{personal.about.education}</p>
          </div>

          <div className="about-section">
            <h3>Interests</h3>
            <ul className="interests-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      {/* Showcase of featured projects with links to GitHub repositories */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <Link href="/projects" className="view-all-link">View All Projects →</Link>
          </div>
          <ul className="projects">
            {projects.filter(p => p.featured).map((p) => (
              <li key={p.title} className={`project ${p.featured ? 'featured' : ''}`}>
                {p.featured && <span className="project-badge">Featured</span>}
                <div className="project-thumbnail" style={{background: p.gradient}}>
                  <span className="project-type">{p.type}</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SKILLS & TECHNOLOGIES SECTION ===== */}
      {/* Featured skills organized by category with link to full skills page */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <Link href="/skills" className="view-all-link">View All Skills →</Link>
          </div>
          
          {/* Render featured skills (core expertise) */}
          <div className="skills-by-category">
            {Object.entries(skillsByCategory)
              .filter(([category]) => ['AI_ML_Engineering', 'Frontend_Development', 'Backend_Development'].includes(category))
              .map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3>{category.replace(/_/g, ' ')}</h3>
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
      {/* Professional collaboration invitation */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Ready to Collaborate?</h2>
            <p className="cta-subtitle">I&apos;m always excited about interesting challenges and opportunities to create impactful solutions.</p>
            <div className="cta-buttons-group">
              <a href="mailto:aditanupam@gmail.com?subject=Project%20Inquiry&body=Hi%20Aditya%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity%20with%20you." className="btn primary btn-large">Start a Conversation</a>
              <Link href="/projects" className="btn secondary btn-large">Explore My Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      {/* Multiple contact channels */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Connect With Me</h2>
            <p className="contact-subtitle">Reach out through your preferred channel. I&apos;ll get back to you promptly.</p>          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-header">
                <h3>Email</h3>
              </div>
              <p>For project inquiries and direct communication</p>
              <a href="mailto:aditanupam@gmail.com?subject=Project%20Inquiry&body=Hi%20Aditya%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity%20with%20you." className="contact-link">Send Email →</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-header">
                <h3>LinkedIn</h3>
              </div>
              <p>Connect professionally and view my experience</p>
              <a href={siteConfig.socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="contact-link">Visit Profile →</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-header">
                <h3>GitHub</h3>
              </div>
              <p>Explore my projects and open source work</p>
              <a href={siteConfig.socialLinks.github.url} target="_blank" rel="noopener noreferrer" className="contact-link">View Contributions →</a>
            </div>

            <div className="contact-card">
              <div className="contact-header">
                <h3>Resume</h3>
              </div>
              <p>View my professional CV and qualifications</p>
              <a href={siteConfig.resume.url} download className="contact-link">Download Resume →</a>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}
