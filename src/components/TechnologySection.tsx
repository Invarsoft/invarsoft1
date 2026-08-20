'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Cloud, Layers, Search, Shield, Sparkles, Terminal, Activity, Wrench, Briefcase, Bot, Globe, Layout, ShoppingBag, Zap, Brain, Eye, MessageSquare, BarChart3, LineChart, Server, Smartphone, Lock, GitBranch } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'AI Services' | 'Web Development Services';
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  description: string;
  tag: string;
}

export interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: TechItem[];
}

// 1. SERVICES OFFERED BY INVARSOFT (AI SERVICES & WEB DEVELOPMENT SERVICES)
export const servicesData: ServiceItem[] = [
  // --- AI SERVICES ---
  {
    id: 'nlp-service',
    title: 'Natural Language Processing (NLP)',
    category: 'AI Services',
    description: 'End-to-end NLP engineering, text summarization, entity extraction, sentiment analysis, multi-lingual neural translation, semantic search, and custom LLM fine-tuning.',
    icon: MessageSquare,
    deliverables: ['Custom LLM Fine-Tuning & Prompt Engineering', 'Named Entity Recognition (NER) & Extraction', 'Document Summarization & Parsing Pipelines', 'Multi-Lingual Neural Machine Translation', 'Semantic Vector Search & Intent Engines']
  },
  {
    id: 'deep-learning-service',
    title: 'Deep Learning (DL)',
    category: 'AI Services',
    description: 'Custom neural network architecture design, PyTorch/TensorFlow model training, deep reinforcement learning, transfer learning, and model quantization.',
    icon: Brain,
    deliverables: ['Custom Deep Neural Network Architectures (PyTorch/TensorFlow)', 'Transfer Learning & Pre-Trained Model Fine-Tuning', 'Neural Network Quantization & Edge Optimization', 'Multi-Layer Perceptron (MLP) & CNN/RNN Pipelines', 'High-Throughput GPU Accelerated Inferencing']
  },
  {
    id: 'computer-vision-service',
    title: 'Computer Vision (CV)',
    category: 'AI Services',
    description: 'Real-time object detection (YOLO), OpenCV video analysis, SAM zero-shot image segmentation, MediaPipe spatial tracking, and visual inspection algorithms.',
    icon: Eye,
    deliverables: ['Real-Time Camera Video Analysis & Object Tracking (YOLO)', 'OpenCV Image Filtering & Spatial Detection', 'SAM Zero-Shot Image Segmentation Pipelines', 'MediaPipe Gesture & Facial Mesh Tracking', 'Automated Visual Quality Inspection Systems']
  },
  {
    id: 'machine-learning-service',
    title: 'Machine Learning (ML)',
    category: 'AI Services',
    description: 'Supervised & unsupervised machine learning, predictive analytics, Scikit-learn algorithms, gradient boosted trees (XGBoost/CatBoost), and MLOps deployment.',
    icon: Cpu,
    deliverables: ['Predictive Classification & Regression Analytics', 'Gradient Boosted Trees (XGBoost, LightGBM, CatBoost)', 'Customer Churn & Anomaly Detection Models', 'Scikit-Learn Machine Learning Pipelines', 'MLflow Experiment Tracking & Deployment']
  },
  {
    id: 'data-analytics-service',
    title: 'Data Analysis & Visualization',
    category: 'AI Services',
    description: 'Exploratory data analysis (EDA), Pandas/Polars DataFrames processing, NumPy mathematical modeling, and interactive dashboards (Matplotlib/Seaborn).',
    icon: BarChart3,
    deliverables: ['Exploratory Data Analysis (EDA) & Cleaning', 'Pandas & Polars High-Speed DataFrame Processing', 'NumPy Scientific & Statistical Computation', 'Matplotlib & Seaborn Statistical Visualization', 'Executive Business Intelligence & Data Insights']
  },
  {
    id: 'genai-llm-service',
    title: 'Generative AI & LLM Integration',
    category: 'AI Services',
    description: 'Enterprise integration of OpenAI (GPT-4o), Anthropic Claude, and Google Gemini APIs, custom RAG knowledge bases, and LlamaIndex vector retrieval.',
    icon: Sparkles,
    deliverables: ['OpenAI GPT-4o, Claude & Gemini API Integrations', 'Retrieval-Augmented Generation (RAG) Knowledge Bases', 'LlamaIndex & LangChain Vector Retrieval', 'Private Local LLM Deployment (Ollama)', 'Stable Diffusion Image Generation Pipelines']
  },
  {
    id: 'ai-agents-service',
    title: 'AI Agents & Workflow Automation',
    category: 'AI Services',
    description: 'Autonomous multi-agent AI swarms (CrewAI/AutoGen), intelligent task delegation, and automated n8n/Make API integration triggers.',
    icon: Bot,
    deliverables: ['Autonomous Multi-Agent AI Swarms (CrewAI/AutoGen)', 'n8n & Make.com Automated Workflow Triggers', 'API Webhook Automation & Agent Orchestration', 'Intelligent Document & Invoice Data Processing', 'Custom AI Customer Support Chatbots']
  },

  // --- WEB DEVELOPMENT SERVICES ---
  {
    id: 'custom-web-apps',
    title: 'Custom Web Application Development',
    category: 'Web Development Services',
    description: 'Bespoke web application development, Next.js server-side rendering (SSR), sub-second page performance, and full-stack React architecture.',
    icon: Globe,
    deliverables: ['Custom Next.js & React Web Applications', 'Editorial Layout Architecture & Micro-Interactions', 'Sub-500ms Page Load Speed Optimization', 'Full Mobile & Desktop Responsive Design', 'SEO & Core Web Vitals Optimization']
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend Engineering & UI Systems',
    category: 'Web Development Services',
    description: 'Modern TypeScript frontend development, Tailwind CSS design systems, Shadcn/UI component libraries, and Framer Motion micro-animations.',
    icon: Code2,
    deliverables: ['Type-Safe TypeScript & React Frontend Code', 'Tailwind CSS Utility Design Systems', 'Accessible Shadcn/UI & Radix UI Components', 'Framer Motion & GSAP Smooth Micro-Animations', '3D WebGL Graphics (Three.js / React Three Fiber)']
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering & API Architectures',
    category: 'Web Development Services',
    description: 'Scalable backend microservices, Node.js/Express/FastAPI server development, RESTful APIs, GraphQL endpoints, and WebSockets.',
    icon: Server,
    deliverables: ['Node.js, Express & NestJS Backend Microservices', 'FastAPI & Python Machine Learning Serving APIs', 'REST, GraphQL & tRPC API Architectures', 'Real-Time WebSockets & Socket.IO Push Channels', 'Kafka & BullMQ Event Queue Processing']
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Platforms & Storefronts',
    category: 'Web Development Services',
    description: 'High-performance digital storefronts, headless commerce integration (Shopify/Next.js Commerce), custom checkout flows, and Stripe/Paddle payment rails.',
    icon: ShoppingBag,
    deliverables: ['Headless Shopify & Next.js Commerce Storefronts', 'Sub-Second Checkout Flow Integration', 'Global Payment Gateways (Stripe, Razorpay, Paddle)', 'Real-Time Inventory API Synchronization', 'Custom Product Configurators & Calculators']
  },
  {
    id: 'headless-cms',
    title: 'Headless CMS Integration',
    category: 'Web Development Services',
    description: 'API-first content management system setup (Sanity, Strapi, Payload, Contentful) enabling non-technical teams to manage web content easily.',
    icon: Layers,
    deliverables: ['Sanity, Strapi & Payload CMS Architecture', 'Structured Schema & Content Model Definition', 'Omnichannel GraphQL Content Delivery APIs', 'Role-Based Content Authoring Workflows', 'Live Visual Preview & Page Building']
  },
  {
    id: 'enterprise-portals',
    title: 'Enterprise Software & Client Portals',
    category: 'Web Development Services',
    description: 'Custom business software, client workspace portals, administrative analytics dashboards, role-based access control (RBAC), and database architecture.',
    icon: Wrench,
    deliverables: ['Role-Based Admin Analytics Dashboards', 'Client Workspace & Document Portals', 'PostgreSQL & MongoDB Database Schema Design', 'Prisma & Drizzle ORM Data Access Layers', 'Automated Enterprise Operations Workflows']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Product Design & Motion',
    category: 'Web Development Services',
    description: 'User-centered interface design, wireframing, high-fidelity Figma prototypes, design tokens, and accessibility (WCAG) compliance.',
    icon: Layout,
    deliverables: ['High-Fidelity Component Systems & Figma Kits', 'Interactive Web Prototypes & Flow Diagrams', 'User Journey Research & UX Wireframing', 'Dark Mode & Light Mode Theme Tokens', 'Accessibility & WCAG Contrast Standards']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps Deployment',
    category: 'Web Development Services',
    description: 'Vercel/AWS cloud infrastructure deployment, Docker containerization, Kubernetes orchestration, CI/CD automated pipelines, and Sentry monitoring.',
    icon: Cloud,
    deliverables: ['Vercel, AWS & Google Cloud Infrastructure', 'Docker & Docker Compose Containerization', 'GitHub Actions & GitLab CI/CD Automated Pipelines', 'SSL, DNS & Cloudflare Edge CDN Delivery', 'Sentry Real-Time Error Tracking & Monitoring']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development (iOS & Android)',
    category: 'Web Development Services',
    description: 'Native iOS & Android mobile applications built with React Native and Flutter, featuring offline data synchronization, push notifications, and App Store / Google Play publishing.',
    icon: Smartphone,
    deliverables: ['Cross-Platform React Native & Flutter Apps', 'Apple App Store & Google Play Publishing', 'Firebase & Push Notification Engine', 'Offline Data Caching & Local Storage Sync', 'Biometric Auth & Secure Keychain Storage']
  },
  {
    id: 'whatsapp-bot-automation',
    title: 'WhatsApp Bot & Messaging Automation',
    category: 'Web Development Services',
    description: 'Automated WhatsApp messaging bots, Meta Cloud API integration, AI customer service triggers, broadcast campaigns, and automated lead capture.',
    icon: MessageSquare,
    deliverables: ['Official WhatsApp Business Cloud API Integration', '24/7 AI-Powered Conversational Chatbot', 'Automated Order & Appointment Confirmations', 'HubSpot & Salesforce CRM Lead Sync', 'Broadcast Marketing & Drip Campaign Engine']
  }
];

// 2. TOOLS & TECHNOLOGIES USED (SEPARATE & DIFFERENTIATED)
export const techCategories: TechCategory[] = [
  {
    id: 'ai-llm',
    name: 'AI, LLMs & Agents',
    icon: Cpu,
    items: [
      { name: 'OpenAI API (GPT-4o)', description: 'State-of-the-art multimodal AI model for conversational agents, automated reasoning, and vision understanding.', tag: 'LLM' },
      { name: 'Anthropic Claude API', description: 'Advanced reasoning, complex problem solving, and 200k+ context window document analysis for enterprise AI.', tag: 'LLM' },
      { name: 'Google Gemini API', description: 'High-speed multimodal AI intelligence powering real-time search, vision understanding, and code generation.', tag: 'LLM' },
      { name: 'LangChain', description: 'Orchestration framework for connecting LLMs to custom APIs, relational databases, and enterprise data stores.', tag: 'RAG' },
      { name: 'LangGraph', description: 'Stateful multi-agent orchestration framework for building complex, autonomous multi-actor AI workflows.', tag: 'Agents' },
      { name: 'LlamaIndex', description: 'Enterprise data framework for Retrieval-Augmented Generation (RAG), vector indexing, and document parsing.', tag: 'RAG' },
      { name: 'Hugging Face Transformers', description: 'Open-source machine learning model repository and deployment pipeline for custom AI models.', tag: 'Transformers' },
      { name: 'Ollama', description: 'Local LLM execution engine for running open-weights AI models privately on-premise without cloud latency.', tag: 'Local AI' },
      { name: 'Vercel AI SDK', description: 'TypeScript toolkit for building AI-powered web applications and streaming LLM UI components.', tag: 'AI SDK' },
      { name: 'n8n & Make.com', description: 'Visual workflow automation platforms connecting third-party APIs, webhooks, and AI models.', tag: 'Automation' },
      { name: 'Zapier AI & Flowise', description: 'Low-code AI workflow builders and drag-and-drop node graph orchestration engines.', tag: 'Automation' },
      { name: 'CrewAI & Microsoft AutoGen', description: 'Autonomous multi-agent AI frameworks for delegating complex multi-role business workflows.', tag: 'Multi-Agent' },
      { name: 'Dify.ai', description: 'Open-source LLM application development platform for prompt engineering and agent orchestration.', tag: 'Agent Platform' },
      { name: 'Cursor & GitHub Copilot', description: 'AI-assisted code generation tools accelerating production full-stack software development.', tag: 'AI Coding' },
      { name: 'Claude Code & v0 by Vercel', description: 'Autonomous terminal coding agents and AI-driven UI component generation engines.', tag: 'AI Coding' },
      { name: 'Replit Agent', description: 'Autonomous cloud environment coding agent for building and deploying web applications.', tag: 'AI Agent' },
    ],
  },
  {
    id: 'ml-data',
    name: 'Machine Learning & Data Science',
    icon: Activity,
    items: [
      { name: 'PyTorch', description: 'Production deep learning framework for custom neural network architecture training and computer vision pipelines.', tag: 'Deep Learning' },
      { name: 'TensorFlow & Keras', description: 'Scalable open-source machine learning platform for high-performance neural model development and deployment.', tag: 'Deep Learning' },
      { name: 'Scikit-learn', description: 'Battle-tested Python library for predictive modeling, classification, regression, and data preprocessing.', tag: 'Machine Learning' },
      { name: 'XGBoost & LightGBM', description: 'High-performance gradient boosted decision tree frameworks for tabular dataset predictive analytics.', tag: 'ML Boost' },
      { name: 'CatBoost', description: 'Gradient boosting library optimized for categorical features with minimal data preprocessing.', tag: 'ML Boost' },
      { name: 'NumPy & SciPy', description: 'Fundamental scientific computing and multi-dimensional array mathematical computation libraries.', tag: 'Data Science' },
      { name: 'Pandas & Polars', description: 'High-performance data manipulation and ultra-fast Rust-backed DataFrames analysis engines.', tag: 'Data Analysis' },
      { name: 'Matplotlib & Seaborn', description: 'Comprehensive Python data visualization libraries for statistical graphics and charts.', tag: 'Visualization' },
    ],
  },
  {
    id: 'vision-speech',
    name: 'Computer Vision & Audio AI',
    icon: Sparkles,
    items: [
      { name: 'OpenCV', description: 'Open-source real-time computer vision library for object tracking, facial recognition, and image filtering.', tag: 'Vision' },
      { name: 'YOLO (Ultralytics)', description: 'Real-time object detection and instance segmentation model engineered for ultra-fast camera inferencing.', tag: 'Vision' },
      { name: 'MediaPipe', description: 'Cross-platform machine learning framework for spatial face mesh, hand tracking, and pose estimation.', tag: 'Vision' },
      { name: 'Pillow (PIL)', description: 'Python imaging library providing extensive file format support and pixel-level image manipulation.', tag: 'Imaging' },
      { name: 'SAM (Segment Anything)', description: 'Zero-shot image segmentation AI capable of extracting precise object masks from any scene.', tag: 'Vision AI' },
      { name: 'Stable Diffusion & Diffusers', description: 'Generative AI model suite for automated image synthesis, texture generation, and visual assets.', tag: 'Generative AI' },
      { name: 'ComfyUI', description: 'Node-based graphical interface for constructing complex Stable Diffusion image generation pipelines.', tag: 'GenAI UI' },
      { name: 'Whisper (Speech-to-Text)', description: 'High-accuracy automatic speech-to-text transcription engine supporting multi-lingual voice processing.', tag: 'Speech AI' },
      { name: 'ElevenLabs', description: 'Hyper-realistic AI voice synthesis, voice cloning, and text-to-speech audio production for applications.', tag: 'Voice AI' },
      { name: 'Deepgram & Librosa', description: 'Real-time streaming speech recognition and digital audio signal processing analysis libraries.', tag: 'Audio' },
      { name: 'Coqui TTS', description: 'Deep learning toolkit for text-to-speech synthesis supporting multi-speaker voice cloning.', tag: 'Speech Synth' },
    ],
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: Terminal,
    items: [
      { name: 'HTML5 & CSS3', description: 'Modern semantic web architecture, accessible markup, and flexible responsive layout styling.', tag: 'Web' },
      { name: 'JavaScript & TypeScript', description: 'Strongly typed modern scripting languages for resilient, type-safe full-stack software development.', tag: 'Web' },
      { name: 'Python', description: 'Universal programming language powering machine learning, backend microservices, and automated data pipelines.', tag: 'Language' },
      { name: 'PHP', description: 'Production web language powering enterprise web engines, headless CMS systems, and e-commerce platforms.', tag: 'Web' },
      { name: 'Java & C#', description: 'Enterprise object-oriented languages engineered for robust, scalable microservices and backend APIs.', tag: 'Enterprise' },
      { name: 'Go (Golang)', description: 'High-concurrency compiled language built by Google for low-latency backend microservices and APIs.', tag: 'Systems' },
      { name: 'Rust', description: 'Memory-safe compiled systems language delivering bare-metal speed for high-performance software systems.', tag: 'Systems' },
      { name: 'Ruby', description: 'Dynamic object-oriented programming language designed for developer productivity and web applications.', tag: 'Language' },
      { name: 'Kotlin & Swift', description: 'Modern expressive languages engineered for Android, iOS, macOS, and cross-platform native software.', tag: 'Mobile' },
      { name: 'Scala & Dart', description: 'Functional JVM language and Flutter cross-platform mobile client programming language.', tag: 'Language' },
      { name: 'Elixir & Zig', description: 'Erlang VM concurrent fault-tolerant language and ultra-fast modern systems programming language.', tag: 'Language' },
    ],
  },
  {
    id: 'frontend-styling',
    name: 'Frontend Frameworks & Styling',
    icon: Code2,
    items: [
      { name: 'React & Next.js', description: 'Production React framework featuring App Router, server-side rendering (SSR), and static generation.', tag: 'Frontend' },
      { name: 'Vue.js & Nuxt.js', description: 'Intuitive progressive frontend framework and SSR framework for reactive web user interfaces.', tag: 'Frontend' },
      { name: 'Angular', description: 'TypeScript-based enterprise web application framework developed by Google for large-scale apps.', tag: 'Frontend' },
      { name: 'Svelte & SvelteKit', description: 'Cybernetically enhanced compiler-driven web framework offering sub-second page performance.', tag: 'Frontend' },
      { name: 'Astro & Remix', description: 'Content-driven island architecture web framework and full-stack web framework built on Web Fetch standards.', tag: 'Frontend' },
      { name: 'SolidJS, Preact & Qwik', description: 'Fine-grained reactive UI library, 3kb React alternative, and resumable zero-hydration web framework.', tag: 'Frontend' },
      { name: 'Alpine.js & jQuery', description: 'Lightweight reactive DOM manipulation framework and legacy JavaScript utility library.', tag: 'Frontend' },
      { name: 'Tailwind CSS & DaisyUI', description: 'Utility-first CSS styling engine providing rapid design systems and custom UI themes.', tag: 'Styling' },
      { name: 'Bootstrap & Material UI (MUI)', description: 'Classic responsive CSS framework and Google Material Design component system for React.', tag: 'Styling' },
      { name: 'Chakra UI & Ant Design', description: 'Simple modular React component library and enterprise design system created for complex web dashboards.', tag: 'Styling' },
      { name: 'Semantic UI, Bulma & Foundation', description: 'Responsive CSS component frameworks providing intuitive human-friendly HTML class names.', tag: 'Styling' },
      { name: 'Styled Components & Emotion', description: 'CSS-in-JS libraries enabling dynamic component-scoped styling in React web applications.', tag: 'CSS-in-JS' },
      { name: 'Panda CSS, Sass (SCSS) & Less', description: 'Zero-runtime CSS-in-JS engine and modern CSS preprocessors providing nested rules and mixins.', tag: 'Styling' },
    ],
  },
  {
    id: 'ui-animation-state',
    name: 'UI, Animation, Forms & State',
    icon: Layers,
    items: [
      { name: 'Shadcn/UI & Radix UI', description: 'Accessible, unstyled headless UI component primitives crafted for customizable web apps.', tag: 'UI Library' },
      { name: 'Radix Themes & Headless UI', description: 'Pre-styled component systems and unstyled UI primitives integrating seamlessly with Tailwind CSS.', tag: 'UI Library' },
      { name: 'Mantine & PrimeReact', description: 'Feature-rich React component library with built-in hooks and comprehensive enterprise UI components.', tag: 'UI Library' },
      { name: 'NextUI, Aceternity UI & Ark UI', description: 'Modern visual UI component libraries featuring fluid gradient aesthetics and micro-animations.', tag: 'UI Library' },
      { name: 'Framer Motion & GSAP', description: 'High-performance animation engines for fluid micro-interactions, scroll triggers, and UI motion.', tag: 'Animation' },
      { name: 'Three.js & React Three Fiber', description: 'Hardware-accelerated 3D WebGL graphics engine for interactive 3D web experiences.', tag: '3D WebGL' },
      { name: 'Motion One, Anime.js & Lottie', description: 'Lightweight Web Animations API engine, JS animation library, and vector JSON motion animations.', tag: 'Animation' },
      { name: 'Zod, TypeBox & Yup', description: 'TypeScript-first schema declaration and validation libraries for form inputs and API payloads.', tag: 'Validation' },
      { name: 'React Hook Form & Formik', description: 'Performant, flexible form handling libraries with minimal re-renders for React apps.', tag: 'Form' },
      { name: 'Redux Toolkit, Zustand & Jotai', description: 'Predictable state management stores for managing complex global application state.', tag: 'State' },
      { name: 'TanStack Query & SWR', description: 'Powerful asynchronous state management, server data fetching, automatic revalidation, and caching.', tag: 'Data Fetching' },
      { name: 'Apollo Client & RTK Query', description: 'Comprehensive GraphQL client and data fetching toolset for Redux Toolkit application state.', tag: 'GraphQL Data' },
    ],
  },
  {
    id: 'backend-frameworks',
    name: 'Backend Frameworks & APIs',
    icon: Database,
    items: [
      { name: 'Node.js, Express & NestJS', description: 'Scalable event-driven JavaScript server environments and enterprise TypeScript backend frameworks.', tag: 'Node.js' },
      { name: 'Fastify & Hono', description: 'Ultra-fast low-overhead Node.js web framework and multi-runtime web framework for Cloudflare Workers.', tag: 'Node.js' },
      { name: 'Koa.js & AdonisJS', description: 'Next-generation web framework for Node.js and fully featured TypeScript web framework.', tag: 'Node.js' },
      { name: 'FastAPI & Flask', description: 'High-speed asynchronous Python backend microservices built for machine learning model serving.', tag: 'Python' },
      { name: 'Django', description: 'Batteries-included Python web framework featuring robust ORM, security defaults, and admin portals.', tag: 'Python' },
      { name: 'Laravel (PHP)', description: 'Elegant PHP framework delivering modern MVC architecture, database migrations, and queue workers.', tag: 'PHP' },
      { name: 'Symfony & CodeIgniter', description: 'High-performance PHP web framework components and lightweight MVC application framework.', tag: 'PHP' },
      { name: 'Spring Boot (Java)', description: 'Enterprise-grade Java framework engineered for secure, scalable microservices and RESTful APIs.', tag: 'Java' },
      { name: 'ASP.NET Core (C#)', description: 'Cross-platform, high-performance web framework for building cloud-based software applications.', tag: 'C#' },
      { name: 'Ruby on Rails', description: 'Full-stack model-view-controller web framework providing rapid convention-over-configuration development.', tag: 'Ruby' },
      { name: 'Gin, Fiber & Echo (Go)', description: 'Ultra-fast HTTP web frameworks written in Go delivering high concurrency and minimal memory footprint.', tag: 'Go' },
      { name: 'Actix-web & Axum (Rust)', description: 'Blazing fast, memory-safe Rust web frameworks for mission-critical microservice APIs.', tag: 'Rust' },
      { name: 'REST API & GraphQL', description: 'Standard HTTP web service architectures and query languages for client-server API interactions.', tag: 'API Protocol' },
      { name: 'tRPC & gRPC', description: 'End-to-end type-safe APIs without code generation and high-performance RPC framework by Google.', tag: 'RPC Protocol' },
      { name: 'WebSockets & Socket.IO', description: 'Real-time bidirectional event-based communication engines for live chat and dashboards.', tag: 'Realtime API' },
      { name: 'Kafka, RabbitMQ & BullMQ', description: 'Distributed event streaming platforms, message brokers, and Redis-backed background job queues.', tag: 'Queue/Broker' },
    ],
  },
  {
    id: 'databases-orm',
    name: 'Databases, Vector Stores & ORM',
    icon: Database,
    items: [
      { name: 'PostgreSQL', description: 'Industry-standard open-source relational database built for ACID compliance and complex queries.', tag: 'Relational DB' },
      { name: 'MySQL & MariaDB', description: 'High-performance open-source relational database engines powering millions of web applications.', tag: 'Relational DB' },
      { name: 'SQLite', description: 'Self-contained, serverless zero-configuration transactional SQL database engine.', tag: 'Embedded DB' },
      { name: 'MongoDB & Cassandra', description: 'Scalable NoSQL document store and wide-column distributed database for high-throughput data.', tag: 'NoSQL DB' },
      { name: 'CockroachDB & TiDB', description: 'Distributed SQL databases delivering native horizontal scaling and multi-region resilience.', tag: 'Distributed DB' },
      { name: 'Pinecone & Milvus', description: 'Managed vector databases engineered for fast nearest-neighbor AI embedding search.', tag: 'Vector DB' },
      { name: 'Qdrant & ChromaDB', description: 'Vector similarity search engines with extended payload filtering for AI applications.', tag: 'Vector DB' },
      { name: 'pgvector', description: 'Native PostgreSQL extension enabling high-performance vector search directly inside relational tables.', tag: 'Vector DB' },
      { name: 'Redis & Memcached', description: 'In-memory data structure store delivering ultra-fast key-value caching, pub/sub messaging, and sessions.', tag: 'In-Memory DB' },
      { name: 'Prisma & Drizzle ORM', description: 'Next-generation type-safe database ORMs providing auto-generated TypeScript schema types.', tag: 'ORM' },
      { name: 'TypeORM, Mongoose & Sequelize', description: 'Established TypeScript ORM and ODM database mapping libraries for Node.js databases.', tag: 'ORM' },
      { name: 'SQLAlchemy & Django ORM', description: 'Comprehensive Python SQL toolkit and object-relational mapping database engine.', tag: 'ORM' },
      { name: 'Hibernate & Entity Framework', description: 'Enterprise Java object-relational mapping framework and Microsoft C# database ORM.', tag: 'ORM' },
    ],
  },
  {
    id: 'cms-baas-auth',
    name: 'CMS, BaaS & Authentication',
    icon: Shield,
    items: [
      { name: 'Sanity, Strapi & Payload CMS', description: 'Customizable headless CMS platforms providing structured content APIs and admin control panels.', tag: 'Headless CMS' },
      { name: 'Contentful, Directus & Hygraph', description: 'API-first content platforms and GraphQL headless CMS systems for omnichannel web publishing.', tag: 'Headless CMS' },
      { name: 'WordPress, Ghost & Drupal', description: 'World-leading web content management system and modern open-source publishing platforms.', tag: 'CMS' },
      { name: 'Supabase & Firebase', description: 'Open-source Backend-as-a-Service platforms providing PostgreSQL, real-time sync, and file storage.', tag: 'BaaS' },
      { name: 'Appwrite & PocketBase', description: 'Self-hosted Backend-as-a-Service solutions featuring embedded database, storage, and serverless functions.', tag: 'BaaS' },
      { name: 'Clerk & Auth0', description: 'Complete user management platforms supporting multi-factor authentication, social login, and OAuth 2.0.', tag: 'Auth' },
      { name: 'Auth.js (NextAuth) & Kinde', description: 'Flexible authentication library for Next.js and modern developer-first authentication service.', tag: 'Auth' },
      { name: 'Firebase Auth & Supabase Auth', description: 'Built-in identity verification supporting phone, email, magic link, and social OAuth providers.', tag: 'Auth' },
      { name: 'AWS Cognito & Keycloak', description: 'Enterprise customer identity access management (CIAM) and open-source SSO identity provider.', tag: 'Enterprise Auth' },
      { name: 'JWT, OAuth 2.0 & OpenID', description: 'Industry standard token-based authentication protocols and secure authorization frameworks.', tag: 'Security' },
    ],
  },
  {
    id: 'cloud-devops-mlops',
    name: 'Cloud, Infrastructure & MLOps',
    icon: Cloud,
    items: [
      { name: 'Vercel & Netlify', description: 'Developer-centric cloud platforms for static site hosting, serverless functions, and edge delivery.', tag: 'Cloud' },
      { name: 'AWS, Azure & Google Cloud (GCP)', description: 'Hyperscale cloud computing infrastructures providing scalable servers, storage, and AI services.', tag: 'Cloud' },
      { name: 'Cloudflare & DigitalOcean', description: 'Global CDN, DDoS protection, edge workers, and simplified cloud computing infrastructure.', tag: 'Cloud/CDN' },
      { name: 'Render, Railway & Fly.io', description: 'Modern cloud application platforms offering automated GitHub deployments and global edge hosting.', tag: 'Deployment' },
      { name: 'Terraform & Pulumi', description: 'Infrastructure as Code (IaC) engines for provisioning declarative cloud environments automatically.', tag: 'IaC' },
      { name: 'Docker & Docker Compose', description: 'Industry standard containerization platform for packaging applications and local microservices.', tag: 'Containers' },
      { name: 'Kubernetes', description: 'Automated container orchestration system for managing containerized workloads at enterprise scale.', tag: 'Containers' },
      { name: 'Nginx, Apache & Caddy', description: 'High-performance HTTP web servers, reverse proxies, and automatic HTTPS web server engines.', tag: 'Web Server' },
      { name: 'GitHub Actions & GitLab CI/CD', description: 'Automated continuous integration and deployment pipelines for zero-downtime shipping.', tag: 'CI/CD' },
      { name: 'MLflow & Weights & Biases (W&B)', description: 'Production MLOps platforms for tracking machine learning model experiments, parameters, and datasets.', tag: 'MLOps' },
      { name: 'Triton Inference Server & BentoML', description: 'NVIDIA GPU-accelerated inferencing server and model serving framework for high-throughput AI.', tag: 'MLOps' },
      { name: 'ONNX Runtime', description: 'Cross-platform accelerator for running optimized machine learning models across hardware platforms.', tag: 'MLOps' },
      { name: 'Vite, Webpack & Turbopack', description: 'Next-generation frontend build tools, module bundlers, and ultra-fast Rust-based bundlers.', tag: 'Build Tools' },
      { name: 'Jest, Vitest, Cypress & Playwright', description: 'Comprehensive unit testing, integration testing, and end-to-end browser automation test suites.', tag: 'Testing' },
      { name: 'Stripe, PayPal, Razorpay & Paddle', description: 'Global merchant payment processing APIs supporting credit cards, recurring billing, and subscriptions.', tag: 'Payments' },
      { name: 'Elasticsearch, Algolia & Meilisearch', description: 'Full-text search engines and fast vector search APIs delivering instant auto-complete search results.', tag: 'Search Engine' },
      { name: 'AWS S3 & Cloudinary', description: 'Scalable cloud object storage and automated media optimization, transformation, and delivery CDN.', tag: 'Media Storage' },
      { name: 'Resend, SendGrid & Amazon SES', description: 'Transactional email APIs providing high deliverability rates for transactional notifications.', tag: 'Email Services' },
      { name: 'Sentry, Datadog & LogRocket', description: 'Real-time application error monitoring, performance logging, and visual user session replay.', tag: 'Monitoring' },
      { name: 'Google Analytics & PostHog', description: 'Privacy-first web analytics, event tracking, heatmaps, and open-source product analytics.', tag: 'Analytics' },
    ],
  },
  {
    id: 'stacks-ecosystem',
    name: 'Common Tech Stacks',
    icon: Layers,
    items: [
      { name: 'T3 Stack', description: 'Next.js, TypeScript, Tailwind CSS, tRPC, Prisma, and PostgreSQL full-stack architecture.', tag: 'Tech Stack' },
      { name: 'Next.js Full Stack', description: 'Next.js, React, TypeScript, Tailwind CSS, Node.js, Prisma, PostgreSQL, and Vercel.', tag: 'Tech Stack' },
      { name: 'MERN Stack', description: 'MongoDB, Express.js, React, and Node.js classic JavaScript full-stack development.', tag: 'Tech Stack' },
      { name: 'MEAN Stack', description: 'MongoDB, Express.js, Angular, and Node.js full-stack enterprise web development.', tag: 'Tech Stack' },
      { name: 'MEVN Stack', description: 'MongoDB, Express.js, Vue.js, and Node.js full-stack modern web development.', tag: 'Tech Stack' },
      { name: 'PERN Stack', description: 'PostgreSQL, Express.js, React, and Node.js relational database full-stack development.', tag: 'Tech Stack' },
      { name: 'JAMstack', description: 'JavaScript, APIs, Headless CMS, and Static Site Generation (SSG) on global edge CDNs.', tag: 'Architecture' },
      { name: 'LAMP & LEMP Stacks', description: 'Linux, Apache/Nginx, MySQL, and PHP battle-tested web server hosting stacks.', tag: 'Server Stack' },
      { name: 'Laravel Stack', description: 'PHP, Laravel, Tailwind CSS, MySQL/PostgreSQL, and Redis web application development.', tag: 'Tech Stack' },
      { name: 'Django Stack', description: 'Python, Django, PostgreSQL, Redis, and Celery enterprise web application development.', tag: 'Tech Stack' },
      { name: 'Serverless Stack', description: 'Next.js, AWS Lambda, DynamoDB, API Gateway, S3, and CloudFront architecture.', tag: 'Serverless' },
      { name: 'Supabase Stack', description: 'Next.js/React, PostgreSQL, Supabase Auth, Supabase Storage, and Edge Functions.', tag: 'BaaS Stack' },
      { name: 'Firebase Stack', description: 'React/Web, Firebase Authentication, Firestore, Cloud Functions, and Firebase Hosting.', tag: 'BaaS Stack' },
    ],
  },
];

export const TechnologySection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'services' | 'tools'>('services');
  const [serviceFilter, setServiceFilter] = useState<'ALL' | 'AI Services' | 'Web Development Services'>('ALL');
  const [activeTab, setActiveTab] = useState<string>('ai-llm');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  const filteredTechItems = currentCategory.items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredServices = servicesData.filter((service) => {
    if (serviceFilter === 'ALL') return true;
    return service.category === serviceFilter;
  });

  return (
    <section id="tools-and-services" className="relative py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            OUR COMPLETE ECOSYSTEM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Tools and Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Explore our dedicated AI Services (NLP, Deep Learning, Computer Vision, ML, Data Analytics) &amp; Web Development Services alongside our complete 150+ technology stack.
          </motion.p>
        </div>

        {/* HIGH-LEVEL DIFFERENTIATION TOGGLE (SERVICES vs TOOLS) */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-[#08131C] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 backdrop-blur-md w-full max-w-md sm:max-w-none sm:w-auto">
            <button
              onClick={() => setViewMode('services')}
              className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                viewMode === 'services'
                  ? 'bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>DEVELOPMENT &amp; AI SERVICES ({servicesData.length})</span>
            </button>

            <button
              onClick={() => setViewMode('tools')}
              className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                viewMode === 'tools'
                  ? 'bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>TOOLS &amp; TECHNOLOGIES (150+)</span>
            </button>
          </div>
        </div>

        {/* SUB-VIEW 1: DEVELOPMENT SERVICES OFFERED */}
        {viewMode === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* SERVICE CATEGORY FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <button
                onClick={() => setServiceFilter('ALL')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  serviceFilter === 'ALL'
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                ALL SERVICES ({servicesData.length})
              </button>
              <button
                onClick={() => setServiceFilter('AI Services')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  serviceFilter === 'AI Services'
                    ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'bg-cyan-950/40 text-cyan-300 hover:bg-cyan-950/70 border border-cyan-500/30'
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                <span>AI SERVICES ({servicesData.filter(s => s.category === 'AI Services').length})</span>
              </button>
              <button
                onClick={() => setServiceFilter('Web Development Services')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  serviceFilter === 'Web Development Services'
                    ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'bg-blue-950/40 text-blue-300 hover:bg-blue-950/70 border border-blue-500/30'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>WEB DEVELOPMENT SERVICES ({servicesData.filter(s => s.category === 'Web Development Services').length})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                const isAIService = service.category === 'AI Services';

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    className={`rounded-3xl p-8 border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                      isAIService
                        ? 'bg-cyan-950/30 border-cyan-400/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-cyan-400'
                        : 'bg-[#08131C] border-white/10 hover:border-blue-400/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3.5 rounded-2xl border transition-colors ${
                          isAIService
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black'
                            : 'bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-mono px-3 py-1 rounded-full border font-semibold ${
                          isAIService
                            ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                            : 'bg-blue-950/60 border-blue-500/30 text-blue-300'
                        }`}>
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-white/10">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-cyan-400 font-bold">&bull;</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* SUB-VIEW 2: TOOLS & TECHNOLOGIES USED */}
        {viewMode === 'tools' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* CATEGORY TABS SELECTOR */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 mb-10">
              {techCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setSearchQuery('');
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                    <span className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-cyan-400'}`}>
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* SEARCH BAR */}
            <div className="max-w-md mx-auto mb-12 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${currentCategory.name}...`}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#08131C] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500"
              />
            </div>

            {/* TECH GRID CARD DISPLAY */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#08131C] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filteredTechItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex flex-col justify-between space-y-3 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* 1-Line Description Point */}
                      <p className="text-xs text-slate-300 leading-normal font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredTechItems.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-xs font-mono">
                  No matching tools found for "{searchQuery}".
                </div>
              )}

              {/* Bottom Bar Info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>CATEGORY: <strong className="text-cyan-400 uppercase">{currentCategory.name}</strong> ({currentCategory.items.length} Production Tools)</span>
                </div>
                <div>
                  <span>INVARSOFT FULL-STACK &amp; AI ECOSYSTEM</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
