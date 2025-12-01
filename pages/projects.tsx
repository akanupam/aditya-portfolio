import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/**
 * Projects Page
 * Dedicated page showcasing all projects with filtering by type
 */
export default function Projects() {
  const { projects } = portfolioData
  const [activeFilter, setActiveFilter] = useState('All')

  // Get unique project types
  const projectTypes = ['All', ...Array.from(new Set(projects.map(p => p.type)))]

  // Filter projects based on active tab
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.type === activeFilter)

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.projects.title}</title>
        <meta name="description" content={siteConfig.pages.projects.description} />
        <meta property="og:title" content={siteConfig.pages.projects.title} />
        <meta property="og:description" content={siteConfig.pages.projects.description} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="section projects-page">
        <div className="container">
          <h2>All Projects</h2>
          <p className="section-subtitle">Explore my complete portfolio of AI/ML systems, web applications, and innovative projects.</p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {projectTypes.map((type) => (
              <button
                key={type}
                className={`filter-tab ${activeFilter === type ? 'active' : ''}`}
                onClick={() => setActiveFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <ul className="projects projects-grid">
            {filteredProjects.map((p) => (
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

          {filteredProjects.length === 0 && (
            <div className="no-results">
              <p>No projects found in this category.</p>
            </div>
          )}

          {/* GitHub CTA Button */}
          <div className="github-cta">
            <p>Want to explore more projects and contributions?</p>
            <a 
              href={siteConfig.socialLinks.github.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn primary"
            >
              Explore More on GitHub →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
