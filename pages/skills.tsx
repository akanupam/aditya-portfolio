import Head from 'next/head'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/**
 * Skills Page
 * Dedicated page showcasing all skills and technologies organized by category
 */
export default function Skills() {
  const { skills: skillsByCategory } = portfolioData

  // Define featured categories to highlight on this page
  const featuredCategories = [
    'AI_ML_Engineering',
    'Frontend_Development',
    'Backend_Development'
  ]

  return (
    <Layout>
      <Head>
        <title>Skills | Aadi's Web</title>
        <meta name="description" content="Explore my technical skills and expertise in AI/ML, full-stack development, and DevOps." />
        <meta property="og:title" content="Skills | Aadi's Web" />
        <meta property="og:description" content="Explore my technical skills and expertise in AI/ML, full-stack development, and DevOps." />
        <meta property="og:type" content="website" />
      </Head>

      <section className="section skills-page">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">A comprehensive overview of my technical expertise across AI/ML, full-stack development, and modern technologies.</p>

          {/* Featured Skills Section */}
          <div className="featured-skills-container">
            <h3 className="featured-title">Core Expertise</h3>
            <div className="skills-grid featured">
              {Object.entries(skillsByCategory)
                .filter(([category]) => featuredCategories.includes(category))
                .map(([category, items]) => (
                  <div key={category} className="skill-card featured">
                    <h4>{category.replace(/_/g, ' ')}</h4>
                    <div className="badges">
                      {(items as string[]).map((skill) => (
                        <span key={skill} className="badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Skills Section */}
          <div className="all-skills-container">
            <h3 className="all-skills-title">Complete Skill Set</h3>
            <div className="skills-grid all">
              {Object.entries(skillsByCategory)
                .filter(([category]) => !featuredCategories.includes(category))
                .map(([category, items]) => (
                  <div key={category} className="skill-card">
                    <h4>{category.replace(/_/g, ' ')}</h4>
                    <div className="badges">
                      {(items as string[]).map((skill) => (
                        <span key={skill} className="badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Summary CTA */}
          <div className="skills-cta">
            <p>These skills are continuously evolving as I explore new technologies and best practices.</p>
            <a href="/?#contact" className="btn primary">
              Let's collaborate →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
