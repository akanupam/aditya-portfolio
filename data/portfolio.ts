/**
 * Portfolio Data
 * Centralized data store for all portfolio content
 * Used across different pages to maintain consistency
 */

export const portfolioData = {
  personal: {
    name: 'Aditya',
    title: 'Full-stack developer & AI enthusiast',
    bio: 'AI Engineer working across speech processing, computer vision, and explainable ML. I turn complex ideas into functional prototypes by combining machine learning with full-stack development. Currently exploring advanced agentic workflows and modular AI frameworks to build smarter, end-to-end applications.',
    about: {
      summary: "I'm an AI engineer who enjoys building systems that bridge machine learning with real-world applications. My work spans speech processing, computer vision, and explainable ML, along with the full-stack engineering needed to bring these models to life. I like turning abstract ideas into functional prototypes, whether that means designing datasets, fine-tuning models, or integrating them into production-ready workflows.Lately I've been expanding into agentic architectures and modular AI frameworks, exploring how autonomous components can work together to solve more complex tasks. I enjoy working end-to-end—experimenting, coding, refining, and deploying—so every project becomes both a technical challenge and a chance to build something useful.",
      highlights: [
        'AI engineer bridging ML with real-world applications',
        'Expertise in speech processing, computer vision & explainable ML',
        'Full-stack engineer: from datasets & models to production deployments',
        'Exploring agentic architectures & modular AI frameworks for end-to-end solutions'
      ],
      education: 'Bachelor of Technology — Computer Science & Engineering (2027)',
    },
  },

  projects: [
    {
      title: 'College Hub – Peer-to-Peer Academic Sharing App',
      desc: 'Built a cross-platform mobile app enabling students to share study materials and access internship/job opportunities seamlessly.',
      github: 'https://github.com/akanupam/lms',
      tags: ['Flutter', 'Supabase', 'Material 3'],
      type: 'Mobile App',
      featured: true,
      gradient: 'linear-gradient(135deg, #FF6B35, #FF8555)',
    },
    {
      title: 'RAG-Powered Query Resolver',
      desc: 'Built an intelligent document-based query engine that transforms static text files into a conversational knowledge base using RAG architecture',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['Python', 'LangChain', 'Gemini Api'],
      type: 'AI/ML',
      featured: true,
      gradient: 'linear-gradient(135deg, #4ECDC4, #2FB5A8)',
    },
    {
      title: 'Custom-tool-agent',
      desc: 'A Python-based agent demonstrating automated tooling, intelligent task execution, and modular agentic workflows.',
      github: 'https://github.com/akanupam/Custom-tool-agent',
      tags: ['Python', 'Agents', 'Automation'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #FF6B35, #E55100)',
    },
    {
      title: 'Tavily Search Agent',
      desc: 'An autonomous search agent integrating the Tavily API for intelligent web search, summarization, and research automation.',
      github: 'https://github.com/akanupam/tavily-search-agent',
      tags: ['Python', 'Agents', 'APIs'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #4ECDC4, #3BA39C)',
    },
    {
      title: 'iTweet – Django Social App',
      desc: 'A full-featured Django-based social media web app supporting authentication, user posts, and backend MVC architecture.',
      github: 'https://github.com/akanupam/iTweet-Django-project',
      tags: ['Python', 'Django', 'Web'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    },
    {
      title: 'Jharkhand Trip Itinerary Planner',
      desc: 'A JavaScript-based itinerary planner offering structured routes, travel insights, and dynamic recommendations for Jharkhand tourism.',
      github: 'https://github.com/akanupam/Jharkhand_trip_itinerary_planner',
      tags: ['JavaScript', 'Web', 'APIs'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    },
    {
      title: 'Agentic Joking Bot',
      desc: 'An LLM-powered bot that generates developer-oriented jokes using lightweight agentic workflows.',
      github: 'https://github.com/akanupam/agentic-joking-bot',
      tags: ['Python', 'LLM', 'Agents'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #FF6B35, #FF8555)',
    },
    {
      title: 'Aditya Portfolio',
      desc: 'A modern personal portfolio website showcasing projects, experience, and clean UI built with responsive front-end design.',
      github: 'https://github.com/akanupam/Aditya-Portfolio',
      tags: ['JavaScript', 'Frontend', 'Web'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #4ECDC4, #2FB5A8)',
    },
    {
      title: 'PyTorch Journey',
      desc: 'A collection of deep learning experiments exploring model training, optimization, and PyTorch fundamentals.',
      github: 'https://github.com/akanupam/PyTorch-journey',
      tags: ['Python', 'PyTorch', 'Deep Learning'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #FF6B35, #FFB84D)',
    }
  ],

  skills: {
    Core_Languages: [
      'Python',
      'C++',
      'Java',
      'JavaScript',
      'TypeScript'
    ],

    Frontend_Development: [
      'React',
      'Next.js',
      'HTML/CSS',
      'Responsive Design',
      'UI/UX Implementation'
    ],

    Backend_Development: [
      'Django',
      'Node.js',
      'REST APIs',
      'Database Design',
      'Server Architecture'
    ],

    AI_ML_Engineering: [
      'PyTorch',
      'Machine Learning',
      'Deep Learning',
      'RAG Systems',
      'Agentic Workflows',
      'LangChain',
      'Generative AI'
    ],

    Mobile_Development: [
      'Flutter',
      'Cross-platform Apps',
      'Material Design'
    ],

    Databases: [
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Database Optimization'
    ],

    DevOps_Infrastructure: [
      'Docker',
      'CI/CD Pipelines',
      'Linux/Bash',
      'Cloud Deployment',
      'Git & Version Control'
    ],


    Emerging_Focus: [
      'Agentic Architectures',
      'Advanced LLM Workflows',
      'Modular AI Frameworks',
      'End-to-end ML Systems'
    ]

  },

  interests: [
    'Artificial Intelligence & Machine Learning',
    'Agentic Systems (LangChain, Workflow Automation, Google ADK)',
    'Web Development (NextJs, ReactJs, Django, Flask)',
    'DevOps & Deployment (Docker, CI/CD)',
    'Deep Learning (PyTorch, Neural Networks)',
  ],
}
