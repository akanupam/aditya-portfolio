/**
 * Site Configuration
 * Centralized configuration for site metadata, social links, and external URLs
 */

export const siteConfig = {
  name: "Aadi's Space",
  description: "Full-stack developer & AI enthusiast. I create fast, scalable web applications using React, Next.js, and modern technologies.",
  author: 'Aditya',
  url: 'aditanupam.dev',

  socialLinks: {
    github: {
      url: 'https://github.com/akanupam',
      label: 'GitHub',
      title: 'GitHub',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/aditanupam/',
      label: 'LinkedIn',
      title: 'LinkedIn',
    },
  },

  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '#contact' },
  ],

  pages: {
    home: {
      title: 'Home | Aadi\'s Web',
      description: 'Full-stack developer & AI enthusiast creating fast, scalable web applications.',
    },
    about: {
      title: 'About | Aadi\'s Web',
      description: 'Learn more about Aditya, a full-stack developer interested in web development, systems, and algorithms.',
    },
    projects: {
      title: 'Projects | Aadi\'s Web',
      description: 'Explore my projects including College Hub, RAG-Powered Query Resolver, and more.',
    },
    skills: {
      title: 'Skills | Aadi\'s Web',
      description: 'Explore my technical skills and expertise in AI/ML, full-stack development, and DevOps.',
    },
  },

  contact: {
    email: 'aditanupam@gmail.com',
    ctaText: 'Get in touch',
  },

  resume: {
    url: '/Aditya_General_CV.pdf',
    label: 'Download Resume',
  },
}
