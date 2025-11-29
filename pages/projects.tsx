import Head from 'next/head'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/**
 * Projects Page
 * Dedicated page to showcase all projects
 * Can be expanded with more detailed project information
 */
export default function Projects() {
  const { projects } = portfolioData

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.projects.title}</title>
        <meta name="description" content={siteConfig.pages.projects.description} />
        <meta property="og:title" content={siteConfig.pages.projects.title} />
        <meta property="og:description" content={siteConfig.pages.projects.description} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="section">
        <div className="container">
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                <div className="project-thumbnail" style={{ background: p.gradient }}></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
