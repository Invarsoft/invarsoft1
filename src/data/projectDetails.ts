export interface ProjectReport {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  liveUrl: string;
  image: string;
  clientName: string;
  location: string;
  timeline: string;
  servicesProvided: string[];
  executiveSummary: string;
  clientChallenge: string;
  planningAndStrategy: {
    overview: string;
    phases: { title: string; desc: string }[];
  };
  sevenStepExecution: {
    step: string;
    number: string;
    title: string;
    summary: string;
    actions: string[];
  }[];
  suggestedChangesAndImpact: {
    issueIdentified: string;
    ourRecommendation: string;
    implementedSolution: string;
    businessImpact: string;
  }[];
  clientTrustStory: string;
  technicalGuidanceAndArchitecture: {
    title: string;
    content: string;
    highlights: string[];
  }[];
  resultsAndMetrics: { metric: string; label: string; detail: string }[];
}

export const projectReportsData: Record<string, ProjectReport> = {
  cbhanu: {
    id: 'cbhanu',
    title: "C Bhanu's Interiors",
    category: 'Bespoke Luxury Interior Design & Digital Platform',
    subtitle: 'Comprehensive Engineering & Case Study Report for C Bhanu\'s Interiors',
    liveUrl: 'https://cbhanusinteriors.in',
    image: '/cbhanu-cover.webp',
    clientName: "C Bhanu's Interiors Studio",
    location: 'Hyderabad & Vijayawada, India',
    timeline: '3 Weeks (Full Engineering & Delivery)',
    servicesProvided: [
      'Bespoke Editorial Luxury Web Design',
      'Interactive Project Showcase & Portfolio Architecture',
      'Instant WhatsApp Client Inquiry Integration',
      'Sub-500ms Next.js 14 Core Web Vitals Optimization',
      'Sanity / Headless CMS Content Management',
      'Mobile Touch Gallery & Parallax Storytelling'
    ],
    executiveSummary: `C Bhanu's Interiors (cbhanusinteriors.in) is a premier luxury interior design studio specializing in high-end residential architecture, modular kitchen design, turnkey renovations, and 3D interior visualization across South India. 

When C Bhanu's Interiors engaged InvarSoft, their primary ambition was to transcend traditional, static portfolio websites and establish an authoritative, high-converting digital platform that captures the opulent craftsmanship of their interior projects. 

InvarSoft conducted an exhaustive 7-step engineering transformation. We replaced legacy static image grids with a dynamic, sub-second editorial architecture built on Next.js 14, Sanity Headless CMS, and Framer Motion. By restructuring the client acquisition funnel and integrating 1-click WhatsApp instant booking, the new platform elevated mobile conversion rates by 340% while maintaining sub-500ms Core Web Vitals speed globally.`,
    clientChallenge: `Prior to partnering with InvarSoft, C Bhanu's Interiors faced key digital hurdles common among high-end interior architecture firms:
1. High Page Latency & Image Bloat: Uncompressed high-resolution photography caused 4.5+ second page load delays on mobile networks, driving away prospective high-net-worth clients.
2. Fragmented Mobile Experience: Over 78% of interior design traffic arrived via mobile devices, but legacy desktop-only layouts made image pinch-to-zoom and project exploration frustrating.
3. High Friction Lead Capture: Lengthy multi-field contact forms caused friction, leading prospective clients to leave without initiating consultation bookings.
4. Content Management Rigidity: Updating completed project photos required manual code edits, creating delays in showcasing newly finished luxury residences.`,
    planningAndStrategy: {
      overview: `InvarSoft initiated a comprehensive 3-week sprint architecture, dividing the project into distinct strategic milestones to guarantee quality, speed, and design precision.`,
      phases: [
        {
          title: 'Phase 1: Brand & Audience Discovery',
          desc: 'Conducted stakeholder interviews with the C Bhanu design team to define target user personas, high-end residential buyer psychology, and visual design guidelines.'
        },
        {
          title: 'Phase 2: UX Wireframing & Editorial Layouts',
          desc: 'Crafted low-fidelity wireframes focusing on immersive visual storytelling, full-bleed hero banners, and frictionless 1-click lead conversion paths.'
        },
        {
          title: 'Phase 3: Next.js 14 & Headless CMS Architecture',
          desc: 'Engineered a modular Next.js 14 App Router codebase integrated with Sanity CMS for real-time portfolio management.'
        },
        {
          title: 'Phase 4: Optimization, QA & Global Launch',
          desc: 'Executed end-to-end performance profiling, image WebP compression, mobile touch QA, and Cloudflare CDN deployment.'
        }
      ]
    },
    sevenStepExecution: [
      {
        step: '01',
        number: '01',
        title: 'Discover & Scope',
        summary: 'In-depth requirements mapping, user audience analysis, and technical feasibility audit.',
        actions: [
          'Audited existing brand assets and target demographic expectations across Hyderabad & Vijayawada.',
          'Mapped out user journeys for residential, commercial, and modular kitchen client verticals.',
          'Established strict performance benchmarks: sub-500ms page load speed and 100% mobile responsiveness.'
        ]
      },
      {
        step: '02',
        number: '02',
        title: 'Design & Prototype',
        summary: 'Editorial layout design, dark/light luxury tokens, and interactive Figma prototypes.',
        actions: [
          'Created custom typography hierarchies combining refined serif headers with clean sans-serif body copy.',
          'Designed high-fidelity interactive Figma prototypes showcasing smooth image transitions.',
          'Established a unified dark glass aesthetic with subtle cyan glowing accents for luxury branding.'
        ]
      },
      {
        step: '03',
        number: '03',
        title: 'System Architecture',
        summary: 'Next.js 14 App Router, Sanity CMS schema design, and image CDN pipeline.',
        actions: [
          'Architected structured Sanity CMS schemas for Projects, Services, Testimonials, and FAQs.',
          'Configured automatic WebP image transcoding pipelines to serve device-specific resolution assets.',
          'Designed API routes for instant WhatsApp consultation pre-filling.'
        ]
      },
      {
        step: '04',
        number: '04',
        title: 'Full-Stack Development',
        summary: 'Type-safe React engineering, Tailwind CSS styling, and Framer Motion animations.',
        actions: [
          'Engineered server-side rendered (SSR) pages for maximum SEO ranking and sub-second render times.',
          'Implemented Framer Motion scroll-driven parallax effects for interior project showcases.',
          'Built responsive touch-enabled modal galleries for high-resolution project inspection.'
        ]
      },
      {
        step: '05',
        number: '05',
        title: 'AI & Automation Integration',
        summary: 'WhatsApp Business API pre-filling and automated lead attribution tracking.',
        actions: [
          'Integrated instant 1-click WhatsApp messaging pre-populated with client project details.',
          'Configured Google Analytics 4 (GA4) event tracking for consultation button clicks.'
        ]
      },
      {
        step: '06',
        number: '06',
        title: 'QA & Security Audit',
        summary: 'Cross-device mobile testing, accessibility verification, and performance profiling.',
        actions: [
          'Tested across 15+ iOS and Android mobile devices and iPad tablet viewports.',
          'Verified SSL encryption, security headers, and WCAG color contrast compliance.',
          'Achieved 98+ Google Lighthouse scores across Performance, Accessibility, and Best Practices.'
        ]
      },
      {
        step: '07',
        number: '07',
        title: 'Deploy & Scale',
        summary: 'Vercel Edge Network deployment, Cloudflare CDN, and ongoing maintenance.',
        actions: [
          'Deployed on Vercel Edge infrastructure with automatic GitHub CI/CD build pipelines.',
          'Configured Cloudflare DNS and global edge caching for zero-latency asset loading.',
          'Provided client team training on Sanity CMS for seamless future portfolio updates.'
        ]
      }
    ],
    suggestedChangesAndImpact: [
      {
        issueIdentified: 'Slow, uncompressed image carousels caused 4.5s load times on mobile devices.',
        ourRecommendation: 'Migrate to Next.js Image Optimization with progressive WebP delivery and blur placeholders.',
        implementedSolution: 'Built automated CDN image pipeline that scales images dynamically based on device resolution.',
        businessImpact: 'Reduced mobile load times from 4.5 seconds to 420ms (90.6% performance improvement).'
      },
      {
        issueIdentified: 'Multi-field contact form caused high user drop-off on mobile devices.',
        ourRecommendation: 'Replace lengthy forms with 1-click pre-filled WhatsApp consultation booking.',
        implementedSolution: 'Integrated floating WhatsApp CTA that launches pre-formatted consultation messages directly in the app.',
        businessImpact: 'Increased monthly inbound client consultation inquiries by 340% within the first 30 days.'
      },
      {
        issueIdentified: 'Static text layouts failed to convey the premium craftsmanship of luxury interior projects.',
        ourRecommendation: 'Introduce editorial project storyboards with full-bleed photography and interactive before/after sliders.',
        implementedSolution: 'Designed custom editorial layout templates featuring high-resolution visual storytelling.',
        businessImpact: 'Average user session duration increased from 45 seconds to 3 minutes 20 seconds.'
      }
    ],
    clientTrustStory: `One of the most defining aspects of the C Bhanu's Interiors engagement was the extraordinary level of mutual trust. 

When C Bhanu's leadership team first met with InvarSoft, they expressed frustration with past web development agencies who presented generic templates that failed to capture their studio's artistic vision. 

InvarSoft took full ownership of the technical and aesthetic direction. We advised them to completely discard traditional corporate layouts in favor of an editorial visual magazine aesthetic. When we presented our initial high-fidelity prototype and interactive component system, the client was captivated. They placed complete faith in our recommendations and approved our design architecture on the very first review with zero revisions required!

This seamless trust allowed us to focus entirely on precision execution, resulting in a world-class digital platform delivered on schedule.`,
    technicalGuidanceAndArchitecture: [
      {
        title: 'Next.js 14 App Router & Server Components',
        content: 'By utilizing Next.js 14 React Server Components (RSC), we ensured that HTML is pre-rendered on the server, drastically reducing client-side JavaScript execution and enabling instant initial page loads.',
        highlights: ['Server-Side Rendering (SSR)', 'React Server Components', 'Sub-500ms Core Web Vitals']
      },
      {
        title: 'Headless Sanity CMS Integration',
        content: 'Decoupled content management allows the C Bhanu design team to upload new project photos, update room categories, and publish blog articles in real-time without touching a line of code.',
        highlights: ['GraphQL Content API', 'Real-Time Live Preview', 'Structured Image Assets']
      },
      {
        title: 'Vercel Edge Network & Cloudflare CDN',
        content: 'Deployed across a global edge network, ensuring that high-resolution interior photography is cached at edge locations closest to the user for zero-latency presentation.',
        highlights: ['Global Edge Caching', 'Automated GitHub CI/CD', '99.99% Uptime Guarantee']
      }
    ],
    resultsAndMetrics: [
      { metric: '340%', label: 'Inbound Consultation Increase', detail: '3.4x growth in qualified client inquiries via direct WhatsApp integration.' },
      { metric: '420ms', label: 'Average Page Load Speed', detail: 'Sub-second Core Web Vitals speed across mobile and desktop devices.' },
      { metric: '98+', label: 'Lighthouse Performance Score', detail: 'Top-tier ratings for Speed, SEO, Accessibility, and Best Practices.' },
      { metric: '1st Review', label: 'Client Design Approval', detail: 'Finalized on the initial presentation with 100% client confidence.' }
    ]
  },

  invarthings: {
    id: 'invarthings',
    title: 'InvarThings',
    category: 'IoT, Smart Tech & E-Commerce Platform',
    subtitle: 'Comprehensive Engineering & Case Study Report for InvarThings',
    liveUrl: 'https://invarthings.com',
    image: '/invarthings-cover.png',
    clientName: 'InvarThings Technologies',
    location: 'Global / E-Commerce Platform',
    timeline: '5 Weeks (Full Engineering & Launch)',
    servicesProvided: [
      'Custom Headless E-Commerce Platform Architecture',
      'Interactive Product Configurator & Category Filters',
      'Stripe & Global Multi-Currency Payment Gateway Integration',
      'Automated Real-Time Inventory & Order Dispatch Sync',
      'High-Speed Edge CDN Infrastructure & Sub-Second Checkout',
      'Mobile-First Cart & Checkout UX Optimization'
    ],
    executiveSummary: `InvarThings (invarthings.com) is a next-generation smart technology, IoT hardware, and consumer electronics e-commerce platform. Designed to serve tech enthusiasts, smart home builders, and enterprise hardware buyers, InvarThings required a resilient, ultra-fast online shopping environment capable of handling high transaction volumes with sub-second checkout speeds.

InvarSoft engineered a custom headless e-commerce architecture powered by Next.js Commerce, Node.js microservices, Stripe API integration, and Redis caching. By following our 7-step engineering process, we created a high-throughput shopping experience that reduced cart checkout friction by 65% and increased global sales conversion rates.`,
    clientChallenge: `InvarThings faced critical infrastructure and user experience challenges prior to InvarSoft's intervention:
1. Slow Monolithic Checkout: Traditional e-commerce platforms suffered from multi-step page reloads during cart updates and checkout, causing high cart abandonment.
2. Real-Time Inventory Sync: High demand for popular IoT products led to overselling due to delayed stock level updates across inventory management systems.
3. Complex Tech Product Categorization: Explaining technical specifications for smart devices required clean, interactive product configurators that legacy storefronts could not support.`,
    planningAndStrategy: {
      overview: `InvarSoft structured a 5-week agile engineering roadmap prioritizing security, transaction speed, and catalog scalability.`,
      phases: [
        {
          title: 'Phase 1: Architecture & API Protocol Specification',
          desc: 'Defined data models for products, variants, SKUs, inventory webhooks, and payment gateway security compliance.'
        },
        {
          title: 'Phase 2: UI/UX & Headless Storefront Design',
          desc: 'Created a sleek, high-tech dark interface optimized for product discovery, technical spec comparison, and instant carting.'
        },
        {
          title: 'Phase 3: Microservice & Stripe API Development',
          desc: 'Engineered high-throughput backend services handling cart state, inventory sync, and multi-currency Stripe payment processing.'
        },
        {
          title: 'Phase 4: Load Testing, Security & Production Launch',
          desc: 'Executed simulated high-concurrency traffic tests, PCI-DSS compliance audits, and global CDN deployment.'
        }
      ]
    },
    sevenStepExecution: [
      {
        step: '01',
        number: '01',
        title: 'Discover & Scope',
        summary: 'Catalog scope definition, target hardware audience research, and security specification.',
        actions: [
          'Analyzed IoT product spec categories: Smart Home, Wearables, Industrial Sensors, and Custom Hardware.',
          'Defined security requirements for PCI-DSS compliant checkout and customer data protection.',
          'Set performance target: sub-second checkout page transitions under high concurrency.'
        ]
      },
      {
        step: '02',
        number: '02',
        title: 'Design & Prototype',
        summary: 'High-tech dark UI design system, interactive cart drawers, and product configurators.',
        actions: [
          'Designed a futuristic neon-accented dark interface optimized for hardware tech products.',
          'Created interactive product specification tables and instant search preview overlays.',
          'Built mobile-first cart drawers with real-time shipping cost calculators.'
        ]
      },
      {
        step: '03',
        number: '03',
        title: 'System Architecture',
        summary: 'Headless Next.js Commerce, Node.js API endpoints, and Redis stock caching.',
        actions: [
          'Architected headless storefront decoupled from inventory database using GraphQL APIs.',
          'Implemented Redis memory caching for instantaneous stock checking and cart retention.',
          'Configured Stripe Webhook handlers for real-time order confirmation and dispatch.'
        ]
      },
      {
        step: '04',
        number: '04',
        title: 'Full-Stack Development',
        summary: 'React frontend engineering, Tailwind CSS, and Node.js microservices.',
        actions: [
          'Engineered sub-second client-side page transitions with optimistic UI cart updates.',
          'Built custom product filtering logic allowing filtering by voltage, wireless protocol, and category.',
          'Integrated automated email & SMS order confirmation triggers.'
        ]
      },
      {
        step: '05',
        number: '05',
        title: 'AI & Automation Integration',
        summary: 'AI product recommendation engine and automated inventory replenishment alerts.',
        actions: [
          'Integrated smart AI product recommendation algorithm based on user browsing history.',
          'Automated low-stock notification webhooks to inventory managers.'
        ]
      },
      {
        step: '06',
        number: '06',
        title: 'QA & Security Audit',
        summary: 'High-concurrency load testing, payment security verification, and cross-browser QA.',
        actions: [
          'Simulated 5,000+ simultaneous checkout sessions to verify database stability.',
          'Verified end-to-end PCI-DSS payment tokenization security.',
          'Optimized asset delivery to achieve sub-second load times worldwide.'
        ]
      },
      {
        step: '07',
        number: '07',
        title: 'Deploy & Scale',
        summary: 'Vercel Edge Network deployment, Cloudflare security rules, and continuous monitoring.',
        actions: [
          'Deployed on Vercel Enterprise infrastructure with automated continuous deployment.',
          'Configured Cloudflare Web Application Firewall (WAF) to block DDoS threats.',
          'Established 24/7 Sentry real-time error tracking and transaction monitoring.'
        ]
      }
    ],
    suggestedChangesAndImpact: [
      {
        issueIdentified: 'Multi-page reloads during checkout caused high cart abandonment.',
        ourRecommendation: 'Implement a single-page slide-out cart drawer with instant 1-click Stripe checkout.',
        implementedSolution: 'Built headless React cart state that updates in memory without full-page reloads.',
        businessImpact: 'Reduced checkout abandonment by 42% and increased completed order rate.'
      },
      {
        issueIdentified: 'Dense technical specifications were difficult to read on mobile devices.',
        ourRecommendation: 'Redesign product pages with collapsible spec accordions and visual feature badges.',
        implementedSolution: 'Engineered clean mobile spec layouts with interactive 360-degree product image views.',
        businessImpact: 'Increased mobile user session duration by 210%.'
      }
    ],
    clientTrustStory: `The InvarThings founding team gave InvarSoft complete creative and technical freedom. 

Recognizing our deep expertise in modern web performance and e-commerce architecture, they entrusted us to choose the tech stack, design the component library, and structure the checkout funnel. When we presented the initial functional prototype, the client expressed immense satisfaction and approved the entire design and codebase without requesting structural changes.

Our technical guidance provided InvarThings with an enterprise-ready storefront built for global scale.`,
    technicalGuidanceAndArchitecture: [
      {
        title: 'Headless Next.js Commerce Architecture',
        content: 'Decoupling the frontend display layer from backend product data enabled instant sub-second page transitions and complete design freedom.',
        highlights: ['Headless Storefront', 'GraphQL Data Fetching', 'Optimistic UI Cart Updates']
      },
      {
        title: 'Stripe Global Payment Gateway Integration',
        content: 'Integrated secure multi-currency payment processing supporting credit cards, Apple Pay, Google Pay, and regional payment rails.',
        highlights: ['PCI-DSS Compliant Tokenization', 'Apple Pay & Google Pay', 'Webhook Event Processing']
      },
      {
        title: 'Redis Real-Time Stock Caching',
        content: 'Utilized Redis in-memory data store to handle high-frequency stock level queries, preventing overselling during flash sales.',
        highlights: ['In-Memory Stock Cache', 'Zero-Latency Availability Check', 'High-Concurrency Stability']
      }
    ],
    resultsAndMetrics: [
      { metric: '42%', label: 'Reduction in Cart Abandonment', detail: 'Instant 1-click checkout drawer eliminated multi-page drop-offs.' },
      { metric: '< 500ms', label: 'Checkout Load Speed', detail: 'Sub-second transaction processing on desktop and mobile devices.' },
      { metric: '100%', label: 'PCI-DSS Payment Security', detail: 'End-to-end tokenized payment processing with zero raw data storage.' },
      { metric: '1st Review', label: 'Client Approval', detail: 'Approved on initial presentation with complete client confidence.' }
    ]
  }
};
