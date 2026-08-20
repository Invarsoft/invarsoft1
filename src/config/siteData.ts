export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  metrics: string;
  accent: string;
}

export interface AICapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  icon: string;
}

export interface AIScenario {
  id: string;
  name: string;
  input: string;
  processingStep: string;
  logicStep: string;
  automationStep: string;
  result: string;
  outputMetric: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'AI Solutions' | 'Software' | 'Web Platforms' | 'Digital Products';
  industry: string;
  shortDesc: string;
  challenge: string;
  strategy: string;
  architecture: string[];
  services: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SampleWebsite {
  id: string;
  title: string;
  category: 'Corporate' | 'Real Estate' | 'Technology' | 'E-commerce' | 'Hospitality' | 'Manufacturing' | 'Creative' | 'AI' | 'Experimental';
  tagline: string;
  description: string;
  techBadges: string[];
  accentColor: string;
  mockupUrl: string;
  previewUrl: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'AI' | 'Technology' | 'Design' | 'Engineering' | 'Business' | 'Digital Transformation';
  author: string;
  role: string;
  date: string;
  readTime: string;
  snippet: string;
  content: string;
  image: string;
}

export interface ClientPortalData {
  clientName: string;
  company: string;
  projectName: string;
  progressPercent: number;
  phase: string;
  milestones: { name: string; status: 'completed' | 'in_progress' | 'upcoming'; dueDate: string }[];
  tasks: { id: string; title: string; status: 'done' | 'in_progress' | 'pending'; assignee: string }[];
  documents: { name: string; size: string; date: string; type: string }[];
  invoices: { id: string; amount: string; status: 'Paid' | 'Pending'; date: string }[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Intelligent Systems',
    shortDesc: 'Custom AI systems, AI automation, intelligent assistants, RAG pipelines, and business intelligence.',
    fullDesc: 'We engineer custom LLM pipelines, autonomous AI agents, enterprise search systems, and automated decision workflows tailored to your core business operations.',
    icon: 'Bot',
    features: ['Custom AI Agents & RAG', 'Automated Business Workflows', 'Natural Language Interfaces', 'Document Intelligence & Extraction'],
    metrics: 'Up to 75% process acceleration',
    accent: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    category: 'Enterprise Engineering',
    shortDesc: 'Scalable web applications, SaaS platforms, real-time dashboards, enterprise systems, and custom software.',
    fullDesc: 'Resilient cloud architecture and modern full-stack web platforms built with clean code practices, security compliance, and microservice infrastructure.',
    icon: 'Code2',
    features: ['SaaS Product Engineering', 'High-Performance APIs', 'Cloud Microservices', 'Real-Time Telemetry Dashboards'],
    metrics: '99.99% operational uptime SLA',
    accent: 'from-indigo-600 to-violet-600'
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    category: 'Digital Web Platforms',
    shortDesc: 'Premium corporate websites, conversion-focused platforms, interactive experiences, and fast headless CMS implementations.',
    fullDesc: 'High-converting, lightning-fast digital web experiences designed with editorial flair, headless CMS backends, dynamic animations, and SEO excellence.',
    icon: 'Globe',
    features: ['Headless Next.js Architecture', 'Interactive WebGL / 3D Visuals', 'Ultra-fast Core Web Vitals', 'Enterprise CMS Integration'],
    metrics: '<0.8s average page load speed',
    accent: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    category: 'Product Strategy & UX',
    shortDesc: 'Product strategy, UI/UX systems, MVP development, product engineering, and continuous iterative evolution.',
    fullDesc: 'End-to-end product design and technical execution. We turn complex user needs into elegant, scalable digital products users love.',
    icon: 'Layers',
    features: ['Design Systems & UI/UX', 'Rapid MVP Development', 'User Research & Prototyping', 'Product Architecture Scaling'],
    metrics: '4x faster time-to-market',
    accent: 'from-violet-600 to-fuchsia-600'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    category: 'Operational Efficiency',
    shortDesc: 'Workflow automation, AI-powered business processes, API integrations, and operational optimization.',
    fullDesc: 'Eliminate repetitive manual tasks and data silos by building automated API orchestration pipelines and intelligent monitoring systems.',
    icon: 'Server',
    features: ['Cross-System API Integration', 'Event-Driven Automation', 'Data Pipeline Orchestration', 'Error Handling & Auditing'],
    metrics: '-60% manual operational cost',
    accent: 'from-teal-600 to-emerald-600'
  },
  {
    id: 'tech-consulting',
    title: 'Technology Consulting',
    category: 'Architecture & Strategy',
    shortDesc: 'Architecture design, technology roadmap strategy, digital transformation, and senior technical leadership.',
    fullDesc: 'Strategic guidance on modernization, cloud migration, security posture, and selecting the optimal technology stack for long-term growth.',
    icon: 'ShieldCheck',
    features: ['Cloud Infrastructure Audit', 'AI Readiness Assessment', 'Security & Compliance Strategy', 'Technical Stack Modernization'],
    metrics: '100% roadmap alignment',
    accent: 'from-blue-600 to-cyan-600'
  }
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: 'ai-assistants',
    title: 'Intelligent AI Assistants',
    tagline: 'Custom conversational agents trained on proprietary enterprise knowledge.',
    description: 'Empower your teams and customers with context-aware AI assistants that integrate directly into your database and workflow tools.',
    badge: 'Enterprise Knowledge',
    icon: 'MessageSquare'
  },
  {
    id: 'ai-automation',
    title: 'Autonomous AI Agents',
    tagline: 'Multi-step AI agents that execute complex multi-system workflows.',
    description: 'Deconstruct manual business procedures into autonomous reasoning chains that fetch data, make decisions, and invoke APIs reliably.',
    badge: 'Multi-Step Execution',
    icon: 'Zap'
  },
  {
    id: 'document-intel',
    title: 'Document Intelligence',
    tagline: 'Instant unstructured document extraction & semantic search.',
    description: 'Convert PDFs, invoices, contracts, and technical documents into structured, queryable data with 99%+ extraction accuracy.',
    badge: 'RAG & OCR',
    icon: 'FileText'
  },
  {
    id: 'business-intel',
    title: 'Predictive Business Intelligence',
    tagline: 'Turn raw operational metrics into actionable AI forecasting.',
    description: 'Continuous machine learning models that analyze market trends, user churn, and supply chain telemetry in real time.',
    badge: 'Real-Time Insights',
    icon: 'TrendingUp'
  }
];

export const AI_SCENARIOS: AIScenario[] = [
  {
    id: 'fintech-audit',
    name: 'Financial Audit & Risk Extraction',
    input: 'Upload 1,500 Quarterly Compliance Reports & Financial PDFs',
    processingStep: 'OCR Ingestion + Hybrid Vector Embedding (Pinecone)',
    logicStep: 'LLM Compliance Verification against ISO-27001 & SEC Guidelines',
    automationStep: 'Auto-flag anomalies & send summary alert to Risk Committee',
    result: 'Audit completion reduced from 14 days to 45 seconds with 99.4% accuracy.',
    outputMetric: '99.4% Accuracy / 45s Execution'
  },
  {
    id: 'customer-onboarding',
    name: 'Automated B2B Customer Onboarding',
    input: 'New Enterprise Contract Signed in Salesforce',
    processingStep: 'Trigger Webhook -> Provision Tenant DB -> Generate API Keys',
    logicStep: 'Verify KYC Documents & Match Compliance Profile',
    automationStep: 'Deploy Isolated Cloud Instance & Send Tailored Admin Invitation',
    result: 'Customer onboarding time dropped from 48 hours to zero manual intervention.',
    outputMetric: '100% Automated Onboarding'
  },
  {
    id: 'inventory-forecasting',
    name: 'Smart Logistics & Demand Planning',
    input: 'Real-time Telemetry Feed from 40 Warehouses',
    processingStep: 'Time-Series Machine Learning Model Analysis',
    logicStep: 'Predict 30-Day Stock Out Risk & Optimal Reorder Thresholds',
    automationStep: 'Dispatch Purchase Orders via ERP API to Verified Suppliers',
    result: 'Prevented stock shortages while lowering excess inventory buffer by 34%.',
    outputMetric: '-34% Excess Inventory Cost'
  }
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'nexus-ai',
    title: 'Nexus Enterprise AI Intelligence Platform',
    client: 'Nexus Financial Global',
    category: 'AI Solutions',
    industry: 'Financial Technology',
    shortDesc: 'Autonomous document parsing, financial telemetry analysis, and real-time risk assessment engine.',
    challenge: 'Nexus processed over 50,000 complex financial compliance dossiers monthly using manual analyst teams, causing operational bottlenecks and delayed reporting.',
    strategy: 'We designed a custom RAG (Retrieval-Augmented Generation) pipeline paired with dedicated LLM microservices and an interactive analyst workbench.',
    architecture: ['Vector Search DB (Pinecone)', 'FastAPI Python Microservices', 'Next.js 14 Analyst UI', 'PostgreSQL Event Store'],
    services: ['AI Engineering', 'RAG Architecture', 'UI/UX Design', 'Cloud Deployment'],
    techStack: ['Python', 'PyTorch', 'OpenAI API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS'],
    metrics: [
      { label: 'Processing Speed', value: '18x Faster' },
      { label: 'Cost Reduction', value: '-62%' },
      { label: 'Audit Accuracy', value: '99.8%' }
    ],
    image: '/projects/nexus.jpg',
    featured: true
  },
  {
    id: 'aura-health',
    title: 'Aura Digital Telehealth & Analytics SaaS',
    client: 'Aura Health Inc.',
    category: 'Software',
    industry: 'Healthcare & Biotech',
    shortDesc: 'HIPAA-compliant patient telemetry dashboard, video consultation suite, and intelligent clinical triage.',
    challenge: 'Aura needed a high-performance web platform to unify real-time biometric IoT feeds, electronic health records, and secure video consultation for 200,000+ patients.',
    strategy: 'Engineered an ultra-secure, low-latency WebRTC and WebSockets architecture with sub-second patient telemetry sync and intuitive doctor interfaces.',
    architecture: ['WebRTC Video Gateway', 'Redis Pub/Sub Real-time Feed', 'Node.js Backend Services', 'React Enterprise Dashboard'],
    services: ['Full-Stack Software Engineering', 'HIPAA Security Hardening', 'UI/UX System', 'Real-time Systems'],
    techStack: ['React', 'Node.js', 'Express', 'WebRTC', 'Redis', 'PostgreSQL', 'Tailwind CSS', 'GCP'],
    metrics: [
      { label: 'Active Monthly Patients', value: '250,000+' },
      { label: 'Latency', value: '<80ms' },
      { label: 'Uptime SLA', value: '99.99%' }
    ],
    image: '/projects/aura.jpg',
    featured: true
  },
  {
    id: 'vortex-logistics',
    title: 'Vortex Logistics Autonomous Dispatch System',
    client: 'Vortex Logistics',
    category: 'Digital Products',
    industry: 'Supply Chain & Transport',
    shortDesc: 'AI route optimization engine, fleet telemetry map, and driver automated dispatch mobile web platform.',
    challenge: 'Legacy manual dispatch systems resulted in empty cargo legs, sub-optimal routing, and high fuel burn across a fleet of 1,200 commercial trucks.',
    strategy: 'Built an interactive mapping interface with dynamic graph algorithms to optimize multi-stop delivery routes in real time.',
    architecture: ['Spatial Graph Solver', 'Mapbox GL Custom Shaders', 'Go Microservices', 'React Progressive Web App'],
    services: ['Product Strategy', 'Custom Software Development', 'Map Integration', 'Mobile Optimization'],
    techStack: ['Next.js', 'Go', 'Mapbox GL', 'Tailwind CSS', 'Kafka', 'PostGIS', 'Kubernetes'],
    metrics: [
      { label: 'Fuel Saved Daily', value: '14,500 Gal' },
      { label: 'Route Efficiency', value: '+38%' },
      { label: 'Dispatch Time', value: 'Instant' }
    ],
    image: '/projects/vortex.jpg',
    featured: true
  },
  {
    id: 'luminary-corporate',
    title: 'Luminary Global Web Platform & Brand Experience',
    client: 'Luminary Capital Partners',
    category: 'Web Platforms',
    industry: 'Venture Capital & Private Equity',
    shortDesc: 'Editorial-grade corporate digital presence with WebGL interactive portfolio graphs and headless CMS.',
    challenge: 'Luminary required a world-class website that reflected their $2B+ portfolio with editorial sophistication and dynamic web performance.',
    strategy: 'Designed a high-touch, light-surface digital showcase combining smooth page transitions, headless Sanity.io CMS, and custom interactive data visualizers.',
    architecture: ['Headless CMS (Sanity)', 'Next.js App Router', 'Three.js / WebGL Shaders', 'Vercel Edge Network'],
    services: ['Web Development', 'Brand Direction', '3D Graphics', 'CMS Architecture'],
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion', 'Sanity.io', 'Tailwind CSS'],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Organic Traffic', value: '+210%' },
      { label: 'Page Load Time', value: '0.4s' }
    ],
    image: '/projects/luminary.jpg',
    featured: true
  }
];

export const SAMPLE_WEBSITES: SampleWebsite[] = [
  {
    id: 'apex-capital',
    title: 'Apex Capital Partners',
    category: 'Corporate',
    tagline: 'Private Equity & Global Investment Management',
    description: 'Clean editorial grid layout with custom financial asset counters and interactive investor portal.',
    techBadges: ['Next.js 14', 'Tailwind CSS', 'Framer Motion'],
    accentColor: '#1E3A8A',
    mockupUrl: '/mockups/apex.jpg',
    previewUrl: 'https://apex-capital-demo.invarsoft.com'
  },
  {
    id: 'aether-ai',
    title: 'Aether AI Labs',
    category: 'AI',
    tagline: 'Next-Generation Neural Architecture Platform',
    description: 'Futuristic light-themed AI platform landing page with real-time prompt playground and WebGL visualizers.',
    techBadges: ['React', 'Three.js', 'OpenAI API', 'Tailwind'],
    accentColor: '#2563EB',
    mockupUrl: '/mockups/aether.jpg',
    previewUrl: 'https://aether-ai-demo.invarsoft.com'
  },
  {
    id: 'vanguard-realty',
    title: 'Vanguard Luxury Real Estate',
    category: 'Real Estate',
    tagline: 'Architectural Estates & High-Rise Portfolio',
    description: 'Immersive property listings with 3D virtual tour embeds, interactive floor plan filters, and agent booking.',
    techBadges: ['Next.js', 'Mapbox', 'Sanity CMS'],
    accentColor: '#0F172A',
    mockupUrl: '/mockups/vanguard.jpg',
    previewUrl: 'https://vanguard-realty-demo.invarsoft.com'
  },
  {
    id: 'velox-saas',
    title: 'Velox DevSecOps Platform',
    category: 'Technology',
    tagline: 'Automated CI/CD Vulnerability Scanner',
    description: 'High-density developer tool marketing page featuring dark-mode interactive code terminal toggles.',
    techBadges: ['TypeScript', 'Tailwind CSS', 'Lucide'],
    accentColor: '#4F46E5',
    mockupUrl: '/mockups/velox.jpg',
    previewUrl: 'https://velox-saas-demo.invarsoft.com'
  },
  {
    id: 'sanctuary-resort',
    title: 'Sanctuary Luxury Wellness Resort',
    category: 'Hospitality',
    tagline: 'Boutique Coastal Retreat & Spa',
    description: 'Fluid editorial web design featuring video backgrounds, smooth parallax scrolling, and direct room reservation.',
    techBadges: ['Next.js', 'Framer Motion', 'Stripe UI'],
    accentColor: '#0D9488',
    mockupUrl: '/mockups/sanctuary.jpg',
    previewUrl: 'https://sanctuary-demo.invarsoft.com'
  },
  {
    id: 'kronos-mfg',
    title: 'Kronos Industrial Robotics',
    category: 'Manufacturing',
    tagline: 'Autonomous Factory Automation Systems',
    description: 'Heavy industrial machinery catalog with interactive 3D CAD model viewer and spec comparison tools.',
    techBadges: ['Three.js', 'React', 'WebGL'],
    accentColor: '#334155',
    mockupUrl: '/mockups/kronos.jpg',
    previewUrl: 'https://kronos-mfg-demo.invarsoft.com'
  }
];

export const TECH_ECOSYSTEM = {
  frontend: [
    { name: 'React 18', desc: 'Component Architecture', level: 'Core' },
    { name: 'Next.js 14', desc: 'App Router & SSR', level: 'Core' },
    { name: 'TypeScript', desc: 'Type-Safe Engineering', level: 'Core' },
    { name: 'Tailwind CSS', desc: 'Utility Design System', level: 'Core' },
    { name: 'Three.js / R3F', desc: 'WebGL & 3D Visuals', level: 'Advanced' },
    { name: 'Framer Motion', desc: 'Smooth Physics Motion', level: 'Advanced' }
  ],
  backend: [
    { name: 'Node.js', desc: 'Event-Driven Microservices', level: 'Core' },
    { name: 'Python', desc: 'AI Models & Data Pipelines', level: 'Core' },
    { name: 'FastAPI', desc: 'High-Throughput REST APIs', level: 'Core' },
    { name: 'PostgreSQL', desc: 'Relational Data Store', level: 'Core' },
    { name: 'Redis', desc: 'Sub-millisecond In-Memory Cache', level: 'Core' },
    { name: 'GraphQL / REST', desc: 'API Interfaces', level: 'Core' }
  ],
  ai: [
    { name: 'LLM Orchestration', desc: 'LangChain & LlamaIndex', level: 'Core' },
    { name: 'RAG Architecture', desc: 'Enterprise Context Retrieval', level: 'Core' },
    { name: 'Vector DBs', desc: 'Pinecone, Qdrant, PgVector', level: 'Core' },
    { name: 'Autonomous Agents', desc: 'Multi-step Tool Execution', level: 'Core' },
    { name: 'OpenAI / Anthropic', desc: 'SOTA Model APIs', level: 'Core' },
    { name: 'PyTorch', desc: 'Custom Fine-Tuning Models', level: 'Advanced' }
  ],
  cloud: [
    { name: 'AWS & GCP', desc: 'Hyperscale Cloud Infrastructure', level: 'Core' },
    { name: 'Docker & K8s', desc: 'Container Orchestration', level: 'Core' },
    { name: 'Vercel Edge Network', desc: 'Global Low-Latency Deployment', level: 'Core' },
    { name: 'CI/CD Pipelines', desc: 'Automated Testing & Release', level: 'Core' },
    { name: 'Cloudflare', desc: 'DDoS Protection & DNS Edge', level: 'Core' },
    { name: 'OpenTelemetry', desc: 'Distributed Tracing & Metrics', level: 'Core' }
  ]
};

export const PRINCIPLES_DATA = [
  {
    number: '01',
    title: 'Engineering First',
    description: 'We focus on building reliable, maintainable technology and clean code architecture, not just attractive surface interfaces.'
  },
  {
    number: '02',
    title: 'AI With Purpose',
    description: 'We deploy AI to solve genuine operational friction and unlock ROI, avoiding superficial gimmicks or marketing fluff.'
  },
  {
    number: '03',
    title: 'Design + Technology',
    description: 'Thoughtful UX design and robust full-stack engineering are developed in unison, producing products that excel visually and technically.'
  },
  {
    number: '04',
    title: 'Built To Scale',
    description: 'Every software application, API, and cloud structure is architected to scale effortlessly as your business traffic multiplies.'
  },
  {
    number: '05',
    title: 'Business Focused',
    description: 'Technology is a tool for enterprise value. We align every sprint with your core revenue goals and business metrics.'
  },
  {
    number: '06',
    title: 'Long-Term Thinking',
    description: 'We build durable digital systems designed to evolve smoothly with your organization over years of active production.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep dive into business goals & requirements.',
    description: 'We conduct architectural reviews, stakeholder interviews, user journey mappings, and technical feasibility studies to align on precise objectives.'
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'Define product architecture & technical roadmap.',
    description: 'We craft comprehensive technical specifications, DB schemas, API specs, wireframes, and sprint milestones before writing code.'
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'Create UI systems & interactive prototypes.',
    description: 'Our design team creates modular, accessible UI systems and interactive component libraries with full desktop & mobile fidelity.'
  },
  {
    step: '04',
    title: 'Build',
    tagline: 'Agile full-stack development & AI integration.',
    description: 'Engineers construct clean, tested microservices, frontends, and AI pipelines with bi-weekly demo builds and automated CI/CD.'
  },
  {
    step: '05',
    title: 'Launch',
    tagline: 'Rigorous QA, security audit & deployment.',
    description: 'Comprehensive load testing, penetration audits, accessibility verification, and seamless zero-downtime deployment.'
  },
  {
    step: '06',
    title: 'Evolve',
    tagline: 'Continuous monitoring, optimization & scaling.',
    description: 'Post-launch telemetry monitoring, performance tuning, security updates, and iterative feature development.'
  }
];

export const INDUSTRIES_DATA = [
  { name: 'Real Estate & PropTech', icon: 'Building2', desc: 'Virtual tours, property management platforms, and listing search engines.' },
  { name: 'Financial Technology', icon: 'Landmark', desc: 'Automated compliance, algorithmic trading, and secure banking portals.' },
  { name: 'Healthcare & Biotech', icon: 'Activity', desc: 'HIPAA-compliant telemetry, telemedicine, and EHR integrations.' },
  { name: 'Manufacturing & Industrial', icon: 'Factory', desc: 'IoT telemetry, supply chain tracking, and factory robotics interfaces.' },
  { name: 'E-Commerce & Retail', icon: 'ShoppingBag', desc: 'High-conversion headless shopping platforms and inventory sync.' },
  { name: 'Technology & SaaS', icon: 'Server', desc: 'Developer tools, API infrastructure, and high-growth SaaS web apps.' },
  { name: 'Hospitality & Travel', icon: 'Compass', desc: 'Direct booking engines, guest portals, and concierge automation.' },
  { name: 'Education & EdTech', icon: 'GraduationCap', desc: 'Interactive learning management systems and virtual classrooms.' },
  { name: 'Professional Services', icon: 'Briefcase', desc: 'Client portals, document automation, and corporate web platforms.' }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'rag-architecture-2026',
    title: 'Engineering Enterprise RAG: Moving Beyond Naive Vector Search',
    category: 'AI',
    author: 'Dr. Marcus Vance',
    role: 'Head of AI Engineering',
    date: 'August 12, 2026',
    readTime: '6 min read',
    snippet: 'Why naive vector search breaks at scale and how hybrid sparse-dense retrieval with reranking transforms enterprise document intelligence.',
    content: `Retrieval-Augmented Generation (RAG) has become the gold standard for connecting LLMs with private business databases. However, most prototype implementations rely solely on naive cosine similarity over vector embeddings...`,
    image: '/insights/rag.jpg'
  },
  {
    id: 'nextjs-app-router-performance',
    title: 'Maximizing Next.js 14 Server Actions for High-Concurrency Dashboards',
    category: 'Engineering',
    author: 'Elena Rostova',
    role: 'Lead Full-Stack Architect',
    date: 'July 28, 2026',
    readTime: '5 min read',
    snippet: 'Optimizing server components, streaming SSR, and edge caching to deliver sub-100ms response times on complex analytical web applications.',
    content: `When building high-concurrency dashboards handling real-time telemetry, traditional client-side fetching often results in waterfall loading states...`,
    image: '/insights/nextjs.jpg'
  },
  {
    id: 'ui-ux-design-systems',
    title: 'Designing Accessible Micro-Interactions in Modern SaaS Interfaces',
    category: 'Design',
    author: 'Julian Thorne',
    role: 'VP of Product Design',
    date: 'July 14, 2026',
    readTime: '4 min read',
    snippet: 'How subtle physics-based motion and magnetic cursor interactions elevate user confidence without sacrificing accessibility standards.',
    content: `Micro-interactions are the connective tissue of modern digital products. When crafted with intentional physics, they communicate system state instantly...`,
    image: '/insights/design.jpg'
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Invarsoft didn't just build our AI platform; they fundamentally transformed our data architecture. Our audit speed increased by 18x while maintaining absolute security compliance.",
    author: "Jonathan Vance",
    role: "Chief Technology Officer",
    company: "Nexus Financial Global",
    project: "Enterprise AI & Risk Engine"
  },
  {
    quote: "The team's ability to blend high-end visual design with deep technical software engineering is unmatched. Our web platform load times dropped below 0.5s.",
    author: "Sarah Chen",
    role: "VP of Digital Experience",
    company: "Luminary Capital",
    project: "Corporate Web Platform"
  },
  {
    quote: "Invarsoft delivered our complex telehealth platform ahead of schedule with 99.99% uptime. They are true technical partners who care about business outcomes.",
    author: "Dr. David Miller",
    role: "Founder & CEO",
    company: "Aura Health Inc.",
    project: "SaaS Telehealth Platform"
  }
];

export const MOCK_CLIENT_PORTAL: ClientPortalData = {
  clientName: "Alex Mercer",
  company: "Apex Global Technologies",
  projectName: "AI-Powered Customer Workspace & Redesign",
  progressPercent: 78,
  phase: "Phase 4: API Integration & User Testing",
  milestones: [
    { name: "Discovery & System Architecture", status: "completed", dueDate: "June 15, 2026" },
    { name: "UI/UX Design System & Prototypes", status: "completed", dueDate: "July 02, 2026" },
    { name: "Frontend Next.js & WebGL Components", status: "completed", dueDate: "August 10, 2026" },
    { name: "AI Vector DB & RAG Integration", status: "in_progress", dueDate: "August 25, 2026" },
    { name: "Security Penetration Audit & Launch", status: "upcoming", dueDate: "September 05, 2026" }
  ],
  tasks: [
    { id: "TSK-101", title: "Finalize Pinecone Vector Index Schema", status: "done", assignee: "Marcus V." },
    { id: "TSK-102", title: "Implement WebGL 3D Interactive Graph Component", status: "done", assignee: "Elena R." },
    { id: "TSK-103", title: "Connect Salesforce Webhooks to FastAPI Endpoint", status: "in_progress", assignee: "David K." },
    { id: "TSK-104", title: "Conduct Accessibility (WCAG AA) Audit", status: "pending", assignee: "Julian T." }
  ],
  documents: [
    { name: "Invarsoft_Architecture_Specification_v2.pdf", size: "4.2 MB", date: "Aug 14, 2026", type: "PDF" },
    { name: "UI_UX_Design_System_Tokens.figma", size: "18.5 MB", date: "Aug 01, 2026", type: "Design" },
    { name: "Security_Audit_Report_PreLaunch.pdf", size: "2.1 MB", date: "Aug 18, 2026", type: "PDF" }
  ],
  invoices: [
    { id: "INV-2026-089", amount: "$24,500.00", status: "Paid", date: "July 01, 2026" },
    { id: "INV-2026-112", amount: "$24,500.00", status: "Paid", date: "August 01, 2026" },
    { id: "INV-2026-140", amount: "$15,000.00", status: "Pending", date: "September 01, 2026" }
  ]
};
