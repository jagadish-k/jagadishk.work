Jagadish, K.
Principal / Staff Engineer · Frontend Architect · Tech Lead · Agentic AI & Platform Architecture
Bengaluru, Karnataka, India | +91-9916128366 | jagadish.kasi@pm.me | linkedin.com/in/jagadish-kasi | github.com/jagadish-k
SUMMARY
Principal Engineer and hands-on technical leader with 18 years building web platforms at Cleartax, LinkedIn, Walmart, and Flipkart. Currently co-founder and CTO of Tryft, building Traceflow, an enterprise supply-chain intelligence platform recoverable revenue, delivered by a 6-engineer team running an agentic AI development practice end to end. Previously, Principal Frontend Engineer at Uberall leading a 30+ engineer chapter across 8 countries, and builder of ML evaluation and API discovery platforms adopted across LinkedIn's engineering organization.
Agentic Coding & MCP · LLM Integration · Node.js & BFF Architecture · Micro-Frontends · Distributed Systems · AWS / Azure · Rapid Prototyping · Engineering Leadership · Scalable Frontends

### WORK EXPERIENCE

Tryft
CTO & Co-founder, Remote May 2024 - Present
PRODUCT IMPACT & TECHNICAL LEADERSHIP
Surfaced $2–3M per quarter in recoverable revenue: Built and scaled Traceflow, a subscription supply-chain intelligence platform deployed across an enterprise customer's global manufacturing sites — each an isolated tenant with distinct processes — serving ~300 users and tracing revenue leakage across datasets exceeding 30,000 materials.
Leads a 6-engineer team while shipping daily: Directs 3 backend, 2 frontend, and 1 QA engineer as founding technical leader — architecting APIs and system approaches, running code reviews and deployments, and personally building screens and workflow logic rather than managing from a distance.
Created R&D cost attribution where none existed: Delivered a drug experimentation module letting research scientists build material lineages across revisions and phases, converting discovery spend previously lost in email threads into cost visibility for finance and senior leadership — a capability with no direct off-the-shelf equivalent, built as a customer feature request.
AGENTIC AI DEVELOPMENT & LLM INTEGRATION
Agentic coding operating model: Runs a production agentic development workflow orchestrating Claude Code, OpenCode, and Cursor against multiple LLM providers (Claude, GPT, GLM), with Model Context Protocol (MCP) servers — Context7, Figma, Playwright, Sentry — supplying live documentation, design specs, browser automation, and production error telemetry; feeds agents graph-based codebase context and rigorous specifications to make generated work verifiable rather than merely fast.
LLM triage across 30,000+ materials daily: Integrated Azure OpenAI Service into daily inventory operations to classify risk, demand, and staleness, producing actionable operator inputs and executive risk summaries from data volumes no team could review manually.
Cut API integration from weeks to one day: Architected a contract-first pipeline converting GraphQL and OpenAPI specifications into auto-generated mock services, Zod schemas, TypeScript types, and React Query hooks, unblocking UI development ahead of backend delivery.
ARCHITECTURE & INFRASTRUCTURE
60 FPS across 800+ node graphs: Engineered a spatial virtualization engine on ReactFlow to break past native rendering limits at ~1,000 nodes, using a 9-grid viewport algorithm with predictive pre-loading; extended it with an interactive Bill of Materials module computing real-time multi-level yields across upstream and downstream nodes.
Zero-downtime delivery and multi-tenant security: Designed full-stack infrastructure on a Node.js/Next.js BFF, Docker, PM2 hot-cold instances, and automated Azure Front Door traffic swapping, gated by CI/CD suites (Jest, RTL, Cypress, Playwright); engineered client- side ABAC resolving Auth0 JWT claims to gate routes, actions, and permissions across tenant roles.

Uberall
Principal Frontend Engineer, FTE - Contract (Remote) August 2022 - April 2024
Sole Principal Frontend Engineer; led a 30+ engineer chapter across 8 countries: Held company-wide frontend technical authority, directing a remote-first chapter spanning Australia, Germany, Spain, Italy, France, the US, Egypt, and India, defining technical debt roadmaps and automating PR and pre-commit quality gates across every team.
Moved contract failures from runtime to compile time: Drove organisation-wide TypeScript adoption and automated code generation from OpenAPI specifications so frontend–backend mismatches surfaced at compile time and built Node.js BFF services consolidating fragmented API surfaces into UI-shaped contracts.
Deployed as a delivery unblocker: Embedded into high-priority teams to break bottlenecks, govern code reviews, and set architecture patterns; co-led engineering execution for a full platform navigation overhaul with Product and UX.
Unified application patterns via a Backbone-to-React migration: Systematically deprecated Backbone.js and its adapter layers into a shared React component library, converging fragmented UI and design patterns onto one system, and isolated legacy assets from a monolithic backend through a modular configuration architecture.

Cleartax
Associate Architect, Bengaluru March 2021 - August 2022
Unified 8 SaaS applications: Re-engineered eight subdomain-isolated products into a single micro-frontend architecture using Webpack Module Federation, routing them under clean sub-paths beneath a central shell container.
Set the frontend standard for 60 developers: Architected the enterprise component library and boilerplate framework (React, TypeScript, Ant Design, Storybook) adopted across the org, giving the platform consistent widgets and patterns and letting engineers move between teams without relearning a team-specific paradigm.
Lighthouse scores to 90+: Raised responsiveness across the platform through faster time-to-first-byte, reduced layout shift, and deliberate loading states; re-architected API routing through internal gateways rather than public endpoints to cut cross-service latency.
Eliminated duplicated platform logic: Centralized user sessions, permissions, dynamic configuration, and plan entitlements in the shell, removing redundant API calls across every module; ran the Frontend Platform team on a rotating inner-source contribution model.

OptimeeringAqua
Consultant, Contract(Remote) October 2020 – January 2021
Built the core frontend for bioplan.ai, an AI-driven aquaculture production planning platform used by fish farming operations across Norway, designing data-dense dashboards that translate optimization model outputs into actionable telemetry — biomass growth predictions, feed consumption curves, and environmental metrics.

LinkedIn
Senior Software Engineer, Bengaluru May 2019 – September 2020
Built LinkedIn's ML model evaluation platform: Engineered a system (Ember.js, Python/Flask), adopted by data science teams across LinkedIn engineering, letting them measure model efficacy across revisions and track historic progression of serialized model artifacts, and letting downstream consumers connect sample data from production pipelines to validate whether a model fit their use case before adopting it.
Shipped the API discovery platform used across LinkedIn engineering: Built a cross-team API catalog with an interactive playground and a rich faceted search module — tags, autocomplete, and facets — surfacing APIs published by every development team to improve collaboration and cut duplicated integration effort.
Extended code review and CI/CD tooling: Augmented LinkedIn's internal code review board, integrating automated code health metrics and review validations into the pull request pipeline.

Walmart
Senior Software Engineer – IN4, Bengaluru May 2016 – May 2019
Built the UI for Smart Forecasting, Walmart's demand forecasting platform: Architected the interface giving demand managers visibility and manual override across roughly 500 million store-item forecasts, surfacing a metrics space of tens of billions of historical and forward-looking data points; the platform materially reduced forecast misses against the legacy tool it replaced.
Founding member, Sam's Club Frontend Chapter: Architected an early shell-based container hosting 6 independent business applications communicating over an in-browser event bus — predating modern micro-frontend tooling — backed by Node.js BFF services aggregating supply chain backend data.
Data platform tooling and migration standards: Built the web interface for an in-house Data Lake with configurable visualization components and interactive ETL pipeline builders; authored the technical standards for migrating AngularJS 1.6 applications to React, and mentored returning-to-work women engineers in building end-to-end Cypress suites.

Snapwiz
Lead Software Engineer, Bengaluru February 2015 – May 2016
Led the team that built Glider.ai, a real-time data-science-driven candidate evaluation SaaS platform (Meteor.js, Node.js, MongoDB) with Python NLP engines powering job-matching recommendations; modernized the Edulastic EdTech interface for responsiveness and accessibility.

Tribune Digital Ventures
Senior UI Developer, Bengaluru December 2013 – February 2015
Rebuilt zap2it.com in a 5-member core team, integrating Apache Solr for site-wide search and a reusable analytics and ad-monetization framework across sponsored channels.

Flipkart
UI Developer, Bengaluru February 2013 – November 2013
Engineered high-concurrency Node.js services for the seller onboarding platform behind Flipkart's third-party marketplace pivot and built the Order Management UI over a Node.js BFF orchestrating SwiftMQ, catalog, pricing, and delivery services through peak festive traffic.

Dell International Services
Javascript Developer, Bengaluru April 2012 – February 2013
Built sub-100ms DOM-injected JavaScript campaigns via Adobe Test & Target across global Dell domains, promoting winning personalization and checkout experiments into production.

Wipro
Frontend Developer, Bengaluru August 2008 – April 2012
Co-developed mobile UI components and OS-level interface features for Toshiba's TG01W Windows Mobile platform and delivered frontend modules for Dish.com under strict cross-browser constraints. 

### SELECTED INDEPENDENT PROJECTS

Products built end-to-end through agentic development workflows, exploring delivery velocity on non-trivial problem domains.

Stad-Ops: AI-Assisted Incident Command Platform for Live Venues (pre-launch)
Real-time nerve-center operations platform for stadium and large-venue incident management, targeting high-tension environments where triage latency affects safety outcomes.
Engineered dual-channel intake — structured mobile reporting and voice notes transcribed via OpenAI Whisper — with the Gemini API performing categorization, resolution assignment, and dispatch recommendation surfaced to a human operator for confirmation.
Built a multi-level canvas map visualizer with venue drawing tools and Google Maps integration, plus roster-based staff assignment, multi-role permissions, real-time state synchronization, and audit logging; generalizes to mall operations and factory floors.

Casa-Craft: 2D-to-3D Interior Design Quoting Visualizer (pre-launch)
Browser-based tool converting 2D floor layouts into interactive 3D visualizations with component selection and live quoting, built on React Router and Three.js with a Docker-first development strategy.
Engineered with React Router and Three.js on a Docker-first development strategy for reproducible environments and straightforward containerized deployment.

Remove-BG: Client-Side Image Background Removal
github.com/jagadish-k/remove-bg | jagadish-k.github.io/remove-bg
Built a browser-based tool removing checkered transparency patterns, solid backgrounds, and shadows from images using OpenCV.js compiled to WebAssembly, keeping all processing local so images never leave the client.
Engineered tolerance-tuned pattern detection with manual color picking and magnified preview, exporting transparent PNGs; React 19, TypeScript, Vite, TailwindCSS, deployed via GitHub Actions.
Developed end-to-end through an agentic coding workflow, with the full AI development transcript and agent instruction context committed to the public repository.

### TECHNICAL SKILLS

- _AI & Agentic Engineering_: Agentic coding operating model,Claude Code, OpenCode, Cursor · Model Context Protocol (MCP) · multi-provider LLM orchestration, Claude, GPT, Gemini, GLM · Azure OpenAI Service · OpenAI Whisper · LLM summarization and triage pipelines · ML model evaluation platforms · NLP document ingestion
- _Languages & Runtimes_: JavaScript (ES6+) · TypeScript · Python · Node.js · Express.js · FastAPI, Flask
- \*Frontend Architecture: React, Next.js, Angular · micro-frontends (Webpack Module Federation) · design systems and component libraries ,Material UI, Ant Design, Tailwind, Storybook · Redux, TanStack Query · data visualization at scale ,D3.js, Three.js, Canvas,
- _Distributed Systems & APIs_: Microservices · BFF (Backend-For-Frontend) · GraphQL, REST, WebSockets · OpenAPI/Swagger contract-first design · event-driven architecture and message brokers, Kafka, SwiftMQ · real-time APIs, protobuf, grpc, SSE
- _Data & Cloud_: PostgreSQL, MySQL · MongoDB, Redis · Elasticsearch, Apache Solr · AWS ,S3, CloudFront, API Gateway)· Azure ,Front Door, OpenAI Service · Google Cloud · Docker, GitHub Actions, Azure Pipelines · Auth0 ,ABAC,RBAC, JWT
  Quality & Delivery: Jest, React Testing Library, Playwright, Cypress · TDD · CI/CD quality gating · code review governance · technical mentorship

### CERTIFICATIONS

### EDUCATION

Bachelor of Technology, Computer Science & Engineering
Biju Patnaik University of Technology, Odisha, India | 2004 – 2008 | CGPA – 7.22
