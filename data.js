// ==========================================================================
// PORTFOLIO CONFIGURATION & DATA
// Personalized for Ayush Barve (Specializing in ML & Cybersecurity)
// ==========================================================================

const PORTFOLIO_DATA = {
  personal: {
    initials: "AB",
    name: "Ayush Barve",
    headlineNameFirst: "Ayush",
    headlineNameSecond: "Barve",
    availability: "Available for opportunities & collaborations",
    roles: [
      "Machine Learning Engineer",
      "ML & Cybersecurity Specialist",
      "Intelligent Systems Developer",
      "Applied AI Researcher"
    ],
    tagline: "Building scalable digital experiences with modern technologies, premium UI/UX, and intelligent systems. Specializing in Machine Learning & Cybersecurity.",
    bioShort: "I'm an engineer specializing in Machine Learning and Cybersecurity, focused on building intelligent systems, resilient security architectures, and scalable digital experiences.",
    bioExtended: [
      "My passion lies at the intersection of applied machine learning, quantitative intelligence, and cybersecurity. I care about designing robust predictive models, secure backend architectures, and polished user experiences that make complex systems feel effortless.",
      "Constantly exploring cutting-edge AI research, algorithmic systems, spatial intelligence, and defensive cybersecurity practices."
    ],
    email: "22barveayush@gmail.com",
    resumeUrl: "#contact",
    instagramUrl: "https://www.instagram.com/9yushh?stkn=MWkyMXB6b2FicW80Nw==",
    githubUrl: "https://github.com/ayushbarve9",
    linkedinUrl: "https://www.linkedin.com/in/ayushbarve90210",
    
    // Clean Hero Buttons: Resume first (Blue), then LinkedIn, GitHub, Instagram
    heroButtons: [
      {
        label: "Resume",
        url: "#contact",
        icon: "resume",
        isExternal: false,
        isPrimaryBlue: true
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ayushbarve90210",
        icon: "linkedin",
        isExternal: true
      },
      {
        label: "GitHub",
        url: "https://github.com/ayushbarve9",
        icon: "github",
        isExternal: true
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/9yushh?stkn=MWkyMXB6b2FicW80Nw==",
        icon: "instagram",
        isExternal: true
      }
    ],

    // Clean Redirection Tabs in Contact Section
    contactTabs: [
      {
        type: "EMAIL",
        label: "22barveayush@gmail.com",
        url: "mailto:22barveayush@gmail.com",
        icon: "✉️",
        isExternal: false
      },
      {
        type: "GITHUB",
        label: "github.com/ayushbarve9",
        url: "https://github.com/ayushbarve9",
        icon: "🐙",
        isExternal: true
      },
      {
        type: "LINKEDIN",
        label: "linkedin.com/in/ayushbarve90210",
        url: "https://www.linkedin.com/in/ayushbarve90210",
        icon: "💼",
        isExternal: true
      },
      {
        type: "INSTAGRAM",
        label: "instagram.com/9yushh",
        url: "https://www.instagram.com/9yushh?stkn=MWkyMXB6b2FicW80Nw==",
        icon: "📸",
        isExternal: true
      },
      {
        type: "RESUME",
        label: "Download / View Resume",
        url: "#contact",
        icon: "📄",
        isExternal: false
      }
    ]
  },

  // Achievements section matching image 5
  achievements: {
    metrics: [
      {
        icon: "🏆",
        value: 5,
        suffix: "+",
        label: "Projects Built",
        desc: "Full stack, ML & Security"
      },
      {
        icon: "✨",
        value: 16,
        suffix: "+",
        label: "Technical Skills",
        desc: "Python, R, ML & Security"
      }
    ],
    currentlyExploring: {
      badge: "CURRENTLY EXPLORING",
      title: "Machine Learning • Cybersecurity • Quantitative Systems",
      desc: "Shipping predictive models, building defensive cryptographic architectures, and engineering deterministic algorithmic pipelines."
    }
  },

  stats: [
    { value: 5, suffix: "+", label: "Projects Built", desc: "AI, ML, and security codebases" },
    { value: 16, suffix: "+", label: "Technologies", desc: "Across ML, R, Python & security" },
    { value: 5, suffix: "", label: "Verified Credentials", desc: "Deloitte, Goldman Sachs, Anthropic, HackerRank" },
    { value: 4, suffix: "+", label: "Core Domains", desc: "ML, Cybersecurity, Quant & Web" }
  ],

  skillsCategories: [
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-Learn", icon: "📊" },
        { name: "Google GenAI", icon: "🧠" },
        { name: "OpenCV", icon: "👁️" },
        { name: "Data Modeling", icon: "📈" }
      ]
    },
    {
      category: "Languages & Analytics",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "R Programming", icon: "📉" },
        { name: "TypeScript", icon: "⚡" },
        { name: "JavaScript", icon: "🟨" },
        { name: "C++", icon: "⚙️" },
        { name: "SQL", icon: "🗄️" }
      ]
    },
    {
      category: "Cybersecurity & Systems",
      skills: [
        { name: "Network Security", icon: "🛡️" },
        { name: "Password Hashing", icon: "🔐" },
        { name: "Access Control / RBAC", icon: "🔑" },
        { name: "Secure API Design", icon: "🔒" },
        { name: "Vulnerability Analysis", icon: "🔍" },
        { name: "Linux Security", icon: "🐧" }
      ]
    },
    {
      category: "Full Stack & Web",
      skills: [
        { name: "React 19", icon: "⚛️" },
        { name: "Node.js", icon: "🟩" },
        { name: "Express", icon: "⚙️" },
        { name: "Flask", icon: "🧪" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "REST APIs", icon: "🔗" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "Supabase", icon: "⚡" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "SQLite", icon: "🗃️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Data Warehousing", icon: "📦" }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "Vite", icon: "⚡" },
        { name: "Postman", icon: "📮" },
        { name: "VS Code", icon: "💻" },
        { name: "Linux CLI", icon: "🖥️" }
      ]
    }
  ],

  marqueeSkills: [
    "Python", "Machine Learning", "Cybersecurity", "R Programming", "Google GenAI", 
    "PyTorch", "React 19", "TypeScript", "Flask", "Supabase", "Scikit-Learn", 
    "Node.js", "Docker", "PostgreSQL", "Network Security", "Git"
  ],

  // Selected projects (Nautilus Trader removed as requested; only user's own projects kept)
  projects: [
    {
      id: "kaiser-ai",
      number: "01",
      badge: "AI & SPATIAL TRIAGE",
      title: "KAISER AI Platform",
      subtitle: "Autonomous civic action & resolution platform with Google GenAI",
      description: "A full-scale intelligence platform integrating real-time spatial clustering, Google GenAI analysis, and interactive geospatial mapping for civic infrastructure incident triage and automated resolution dispatch.",
      tags: ["React 19", "TypeScript", "Google GenAI", "Supabase", "Leaflet", "Express", "Vite"],
      liveUrl: "https://github.com/ayushbarve9/kaiser-ai-app",
      githubUrl: "https://github.com/ayushbarve9/kaiser-ai-app",
      imageTheme: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      icon: "🧠",
      caseStudy: {
        summary: "KAISER AI tackles municipal triage by marrying Google GenAI with live spatial mapping. It automatically categorizes citizen reports, detects duplicate incidents, and prioritizes urgent hazards.",
        highlights: [
          "Integrated Google GenAI for automated visual and contextual report classification.",
          "Geospatial clustering algorithm using Leaflet and Supabase backend to map incidents.",
          "Real-time status updates and animated triage dashboards built with React 19 & Tailwind CSS.",
          "Designed with resilient API endpoints and robust data validation."
        ],
        stack: ["React 19", "TypeScript", "@google/genai", "Supabase", "Leaflet", "Express", "Vite"]
      }
    },
    {
      id: "digital-diary",
      number: "02",
      badge: "CYBERSECURITY & PYTHON",
      title: "Digital Diary Security App",
      subtitle: "Secure personal web app with cryptographic password hashing",
      description: "A security-conscious web platform built in Python with Flask, featuring salted password hashing, authenticated session isolation, and strict owner-only database access protections.",
      tags: ["Python", "Flask", "SQLite", "Cybersecurity", "Authentication"],
      liveUrl: "https://github.com/ayushbarve9/Digital-Diary-",
      githubUrl: "https://github.com/ayushbarve9/Digital-Diary-",
      imageTheme: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      icon: "🔐",
      caseStudy: {
        summary: "Digital Diary demonstrates defensive security principles applied to web applications. It protects user personal entries against common vulnerabilities through strict authentication and sanitized SQL operations.",
        highlights: [
          "Implemented salted password hashing preventing plaintext compromise.",
          "Session token authentication preventing unauthorized data crossover between users.",
          "Protected against SQL injection with parameterized queries on SQLite.",
          "Clean, minimalist Python and Flask architecture with responsive views."
        ],
        stack: ["Python", "Flask", "SQLite", "HTML5/CSS3", "Auth Security"]
      }
    }
  ],

  // Reordered Verified Certifications:
  // Row 1: Node.js (HackerRank) -> Cyber Job (Deloitte) -> Internal Audit (Goldman Sachs)
  // Row 2: Claude Code 101 (Anthropic) -> Claude 101 (Anthropic)
  certificates: [
    {
      id: "hackerrank-node",
      title: "Node (Basic) Certification",
      issuer: "HackerRank",
      platform: "HackerRank Skill Test",
      issuedDate: "September 9th, 2026",
      badge: "BACKEND DEV",
      icon: "⚡",
      verificationCode: "ID: D3B342648BBB",
      description: "Passed the official HackerRank skill certification test for Node.js, event-driven I/O, server architectures, and asynchronous control flows.",
      tags: ["Node.js", "JavaScript", "Asynchronous I/O", "REST Services"],
      brandColor: "#2ec866"
    },
    {
      id: "deloitte-cyber",
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      platform: "Forage",
      issuedDate: "September 9th, 2026",
      badge: "CYBERSECURITY",
      icon: "🛡️",
      verificationCode: "6aa173d1ef005a644621a05c",
      description: "Completed practical simulation tasks in practical Cyber Security, threat assessment, and enterprise defensive strategies authorized by Tina McCreery, Chief HR Officer, Deloitte.",
      tags: ["Cybersecurity", "Threat Analysis", "Security Strategy", "Incident Assessment"],
      brandColor: "#86bc25"
    },
    {
      id: "goldman-sachs-audit",
      title: "Internal Audit Job Simulation",
      issuer: "Goldman Sachs",
      platform: "Forage",
      issuedDate: "September 8th, 2026",
      badge: "QUANT & RISK",
      icon: "🏦",
      verificationCode: "6a9fea431c45172ff21c288f",
      description: "Completed simulation tasks covering Foundations of Internal Audit and Risk Assessment in Global Banking & Markets authorized by Tom Brunskill, Co-Founder of Forage.",
      tags: ["Risk Assessment", "Global Banking", "Audit Analytics", "Internal Controls"],
      brandColor: "#7399c6"
    },
    {
      id: "claude-code-101",
      title: "Claude Code 101",
      issuer: "Anthropic",
      platform: "Anthropic Academy",
      issuedDate: "September 2026",
      badge: "AI SYSTEMS",
      icon: "🤖",
      verificationCode: "Anthropic Verified",
      description: "Certificate of Completion for mastering Claude Code architecture, programmatic AI tool integration, and agentic software workflows.",
      tags: ["Claude Code", "Agentic AI", "Prompt Architecture", "AI Tooling"],
      brandColor: "#65764d"
    },
    {
      id: "claude-101",
      title: "Claude 101",
      issuer: "Anthropic",
      platform: "Anthropic Academy",
      issuedDate: "September 2026",
      badge: "AI FOUNDATIONS",
      icon: "🧠",
      verificationCode: "Anthropic Verified",
      description: "Certificate of Completion covering fundamental Claude capabilities, conversational context management, and generative model deployment.",
      tags: ["Anthropic", "Generative AI", "LLM Foundations", "System Prompting"],
      brandColor: "#d97706"
    }
  ],

  specializations: [
    {
      title: "Machine Learning & Predictive Systems",
      badge: "Core Specialization",
      subtitle: "Applied AI • Computer Vision • Google GenAI",
      bullets: [
        "Developing end-to-end ML pipelines with Python, PyTorch, and Scikit-Learn.",
        "Integrating multimodal AI models (Google GenAI) for automated categorization and visual inference.",
        "Applying statistical modeling and R programming for time-series and quantitative insights."
      ],
      tags: ["Machine Learning", "Python", "Google GenAI", "PyTorch", "R Programming"]
    },
    {
      title: "Cybersecurity & Defensible Architectures",
      badge: "Security Focus",
      subtitle: "Application Security • Access Control • Cryptography",
      bullets: [
        "Implementing secure authentication, salted cryptographic password hashing, and session protection.",
        "Hardening web and API infrastructures against injection, unauthorized privilege escalation, and data leaks.",
        "Practicing zero-trust access control patterns across distributed services and databases."
      ],
      tags: ["Cybersecurity", "Cryptography", "Network Security", "Secure Coding", "Linux"]
    },
    {
      title: "Spatial Intelligence & Real-Time Engineering",
      badge: "Applied Systems",
      subtitle: "Geospatial Clustering • Autonomous Triage • Modern UI",
      bullets: [
        "Designing real-time incident triage systems with automated geographic clustering.",
        "Constructing high-performance web frontends with React 19, TypeScript, and Tailwind CSS.",
        "Deploying robust backend services with Node.js, Express, Flask, and Supabase."
      ],
      tags: ["React 19", "TypeScript", "Supabase", "Leaflet", "Node.js"]
    }
  ],

  // Academic Education: Only Diploma in Computer Engineering as requested
  education: [
    {
      icon: "📖",
      years: "2025 — 2027",
      degree: "Diploma in Computer Engineering",
      institution: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
      location: "Vile Parle, Mumbai",
      scorePills: [
        "Sem 4: 89.14%",
        "Sem 5 (PT 1): 97.5%"
      ],
      description: "Two years of core computer engineering fundamentals alongside hands-on full stack and AI project work."
    }
  ]
};
