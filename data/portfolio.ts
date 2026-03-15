/**
 * Portfolio Data
 * Centralized data store for all portfolio content
 * Used across different pages to maintain consistency
 */

export const portfolioData = {
  personal: {
    name: 'Aditya Kumar Anupam',
    email: 'aditanupam@gmail.com',
    phone: '+91-8002809961',
    title: 'AI & Full-Stack Developer | LLM & Agentic AI Specialist',
    photo: '/avatar.jpg',
    bio: 'AI Engineer & Full-Stack Developer passionate about building intelligent systems. Experienced in fine-tuning LLMs, RAG architectures, and agentic AI. Proficient in FastAPI, Next.js, Flutter, and cloud platforms. Currently pursuing B.Tech CSE at Lovely Professional University (LPU) with 8.30 CGPA.',
    about: {
      summary: "I'm an AI engineer who combines machine learning expertise with full-stack development to build intelligent systems. My focus areas include fine-tuning large language models, building RAG-powered applications, and exploring agentic AI workflows. I enjoy working end-to-end—from backend API architecture with FastAPI and PostgreSQL to frontend interfaces with Next.js and Flutter—and I'm constantly learning new frameworks and technologies to expand my capabilities.",
      highlights: [
        'Fine-tuning LLMs (Gemma, Llama) with PyTorch and advanced techniques',
        'Building RAG systems with LangChain, ChromaDB, and vector databases',
        'Full-stack development: FastAPI, Next.js, Flask, Django, Flutter',
        'AI Agent architecture and autonomous workflow design',
        'Production deployment experience with Docker, CI/CD, and cloud platforms'
      ],
      education: 'Bachelor of Technology — Computer Science & Engineering (Lovely Professional University, Aug\'23 – June\'27, CGPA: 8.30)',
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
      gradient: 'linear-gradient(135deg, #1A1A1A, #4A4A4A)',
    },
    {
      title: 'RAG-Powered Query Resolver',
      desc: 'Built an intelligent document-based query engine that transforms static text files into a conversational knowledge base using RAG architecture',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['Python', 'LangChain', 'Gemini Api'],
      type: 'AI/ML',
      featured: true,
      gradient: 'linear-gradient(135deg, #2A2A2A, #5A5A5A)',
    },
    {
      title: 'Hyphenification and Syllabification of Indian Scripts',
      desc: 'A linguistic processing tool for Indian scripts that implements algorithms to break words into hyphenation points and syllabic units.',
      github: 'https://github.com/akanupam/hyphenification-and-syllabification-of-indian-scripts',
      tags: ['Python', 'Linguistics', 'NLP', 'Indian Scripts', 'Unicode'],
      type: 'AI/ML',
      featured: true,
      gradient: 'linear-gradient(135deg, #3A3A3A, #6A6A6A)',
    },
    {
      title: 'Dia Chat – Fine-Tuned LLM for GenZ',
      desc: 'Engineered a personality-driven conversational LLM by curating high-quality NLP dataset and fine-tuning Gemma-3 1B Instruct. Deployed browser-based inference via WebLLM with low-latency streaming (~40 tokens/sec).',
      github: 'https://github.com/DiaLabs/dia-chat',
      tags: ['PyTorch', 'Gemma-3', 'Fine-tuning', 'WebLLM', 'Unsloth'],
      type: 'AI/ML',
      featured: true,
      gradient: 'linear-gradient(135deg, #4A3A6A, #7A6A9A)',
    },
    {
      title: 'Custom-tool-agent',
      desc: 'A Python-based agent demonstrating automated tooling, intelligent task execution, and modular agentic workflows.',
      github: 'https://github.com/akanupam/Custom-tool-agent',
      tags: ['Python', 'Agents', 'Automation'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #1A1A1A, #555555)',
    },
    {
      title: 'Tavily Search Agent',
      desc: 'An autonomous search agent integrating the Tavily API for intelligent web search, summarization, and research automation.',
      github: 'https://github.com/akanupam/tavily-search-agent',
      tags: ['Python', 'Agents', 'APIs'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #2D2D2D, #5D5D5D)',
    },
    {
      title: 'iTweet – Django Social App',
      desc: 'A full-featured Django-based social media web app supporting authentication, user posts, and backend MVC architecture.',
      github: 'https://github.com/akanupam/iTweet-Django-project',
      tags: ['Python', 'Django', 'Web'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #3D3D3D, #6D6D6D)',
    },
    {
      title: 'Jharkhand Trip Itinerary Planner',
      desc: 'A JavaScript-based itinerary planner offering structured routes, travel insights, and dynamic recommendations for Jharkhand tourism.',
      github: 'https://github.com/akanupam/Jharkhand_trip_itinerary_planner',
      tags: ['JavaScript', 'Web', 'APIs'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #252525, #525252)',
    },
    {
      title: 'Agentic Joking Bot',
      desc: 'An LLM-powered bot that generates developer-oriented jokes using lightweight agentic workflows.',
      github: 'https://github.com/akanupam/agentic-joking-bot',
      tags: ['Python', 'LLM', 'Agents'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #1F1F1F, #4F4F4F)',
    },
    {
      title: 'Aditya Portfolio',
      desc: 'A modern personal portfolio website showcasing projects, experience, and clean UI built with responsive front-end design.',
      github: 'https://github.com/akanupam/Aditya-Portfolio',
      tags: ['JavaScript', 'Frontend', 'Web'],
      type: 'Web App',
      featured: false,
      gradient: 'linear-gradient(135deg, #353535, #656565)',
    },
    {
      title: 'PyTorch Journey',
      desc: 'A collection of deep learning experiments exploring model training, optimization, and PyTorch fundamentals.',
      github: 'https://github.com/akanupam/PyTorch-journey',
      tags: ['Python', 'PyTorch', 'Deep Learning'],
      type: 'AI/ML',
      featured: false,
      gradient: 'linear-gradient(135deg, #282828, #585858)',
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
      'FastAPI',
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
      'SQLAlchemy',
      'SQLModel',
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

  softSkills: [
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Attention to Detail',
    'Consistency',
    'Self-Directed Learning',
    'Technical Communication',
    'Team Collaboration',
    'Analytical Mindset',
    'Research & Experimentation',
  ],

  journey: [
    {
      year: '2020',
      type: 'education' as const,
      title: 'Matriculation — 94.80%',
      org: 'M P I Senior Secondary School',
      desc: 'Completed secondary education in Begusarai, Bihar with distinction. Built foundational knowledge in mathematics, sciences, and problem-solving.',
    },
    {
      year: '2022',
      type: 'education' as const,
      title: 'Intermediate (12th) — 86.40%',
      org: 'Pataliputra Central School',
      desc: 'Completed intermediate education in Khagaria, Bihar. Developed interests in physics, mathematics, and computer science that shaped my career path.',
    },
    {
      year: '2023',
      type: 'education' as const,
      title: 'B.Tech CSE — Lovely Professional University',
      org: 'LPU, Phagwara, Punjab',
      desc: 'Enrolled in Bachelor of Technology in Computer Science & Engineering. Currently maintaining 8.30 CGPA while building expertise in AI, full-stack development, and cloud technologies.',
    },
    {
      year: '2025',
      type: 'project' as const,
      title: 'Hyphenification & Syllabification of Indian Scripts',
      org: 'Research Project',
      desc: 'Developed linguistic processing algorithms for Indian scripts, implementing syllabification and hyphenation logic. Contributed to NLP for low-resource language support.',
    },
    {
      year: '2025',
      type: 'milestone' as const,
      title: 'Certifications in AI & Cloud Computing',
      org: 'Google, NPTEL, Coursera',
      desc: 'Completed multiple certifications: Coursera Computer Communications Specialization, NPTEL Cloud Computing, and started building formal credentials in AI/ML.',
    },
    {
      year: '2025',
      type: 'project' as const,
      title: 'Dia Chat — Fine-Tuned LLM for GenZ (Apr\'25)',
      org: 'Personal Project',
      desc: 'Curated and engineered a high-quality NLP dataset featuring personality-driven conversational dialogue. Fine-tuned Gemma-3 1B Instruct using PyTorch and Unsloth with optimization for low-latency inference (~40 tokens/sec). Deployed on-device inference via WebLLM with WebLLM and WebGPU for seamless browser-based usage.',
    },
    {
      year: '2025',
      type: 'milestone' as const,
      title: 'Cipher Schools Internship — Flutter Mobile Development (May–Jul\'25)',
      org: 'Cipher Schools (EdTech Company)',
      desc: 'Completed structured training in cross-platform mobile application development using Flutter. Built production-ready apps with PostgreSQL and Supabase backend integration, implementing secure JWT-based authentication and real-time database operations. Designed modern Material 3 UI components with clean code architecture.',
    },
    {
      year: '2025',
      type: 'project' as const,
      title: 'RAG-Powered Query Resolver with Google Gemini (Oct\'25)',
      org: 'Personal Project',
      desc: 'Constructed a document-driven intelligent query engine using Retrieval-Augmented Generation (RAG) architecture to convert static files into a conversational knowledge base. Leveraged Google Gemini API for context-aware responses while reducing irrelevant outputs. Designed a complete retrieval pipeline using ChromaDB for vector storage and HuggingFace embeddings for semantic search.',
    },
    {
      year: '2026',
      type: 'project' as const,
      title: 'Secure Social Media REST API — FastAPI (Feb\'26)',
      org: 'Personal Project',
      desc: 'Architected a professional RESTful backend using FastAPI and PostgreSQL with modular, scalable design patterns. Handled users, posts, authentication, and voting workflow. Structured data management with SQLAlchemy ORM and Alembic-driven migrations for controlled schema evolution. Secured all endpoints through JWT-based authentication (OAuth2) with CORS support for seamless frontend integration.',
    },
    {
      year: '2027',
      type: 'education' as const,
      title: 'B.Tech CSE — Expected Graduation',
      org: 'Lovely Professional University',
      desc: 'Expected to complete Bachelor of Technology in Computer Science & Engineering with specialized expertise in AI, full-stack development, and cloud technologies.',
    },
  ],

  certifications: [
    {
      title: 'Computer Communications Specialization',
      issuer: 'Coursera',
      date: 'Aug\'24 – Oct\'24',
      credentialId: 'COURSERA-COMMS-2024',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/O3WKX2PDDD9O',
      tags: ['Networking', 'Communications', 'Specialization'],
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: 'Jan\'25 – Apr\'25',
      credentialId: 'NPTEL-CLOUD-2025',
      verifyUrl: 'https://drive.google.com/file/d/1p2Oq2uuBWwBam_fUeKzwSrQqOCAUa6KH/view?usp=sharing',
      tags: ['Cloud', 'Infrastructure', 'Deployment'],
    },
    {
      title: 'Mobile Application Development using Flutter',
      issuer: 'Cipher Schools (EdTech Company)',
      date: 'May\'25 – Jul\'25',
      credentialId: 'CIPHER-FLUTTER-2025',
      verifyUrl: 'https://www.cipherschools.com/certificate/preview?id=687e2e007efd6d5090703d13',
      tags: ['Flutter', 'Mobile', 'Cross-platform'],
    },
    {
      title: 'Build Generative AI Apps & Solutions with No-Code Tools',
      issuer: 'Generative AI Learning Path',
      date: 'Aug\'25 – Sep\'25',
      credentialId: 'GENAI-NOCODE-2025',
      verifyUrl: 'https://drive.google.com/file/d/1QwrphLmS8uC2JpUQCbZd-W2OK-pvVjmp/view?usp=sharing',
      tags: ['Generative AI', 'LLMs', 'AI Applications'],
    },
  ],
}
