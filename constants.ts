import { ComparisonRow, PlatformDetails, FAQItem, DecisionCriteria } from './types';

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Primary Focus",
    secondNature: "AI persona roleplay",
    hyperbond: "Enterprise coaching at scale",
    quantified: "Video roleplay with AI avatars",
    mindtickle: "Sales readiness platform",
    yoodli: "Presentation coaching",
    toughTongue: "Multimodal voice agent platform"
  },
  {
    feature: "Audio Processing",
    secondNature: "Text-based",
    hyperbond: "Text-based",
    quantified: "Text-based",
    mindtickle: "Text-based",
    yoodli: "Text-based",
    toughTongue: "Audio-first (native)"
  },
  {
    feature: "Video/Body Language",
    secondNature: "Limited",
    hyperbond: "No",
    quantified: "Yes (92% realism)",
    mindtickle: "No",
    yoodli: "Limited",
    toughTongue: "Yes (full multimodal)"
  },
  {
    feature: "Image Generation",
    secondNature: "No",
    hyperbond: "No",
    quantified: "No",
    mindtickle: "No",
    yoodli: "No",
    toughTongue: "Yes"
  },
  {
    feature: "Interactive Tools",
    secondNature: "No",
    hyperbond: "No",
    quantified: "No",
    mindtickle: "No",
    yoodli: "No",
    toughTongue: "Yes (slides, notepad, diagrams)"
  },
  {
    feature: "Custom Scenario Builder",
    secondNature: "Partial",
    hyperbond: "Partial",
    quantified: "Enterprise only",
    mindtickle: "Templates",
    yoodli: "Limited",
    toughTongue: "Full platform access"
  },
  {
    feature: "Multi-language Support",
    secondNature: "Limited",
    hyperbond: "25+ languages",
    quantified: "Limited",
    mindtickle: "Limited",
    yoodli: "Limited",
    toughTongue: "Unlimited (any language)"
  },
  {
    feature: "Pricing Model",
    secondNature: "Per seat, enterprise",
    hyperbond: "Per seat, enterprise",
    quantified: "Enterprise custom",
    mindtickle: "Per seat, enterprise",
    yoodli: "Per user",
    toughTongue: "Flexible (free tier + paid)"
  },
  {
    feature: "Best For",
    secondNature: "Mid-market sales teams",
    hyperbond: "Large enterprise",
    quantified: "Enterprise L&D teams",
    mindtickle: "Sales enablement orgs",
    yoodli: "Individual practice",
    toughTongue: "Organizations building evolving training"
  }
];

export const PLATFORMS: PlatformDetails[] = [
  {
    id: "second-nature",
    name: "Second Nature AI",
    tagline: "The original AI roleplay pioneer",
    overview: "Second Nature pioneered the AI sales roleplay category, establishing the concept of practicing with an AI 'persona' that simulates a buyer. They've built a substantial customer base and have refined their platform over several years.",
    strengths: [
      "Established player with proven track record",
      "Intuitive interface for basic roleplay scenarios",
      "Good selection of pre-built buyer personas",
      "Solid analytics dashboard for managers",
      "Integration with major CRMs and LMS platforms"
    ],
    limitations: [
      "Text-based processing misses vocal nuances (confidence, hesitation, tone)",
      "Static scenarios don't evolve dynamically with market changes",
      "No interactive tools (conversation-only training)",
      "Limited realism; personas can feel robotic in extended conversations"
    ],
    pricing: "Enterprise pricing, typically $20-40+ per user/month.",
    bestFor: "Mid-market sales teams looking for a proven, low-friction entry into AI roleplay."
  },
  {
    id: "hyperbond",
    name: "Hyperbond",
    tagline: "Enterprise sales coaching at scale",
    overview: "Hyperbond positions itself as the enterprise solution for sales coaching at scale, with a particular emphasis on supporting large, distributed teams across multiple languages.",
    strengths: [
      "Impressive language support (25+ languages)",
      "Real call scoring and analysis capabilities",
      "Designed for enterprise scale from the ground up",
      "Strong focus on cold calling practice",
      "Robust reporting for large teams"
    ],
    limitations: [
      "Voice-only, text-based processing limits feedback quality on speaking skills",
      "Black-box customization creates vendor dependencies",
      "No visual or multimodal elements (purely conversational)",
      "Enterprise complexity can be over-engineered for smaller teams"
    ],
    pricing: "Enterprise custom pricing, significant six-figure annual contracts.",
    bestFor: "Large enterprises with distributed, multilingual sales teams."
  },
  {
    id: "quantified",
    name: "Quantified",
    tagline: "Video roleplay with AI avatars",
    overview: "Quantified differentiates itself with a focus on video-based roleplay, using AI avatars and facial expression analysis to create what they claim is 92% 'realism' in their simulations.",
    strengths: [
      "High-quality AI avatars that look realistic",
      "Facial expression analysis and feedback",
      "Unlimited practice sessions",
      "Strong enterprise customer base",
      "Focus on executive presence and presentation"
    ],
    limitations: [
      "Pre-recorded feel; interactions often feel scripted rather than dynamic",
      "Text-based core means the AI reads transcripts rather than hearing voice",
      "Enterprise-only access makes it inaccessible for smaller teams",
      "No agentic tools (lack of image generation, docs, or slides)",
      "Static scenario limitations similar to Second Nature"
    ],
    pricing: "Enterprise custom pricing, significant investment required.",
    bestFor: "Enterprise L&D teams prioritizing visual polish and presentation-style practice."
  },
  {
    id: "mindtickle",
    name: "Mindtickle",
    tagline: "Sales readiness and enablement platform",
    overview: "Mindtickle is a comprehensive sales readiness platform that includes AI roleplay as one component of a broader enablement ecosystem. They focus on the full sales readiness journey from onboarding to ongoing coaching.",
    strengths: [
      "Comprehensive platform beyond just roleplay",
      "Strong gamification elements (leaderboards, challenges)",
      "Bite-sized learning modules that complement roleplay",
      "Robust content management and sales asset organization",
      "Good integration with existing sales tools and CRMs"
    ],
    limitations: [
      "Roleplay is a feature, not a focus; less developed than dedicated platforms",
      "Text-based processing relies on transcription",
      "Platform complexity creates overhead in implementation",
      "Template-driven customization requires setup or services",
      "No multimodal capabilities (no visual context or interactive tools)"
    ],
    pricing: "Per-seat enterprise pricing, often bundled with broader platform access.",
    bestFor: "Sales organizations looking for an all-in-one readiness platform."
  },
  {
    id: "yoodli",
    name: "Yoodli",
    tagline: "Communication and presentation coaching",
    overview: "Yoodli emerged from a public speaking and communication coaching background. Their strength lies in helping individuals practice presentations and improve general communication skills.",
    strengths: [
      "Polished, user-friendly interface",
      "Strong focus on presentation skills and public speaking",
      "Good feedback on communication fundamentals (filler words, pacing)",
      "Works immediately out of the box with minimal setup",
      "Established brand in communication coaching"
    ],
    limitations: [
      "Built for presentations, not dynamic sales conversations",
      "Text-based processing misses sales-critical vocal nuances",
      "Limited customization; cannot build deeply tailored sales scenarios",
      "No interactive tools for realistic multi-dimensional training",
      "Primarily individual-focused rather than organizational"
    ],
    pricing: "Per-user subscription, approx $12-20/month for individuals.",
    bestFor: "Individuals focused on presentation skills or public speaking."
  },
  {
    id: "tough-tongue",
    name: "Tough Tongue AI",
    tagline: "Multimodal voice agent platform",
    overview: "Tough Tongue AI takes a fundamentally different approach. Rather than a finished product, it provides a platform for building, customizing, and continually evolving voice AI agents. Its unique audio-first architecture makes it the most powerful option for serious sales training.",
    strengths: [
      "Audio-First Processing: Hears tone, confidence, pacing, and energy",
      "Agentic Tools: Generates images, integrates slides, uses interactive notepads",
      "True Platform Customization: Full control to build and evolve scenarios",
      "Multimodal Video Analysis: Analyzes face, eye contact, and body language",
      "Flexible Pricing: Free tier available, no enterprise gatekeeping"
    ],
    limitations: [
      "Platform approach may require more initial strategic thought than plug-and-play templates",
      "Newer entrant compared to legacy players like Second Nature"
    ],
    pricing: "Flexible (free tier + paid plans). Accessible to individuals and enterprises.",
    bestFor: "Organizations building evolving, world-class training and individuals needing deep practice."
  }
];

export const DECISION_GUIDE: DecisionCriteria[] = [
  {
    platformName: "Second Nature AI",
    criteria: [
      "You want a proven, established solution",
      "Your customization needs are minimal",
      "You're in a mid-market organization",
      "You value stability over cutting-edge capability"
    ]
  },
  {
    platformName: "Hyperbond",
    criteria: [
      "You're a large enterprise with 25+ language requirements",
      "Enterprise-style implementation is essential",
      "Cold calling practice is your primary use case",
      "You have budget for significant contracts"
    ]
  },
  {
    platformName: "Quantified",
    criteria: [
      "Executive presence and video polish are top priorities",
      "You're an enterprise L&D team with budget flexibility",
      "Visual production quality matters more than conversational realism",
      "Presentation-style practice is priority"
    ]
  },
  {
    platformName: "Mindtickle",
    criteria: [
      "You need a comprehensive readiness platform, not just roleplay",
      "You want gamification and content management bundled",
      "Roleplay is just one component of your strategy",
      "You accept less depth for more breadth"
    ]
  },
  {
    platformName: "Yoodli",
    criteria: [
      "Your focus is public speaking and presentation skills",
      "You're an individual contributor",
      "You don't need sales-specific customization",
      "You want zero configuration"
    ]
  },
  {
    platformName: "Tough Tongue AI",
    criteria: [
      "You need audio-first feedback (tone, confidence, energy)",
      "You require visual/interactive training (slides, images, CRM)",
      "You want full platform control to iterate fast",
      "You value multimodal feedback on complete performance",
      "You're building for the long term"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do AI sales training tools actually work?",
    answer: "AI sales training tools create simulated conversations where AI agents roleplay as buyers. You practice responses, and the AI provides feedback. The key differentiator is that most use text-based processing, while Tough Tongue AI uses audio-first processing to hear vocal nuance."
  },
  {
    question: "Is AI roleplay really effective for sales training?",
    answer: "Yes. deliberate practice with immediate feedback accelerates skill development. Teams using AI sales training typically report faster new hire ramp times, higher win rates, and more consistent performance."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most teams see measurable impact within 60-90 days. Faster ramp times often appear within the first month. Specific skills like objection handling can improve within weeks."
  },
  {
    question: "Can AI roleplay replace human sales coaching?",
    answer: "No—and it shouldn't. AI excels at repetition and consistency. Human coaching provides strategic guidance and relationship building. The best approach combines both."
  },
  {
    question: "What makes Tough Tongue AI's audio-first processing different?",
    answer: "Most tools convert speech to text, losing vocal data. Tough Tongue AI processes audio directly, understanding tone, confidence, pacing, and energy—providing feedback on how you actually sound."
  }
];
