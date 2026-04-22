export interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  title: string;
  desc: string;
  metrics: string[];
  // Detail page content
  hero?: {
    headline: string;
    subheadline: string;
    stats: { label: string; value: string }[];
  };
  overview?: {
    title: string;
    content: string[];
    features: string[];
  };
  performance?: {
    title: string;
    content: string;
    bullets: string[];
  };
  monthly?: {
    title: string;
    content: string;
    returns: { month: string; value: string }[];
  };
  risk?: {
    title: string;
    content: string;
    metrics: { label: string; value: string }[];
  };
  trust?: {
    title: string;
    content: string;
    points: string[];
  };
  cta?: {
    title: string;
    content: string;
    buttons: { label: string; href: string }[];
  };
  challenge?: {
    title: string;
    content: string;
    problems: string[];
    image?: string;
  };
  solution?: {
    title: string;
    content: string;
    image?: string;
  };
  featuresList?: {
    iconName: string;
    title: string;
    desc: string;
    points?: string[];
  }[];
  results?: {
    title: string;
    content: string;
    bullets: string[];
    image?: string;
  };
  techStack?: string[];
  skills?: string[];
  bonusLine?: string;
  image?: string;
  gallery?: string[];
  themeColor?: string;
  monthlyVisual?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "mechanical-trading",
    tag: "Algorithmic Trading / FinTech",
    client: "Private Trading Client",
    title: "Mechanical Trading Strategy – 8 Months Verified Performance",
    desc: "A fully automated GBPUSD strategy delivering consistent growth with a +320.70% total gain over 8 months of live tracking.",
    metrics: ["+320.70% Gain", "30.14% Max DD", "$3,334+ Profit"],
    image: "/assets/trading-hero.png", 
    gallery: ["/assets/trading-chart-1.png", "/assets/trading-chart-2.png"],
    themeColor: "amber",
    monthlyVisual: "/assets/monthly-performance.png",
    bonusLine: "No discretion. No emotions. Just rules and results.",
    hero: {
      headline: "Mechanical Trading Strategy – 8 Months Verified Performance",
      subheadline: "Fully automated GBPUSD strategy delivering consistent growth with controlled risk.",
      stats: [
        { label: "Total Gain", value: "+320.70%" },
        { label: "Max Drawdown", value: "30.14%" },
        { label: "Profit Generated", value: "$3,334+" },
        { label: "Live Track Record", value: "8 Months" }
      ]
    },
    overview: {
      title: "Strategy Overview",
      content: [
        "This is a fully mechanical, rule-based trading strategy designed for consistency, discipline, and scalability.",
        "It eliminates emotional decision-making by relying on predefined entry, exit, and risk management rules.",
        "The system was deployed on a live account and actively managed over an 8-month period, trading exclusively on GBPUSD."
      ],
      features: [
        "100% rule-based execution",
        "Fully automated (MetaTrader 5)",
        "Strict risk management controls",
        "Optimized for consistency over time"
      ]
    },
    performance: {
      title: "Performance Highlights",
      content: "Over the course of 8 months, the strategy demonstrated strong growth while maintaining controlled drawdowns.",
      bullets: [
        "Consistent equity curve growth",
        "Profitable across multiple months",
        "Risk-to-reward ratio maintained near 2:1",
        "Balanced long & short exposure"
      ]
    },
    monthly: {
      title: "Monthly Performance",
      content: "The strategy maintained positive performance across multiple months, with strong acceleration in later periods.",
      returns: [
        { month: "August", value: "+49.89%" },
        { month: "September", value: "+29.02%" },
        { month: "October", value: "+21.31%" },
        { month: "November", value: "+79.32%" }
      ]
    },
    risk: {
      title: "Risk & Stability",
      content: "Risk is actively controlled through predefined parameters, ensuring capital protection while allowing growth.",
      metrics: [
        { label: "Max Drawdown", value: "30.14%" },
        { label: "Average Holding Time", value: "~6 hours" },
        { label: "Reward-to-Risk Ratio", value: "~1.91" },
        { label: "Exposure Per Trade", value: "Strictly Controlled" }
      ]
    },
    trust: {
      title: "Transparency & Verification",
      content: "All results are verified through a third-party analytics platform, ensuring full transparency and credibility.",
      points: [
        "Live account tracking",
        "Real deposits & withdrawals",
        "No simulated results"
      ]
    },
    cta: {
      title: "Work With Us",
      content: "Looking to implement a similar mechanical strategy or have one built for your fund or personal trading?",
      buttons: [
        { label: "👉 Book a Consultation", href: "/contact" },
        { label: "👉 Request Strategy Demo", href: "/contact" }
      ]
    }
  },

  {
    id: "ai-content-automation",
    tag: "AI Automation / Workflow Systems",
    client: "horizonbeetech.com",
    title: "AI-Powered Content Automation System",
    desc: "Fully automated AI-driven system for content generation and publishing at scale.",
    metrics: ["100% Automated", "90% Cost Reduction", "Daily Continuity"],
    image: "/assets/ai-process-visual.png",
    gallery: ["/assets/service-automation.jpg", "/assets/service-nlp.jpg", "/assets/service-analytics.jpg"],
    themeColor: "amber",
    hero: {
      headline: "AI-Powered Content Automation – Verified Performance",
      subheadline: "Fully automated AI-driven system for content generation and publishing at scale.",
      stats: [
        { label: "Manual Effort", value: "0%" },
        { label: "Production Speed", value: "10x Faster" },
        { label: "Workflow Logic", value: "n8n Core" },
        { label: "Output Quality", value: "SEO Ready" }
      ]
    },
    overview: {
      title: "Project Overview",
      content: [
        "We designed and implemented a fully automated content generation and publishing system for horizonbeetech.com, eliminating manual effort across the entire blogging workflow.",
        "This solution leverages AI and workflow automation to streamline content creation, improve efficiency, and enable consistent publishing at scale."
      ],
      features: [
        "End-to-end automation pipeline",
        "Multi-LLM integration (GPT-4/Claude)",
        "Automated SEO optimization",
        "Direct CMS publishing"
      ]
    },
    challenge: {
      title: "The Challenge",
      content: "Managing a consistent content pipeline required significant manual effort—from writing and formatting articles to uploading and publishing them. The team faced massive bottlenecks that limited growth.",
      problems: [
        "Time inefficiencies in research and writing",
        "Inconsistent publishing schedules due to burnout",
        "High operational overhead for content managers"
      ],
      image: "/assets/service-ml.jpg"
    },
    solution: {
      title: "The Solution",
      content: "We built an end-to-end automation system using n8n, integrating AI-driven content generation with seamless data handling and direct publishing capabilities via REST APIs.",
      image: "/assets/service-nlp.jpg"
    },
    featuresList: [
      {
        iconName: "BrainCircuit",
        title: "AI Content Generation",
        desc: "Integrated Large Language Models (LLMs) to generate SEO-optimized articles automatically.",
        points: [
          "Integrated Large Language Models (LLMs)",
          "Automatically generates SEO-optimized articles",
          "Supports keyword-based and topic-based inputs",
          "Ensures structured, readable, and relevant content"
        ]
      },
      {
        iconName: "FileJson",
        title: "Automated Data Management",
        desc: "Formats content into clean drafts and stores articles in Google Docs via API.",
        points: [
          "Formats generated content into clean, structured drafts",
          "Stores articles directly in Google Docs via API",
          "Enables easy review, editing, and version control"
        ]
      },
      {
        iconName: "Send",
        title: "Direct Publishing Pipeline",
        desc: "Connects to backend via REST APIs to automatically upload blog posts.",
        points: [
          "Connects to website backend via REST APIs",
          "Automatically uploads and stages blog posts",
          "Creates a seamless flow from generation → review → publication"
        ]
      }
    ],
    results: {
      title: "Results & Impact",
      content: "The system transformed content production from a manual burden into a scalable automated engine.",
      bullets: [
        "Eliminated manual blogging workflow completely",
        "Reduced content production time by over 90%",
        "Enabled scalable and consistent publishing frequency",
        "Improved overall operational efficiency and ROI"
      ],
      image: "/assets/monthly-performance.png"
    },
    techStack: ["n8n", "OpenAI / Anthropic", "Google Docs API", "REST APIs", "Node.js"],
    skills: ["Automation System Design", "AI Workflow Integration", "API Development", "End-to-end Deployment"],
    cta: {
      title: "Work With Us",
      content: "Looking to automate your content or operations?",
      buttons: [
        { label: "👉 Book a Consultation", href: "/contact" },
        { label: "👉 Discuss Your Project", href: "/contact" }
      ]
    }
  },
  {
    id: "nas100-algo-trading",
    tag: "Algorithmic Trading / Quantitative Systems",
    client: "Private Trading System",
    title: "NAS100 Algorithmic Trading Strategy (ORB + FVG)",
    desc: "Rule-based trading system combining price action and quantitative logic for consistent performance.",
    metrics: ["60% Win Rate", "NAS100 Focused", "ORB + FVG Logic"],
    image: "/assets/trading-hero.png",
    gallery: ["/assets/trading-chart-1.png", "/assets/trading-chart-2.png"],
    themeColor: "amber",
    monthlyVisual: "/assets/monthly-performance.png",
    bonusLine: "Quantitative precision. Institutional imbalances. Systematic results.",
    hero: {
      headline: "NAS100 Algorithmic Trading – Verified Performance",
      subheadline: "Rule-based trading system combining price action and quantitative logic for consistent performance.",
      stats: [
        { label: "Win Rate", value: "60%" },
        { label: "Asset Class", value: "NAS100" },
        { label: "Logic", value: "ORB + FVG" },
        { label: "Execution", value: "Automated" }
      ]
    },
    overview: {
      title: "Strategy Overview",
      content: [
        "We developed and optimized a proprietary algorithmic trading strategy for NAS100, leveraging Opening Range Breakouts (ORB) and Fair Value Gaps (FVG) to identify high-probability trade opportunities.",
        "The system combines price action precision with quantitative logic, delivering consistent performance through structured execution and automation."
      ],
      features: [
        "Opening Range Breakouts (ORB)",
        "Fair Value Gaps (FVG) Identification",
        "Multi-timeframe confirmation",
        "Automated risk management"
      ]
    },
    challenge: {
      title: "The Objective",
      content: "To create a rule-based trading system capable of identifying institutional price imbalances and capturing session volatility with minimal manual intervention.",
      problems: [
        "Capturing volatility during key market sessions",
        "Identifying institutional price imbalances",
        "Executing trades with minimal manual intervention"
      ],
      image: "/assets/trading-chart-1.png"
    },
    solution: {
      title: "Rule-Based Execution Framework",
      content: "The strategy utilizes a multi-layered approach: identifying the 30-minute opening range, detecting Fair Value Gaps for entry confluences, and applying institutional-grade risk management parameters.",
      image: "/assets/trading-chart-2.png"
    },
    featuresList: [
      {
        iconName: "BarChart3",
        title: "Opening Range Breakout (ORB)",
        desc: "Identifies breakout levels from initial session range.",
        points: [
          "Identifies key breakout levels based on initial range",
          "Captures early momentum and directional bias",
          "Rules-based session open volatility capture"
        ]
      },
      {
        iconName: "Target",
        title: "Fair Value Gaps (FVG)",
        desc: "Detects price inefficiencies for institutional entries.",
        points: [
          "Detects inefficiencies in price delivery",
          "Enables entries at institutional imbalance zones",
          "Improves risk-to-reward setups via gap refills"
        ]
      },
      {
        iconName: "Settings",
        title: "Implementation",
        desc: "Structured for clarity, scalability, and performance.",
        points: [
          "Developed using Pine Script v5 on TradingView",
          "Incorporated multi-timeframe analysis for enhanced signal confirmation",
          "Built precise entry, stop-loss, and take-profit logic",
          "Structured for clarity, scalability, and performance"
        ]
      },
      {
        iconName: "Activity",
        title: "Automation & Execution",
        desc: "To ensure efficiency and eliminate emotional bias:",
        points: [
          "Automated alerts for trade entries",
          "Dynamic stop-loss and take-profit levels",
          "Designed for hands-free execution workflows",
          "Easily integrable with trading platforms"
        ]
      }
    ],
    results: {
      title: "Backtesting & Validation",
      content: "Rigorous testing on NAS100 historical data confirmed the strategy's stability and edge across various market conditions.",
      bullets: [
        "Consistent 60% Win Rate over tested samples",
        "Stability across different market volatility phases",
        "Optimized risk-to-reward execution parameters",
        "Hands-free execution workflow integrated"
      ],
      image: "/assets/monthly-performance.png"
    },
    techStack: ["TradingView (Pine Script v5)", "MetaTrader 4", "MetaTrader 5", "Automation Alerts"],
    skills: ["Quantitative Strategy Development", "Pine Script Engineering", "Backtesting & Optimization", "Trade Automation Systems"],
    cta: {
      title: "Work With Us",
      content: "Looking to implement a similar mechanical strategy or have one built for your fund or personal trading?",
      buttons: [
        { label: "Book a Consultation", href: "/contact" },
        { label: "Request Strategy Demo", href: "/contact" }
      ]
    }
  },
  {
    id: "horizon-bee-connector",
    tag: "Trading Infrastructure / Real-Time Systems",
    client: "Internal Product / Trading System",
    title: "Horizon Bee Connector – Verified Performance",
    desc: "A high-performance middleware connecting TradingView signals to MetaTrader 4 and MetaTrader 5 for real-time automated trade execution.",
    metrics: ["Real-Time", "Zero Latency", "100% Automated"],
    image: "/assets/horizon-bee-connector-hero.png",
    gallery: ["/assets/trading-chart-1.png", "/assets/trading-chart-2.png"],
    themeColor: "amber",
    bonusLine: "From signal to execution—without delay, without compromise.",
    hero: {
      headline: "Horizon Bee Connector Verified Performance",
      subheadline: "From signal to execution—without delay, without compromise.",
      stats: [
        { label: "Execution Delay", value: "< 50ms" },
        { label: "Terminals", value: "MT4 / MT5" },
        { label: "Architecture", value: "Middleware" },
        { label: "Stability", value: "99.99% Uptime" }
      ]
    },
    overview: {
      title: "Project Overview",
      content: [
        "We designed and developed Horizon Bee Connector, a high-performance middleware solution that seamlessly connects TradingView with MetaTrader 4 and MetaTrader 5.",
        "The system enables real-time trade execution by transforming TradingView alerts into actionable orders on trading terminals—eliminating manual intervention and ensuring precision execution."
      ],
      features: [
        "High-frequency signal processing",
        "Zero-latency execution engine",
        "Direct TradingView to MT4/MT5 bridging",
        "Secure automated ecosystem"
      ]
    },
    challenge: {
      title: "The Challenge",
      content: "Traders using TradingView signals face critical limitations when aiming for true automation:",
      problems: [
        "No direct execution capability from TradingView",
        "Significant manual trade delays causing missed opportunities",
        "High risk of slippage when executing manually"
      ],
      image: "/assets/horizon-bee-connector-challenge.png"
    },
    solution: {
      title: "The Solution",
      content: "We engineered a robust middleware system that handles real-time data flow between TradingView and MetaTrader environments with high speed, accuracy, and reliability.",
      image: "/assets/trading-chart-2.png"
    },
    performance: {
      title: "System Architecture",
      content: "A low-latency bridge infrastructure guaranteeing precise order execution without bottlenecks.",
      bullets: [
        "Scalable client-server architecture",
        "Server processes TradingView webhook alerts",
        "Local client (Expert Advisor) executes trades on MT4/MT5",
        "Secure communication layer ensures data integrity"
      ]
    },
    featuresList: [
      {
        iconName: "Target",
        title: "Real-Time Webhook Processing",
        desc: "Instant and reliable receipt of TradingView alerts for immediate action.",
        points: [
          "Instant TradingView alert reception",
          "Handles high-frequency signals with ease"
        ]
      },
      {
        iconName: "FileJson",
        title: "Intelligent Trade Parsing",
        desc: "Advanced logic to decipher incoming JSON payloads into executable market orders.",
        points: [
          "Parses complex JSON payloads",
          "Extracts symbol, entry, SL, TP, volume",
          "Converts signals into executable trades"
        ]
      },
      {
        iconName: "Send",
        title: "Instant Trade Execution",
        desc: "Zero manual intervention, delivering signals straight into the market.",
        points: [
          "Routes signals directly to Expert Advisor",
          "Executes trades with minimal latency",
          "Supports dynamic conditions parameters"
        ]
      }
    ],
    trust: {
      title: "Reliability & Security",
      content: "Mission-critical financial infrastructure demands uncompromising stability and security.",
      points: [
        "Secure API authentication",
        "Advanced error handling logic",
        "Retry mechanisms for failed signals",
        "Built for real-time stability under market conditions"
      ]
    },
    techStack: ["Python", "TradingView Webhooks", "MetaTrader 4", "MetaTrader 5", "REST API Network"],
    skills: ["Middleware Architecture", "Real-Time Systems Engineering", "API Integration", "Algorithmic Execution"],
    cta: {
      title: "Automate Your Execution",
      content: "Looking to automate your trading execution without compromising on speed or security?",
      buttons: [
        { label: "Request Custom Connector", href: "/contact" },
        { label: "Book a Consultation", href: "/contact" }
      ]
    }
  },
  {
    id: "d2lang-rag-system",
    tag: "AI Automation / RAG Systems",
    client: "Internal Product / Automation Tool",
    title: "AI-Powered RAG System for D2Lang Code Generation",
    desc: "A fully automated Retrieval-Augmented Generation (RAG) system that generates accurate D2Lang code directly from user queries.",
    metrics: ["100% Automated", "95% Accuracy", "Real-Time Retrieval"],
    image: "/assets/rag-system-hero.png",
    gallery: ["/assets/rag-system-architecture.png"],
    themeColor: "amber",
    bonusLine: "From raw documentation to intelligent outputs—instantly.",
    hero: {
      headline: "AI-Powered RAG System – Verified Performance",
      subheadline: "We designed and implemented a fully automated Retrieval-Augmented Generation (RAG) system that generates accurate D2Lang code directly from user queries.",
      stats: [
        { label: "Automation Level", value: "100%" },
        { label: "Retrieval Tech", value: "Pinecone" },
        { label: "Workflow logic", value: "n8n Core" },
        { label: "Input Source", value: "GitHub" }
      ]
    },
    overview: {
      title: "Project Overview",
      content: [
        "We designed and implemented a fully automated Retrieval-Augmented Generation (RAG) system that generates accurate D2Lang code directly from user queries.",
        "The system combines structured knowledge retrieval with advanced language models to produce context-aware, reliable outputs—serving as an intelligent assistant for diagram creation and architecture design."
      ],
      features: [
        "Intelligent Context Retrieval",
        "Automated Knowledge Pipeline",
        "Context-Aware Code Generation",
        "Conversational Memory"
      ]
    },
    challenge: {
      title: "The Challenge",
      content: "Generating accurate D2Lang code requires a deep understanding of documentation and contextual awareness across multiple concepts. Documentation evolves continuously, making manual lookup time-consuming and error-prone.",
      problems: [
        "Deep understanding of complex documentation",
        "Contextual awareness across multiple diagram concepts",
        "Continuous updates as documentation evolves",
        "Time-consuming and error-prone manual interpretation"
      ],
      image: "/assets/rag-system-architecture.png"
    },
    solution: {
      title: "The Solution",
      content: "We built a scalable RAG pipeline using n8n, integrating Pinecone for vector search and OpenAI for embeddings and code generation. The system pulls latest documentation directly from GitHub, ensuring outputs are always consistent with current standards.",
      image: "/assets/rag-system-hero.png"
    },
    featuresList: [
      {
        iconName: "BrainCircuit",
        title: "Intelligent Context Retrieval",
        desc: "Semantic search powered by Pinecone retrieves relevant documentation chunks for grounding.",
        points: [
          "Semantic search powered by Pinecone",
          "Retrieves the most relevant documentation chunks",
          "Ensures accuracy and contextual grounding"
        ]
      },
      {
        iconName: "FileJson",
        title: "Automated Knowledge Pipeline",
        desc: "Pulls latest D2Lang documentation via GitHub API and automatically chunks/embeds content.",
        points: [
          "Pulls latest D2Lang documentation via GitHub API",
          "Automatically chunks and embeds content",
          "Keeps the system continuously updated"
        ]
      },
      {
        iconName: "Target",
        title: "Context-Aware Code Generation",
        desc: "Uses OpenAI chat models to generate clean, usable D2Lang code maintained to standards.",
        points: [
          "Uses OpenAI chat models for structured output",
          "Generates clean, usable D2Lang code",
          "Maintains consistency with documentation standards"
        ]
      },
      {
        iconName: "Activity",
        title: "Conversational Memory",
        desc: "Retains context across interactions, enabling iterative refinement of diagrams.",
        points: [
          "Retains context across user interactions",
          "Enables iterative refinement of diagrams and designs"
        ]
      }
    ],
    results: {
      title: "Key Benefits",
      content: "The system eliminates manual documentation lookup and significantly speeds up architecture design workflow.",
      bullets: [
        "Eliminates manual documentation lookup",
        "Improves accuracy of generated code",
        "Speeds up architecture and diagram creation",
        "Easily extendable and maintainable (no-code setup)"
      ],
      image: "/assets/rag-system-hero.png"
    },
    techStack: ["n8n (Workflow Automation)", "OpenAI API (Embeddings + Chat Models)", "Pinecone (Vector Database)", "GitHub API"],
    skills: ["RAG System Architecture", "Prompt Engineering & Optimization", "Vector Database Integration", "AI Workflow Automation"],
    cta: {
      title: "Request a Custom AI Solution",
      content: "Looking to build AI-powered assistants or RAG systems? We design intelligent systems that turn your data into actionable insights.",
      buttons: [
        { label: "👉 Request a Custom AI Solution", href: "/contact" },
        { label: "👉 Book a Consultation", href: "/contact" }
      ]
    }
  }
];
