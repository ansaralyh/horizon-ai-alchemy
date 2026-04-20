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
    id: "techflow-pipeline",
    tag: "Predictive Analytics",
    client: "TechFlow",
    title: "340% Efficiency Gain with AI Data Pipeline",
    desc: "Redesigned their legacy data infrastructure with a real-time ML pipeline, reducing processing time by 87% and enabling predictive demand forecasting.",
    metrics: ["340% efficiency", "87% faster", "$4.2M saved"],
  },
  {
    id: "novasoft-chatbot",
    tag: "LLM / NLP",
    client: "NovaSoft",
    title: "Autonomous Support Chatbot — 80% Query Resolution",
    desc: "Built an enterprise LLM chatbot trained on 3 years of support data, now handling 80% of customer queries without human intervention.",
    metrics: ["80% autonomous", "$2M/yr saved", "4.8★ CSAT"],
  },
  {
    id: "dataverse-revenue",
    tag: "Predictive AI",
    client: "DataVerse",
    title: "Revenue Forecast Accuracy from 65% → 94%",
    desc: "Deployed a multi-model ensemble for revenue and market trend prediction that outperformed all existing BI tools by 29 percentage points.",
    metrics: ["94% accuracy", "+29pp uplift", "6wk delivery"],
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
      headline: "AI-Powered Content Automation System",
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
];
