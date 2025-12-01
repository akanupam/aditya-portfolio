import Head from 'next/head'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolio'
import { siteConfig } from '../config/site'

/**
 * About Page
 * Dedicated page for more detailed information about Aditya
 * Includes background, interests, and professional overview
 */
export default function About() {
  const { personal, interests } = portfolioData

  return (
    <Layout>
      <Head>
        <title>{siteConfig.pages.about.title}</title>
        <meta name="description" content={siteConfig.pages.about.description} />
        <meta property="og:title" content={siteConfig.pages.about.title} />
        <meta property="og:description" content={siteConfig.pages.about.description} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="section about">
        <div className="container">
          <h2>About me</h2>
          
          <div className="about-section">
            <p>
              {personal.about.summary}
            </p>
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
    </Layout>
  )
}
