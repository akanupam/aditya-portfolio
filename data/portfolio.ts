/**
 * Portfolio Data
 * Centralized data store for all portfolio content
 * Used across different pages to maintain consistency
 */

export const portfolioData = {
  personal: {
    name: 'Aditya',
    title: 'Full-stack developer & AI enthusiast',
    bio: 'I create fast, scalable web applications using React, Next.js, and modern technologies. Turning complex problems into elegant code.',
    about: {
      summary: 'I am a goal-oriented professional with good time management and problem-solving skills. Recognized for reliability and adaptability, with a strong capacity to learn and apply new skills. Committed to leveraging technical expertise and problem-solving skills that enhance team productivity and drive organizational growth.',
      education: 'Bachelor of Technology — Computer Science & Engineering (2027)',
    },
  },

  projects: [
    {
      title: 'College Hub – Peer-to-Peer Academic Sharing App',
      desc: 'Built a cross-platform mobile app enabling students to share study materials and access internship/job opportunities seamlessly.',
      github: 'https://github.com/akanupam/lms',
      tags: ['Flutter', 'Supabase', 'Material 3'],
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    },
    {
      title: 'RAG-Powered Query Resolver',
      desc: 'Built an intelligent document-based query engine that transforms static text files into a conversational knowledge base using RAG architecture',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['Python', 'LangChain', 'Gemini Api'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    },
    {
      title: 'Jharkhand trip itinerary planner',
      desc: 'A comprehensive travel itinerary planning service for Jharkhand tourism that helps users plan sustainable trips with AI-powered recommendations.',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['JavaScript', 'Google Maps', 'Gemini Api'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    },
  ],

  skills: {
    Frontend: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind'],
    Backend: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
    Tools: ['Git', 'Linux', 'Docker', 'Webpack', 'VS Code'],
  },

  interests: [
    'Artificial Intelligence & Machine Learning',
    'Web development (React, Next.js)',
    'DevOps (CI/CD Pipelines, Docker, Kubernetes)',
    'Data Structures & Algorithm',
  ],
}
