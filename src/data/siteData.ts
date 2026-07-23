import type {
  NavLink,
  TeamMember,
  ProblemCard,
  ComparisonRow,
  Feature,
  WorkflowStep,
  TechCard,
  UseCase,
  USP,
  BusinessModel,
  ResearchMilestone,
  FutureVision,
  FooterSection,
} from '../types';

export const navLinks: NavLink[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#workflow' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Business', href: '#business' },
  { label: 'Team', href: '#team' },
];

export const problemCards: ProblemCard[] = [
  {
    icon: 'AlertTriangle',
    title: 'Drug–Drug Interactions',
    description:
      'Millions of patients take multiple medications simultaneously, increasing the risk of harmful drug–drug interactions that go undetected until serious complications arise.',
    stat: 'Millions',
    statLabel: 'patients at risk from DDIs annually',
  },
  {
    icon: 'Activity',
    title: 'Adverse Drug Reactions',
    description:
      'ADRs are among the leading causes of hospitalization and death worldwide, yet most are preventable with proper analysis and monitoring.',
    stat: 'Top 10',
    statLabel: 'cause of death in many countries',
  },
  {
    icon: 'ShieldAlert',
    title: 'Contraindication Risks',
    description:
      'Patients with specific conditions are frequently prescribed drugs that are contraindicated for their health profile, leading to avoidable complications.',
    stat: 'Critical',
    statLabel: 'gap in personalized safety checks',
  },
  {
    icon: 'Pill',
    title: 'Dosage-Related Risks',
    description:
      'Incorrect dosing — whether too high, too low, or improperly timed — contributes significantly to medication errors in clinical and home settings.',
    stat: 'Significant',
    statLabel: 'contributor to medication errors',
  },
  {
    icon: 'Layers',
    title: 'Polypharmacy Complications',
    description:
      'Elderly and chronically ill patients often take 5+ medications, creating complex interaction webs that no single tool currently analyzes comprehensively.',
    stat: '5+',
    statLabel: 'medications common in elderly patients',
  },
  {
    icon: 'UserX',
    title: 'Self-Medication Risks',
    description:
      'A large portion of the population self-medicates without understanding potential interactions, side effects, or contraindications with existing prescriptions.',
    stat: 'Widespread',
    statLabel: 'practice across developing nations',
  },
  {
    icon: 'EyeOff',
    title: 'Lack of Safety Awareness',
    description:
      'Most patients and even many healthcare providers lack access to unified, real-time medication safety intelligence that could prevent adverse events.',
    stat: 'Major',
    statLabel: 'awareness gap in medication safety',
  },
];

export const comparisonData: ComparisonRow[] = [
  {
    feature: 'Drug Interaction Detection',
    drugCheckers: true,
    adrDatabases: false,
    cdss: true,
    ehrAlerts: true,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'ADR Prediction',
    drugCheckers: false,
    adrDatabases: true,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Contraindication Analysis',
    drugCheckers: false,
    adrDatabases: false,
    cdss: true,
    ehrAlerts: true,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Personalized Risk Scoring',
    drugCheckers: false,
    adrDatabases: false,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Explainable AI Insights',
    drugCheckers: false,
    adrDatabases: false,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Pharmacovigilance Integration',
    drugCheckers: false,
    adrDatabases: true,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Offline Capability',
    drugCheckers: false,
    adrDatabases: false,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
  {
    feature: 'Unified Risk Intelligence',
    drugCheckers: false,
    adrDatabases: false,
    cdss: false,
    ehrAlerts: false,
    chatbots: false,
    emerk: true,
  },
];

export const solutionFeatures: Feature[] = [
  {
    icon: 'GitBranch',
    title: 'Drug–Drug Interaction Detection',
    description:
      'AI-powered analysis of multi-drug interactions using graph neural networks and comprehensive medical knowledge bases.',
  },
  {
    icon: 'HeartPulse',
    title: 'ADR Prediction',
    description:
      'Predictive models that identify potential adverse drug reactions before they manifest, using deep learning on patient profiles.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Contraindication Analysis',
    description:
      'Automated cross-referencing of patient conditions, allergies, and medications to flag dangerous contraindications.',
  },
  {
    icon: 'Gauge',
    title: 'Dosage Risk Assessment',
    description:
      'Intelligent dosage analysis considering patient demographics, renal/hepatic function, and drug metabolism pathways.',
  },
  {
    icon: 'User',
    title: 'Patient Profile Analysis',
    description:
      'Comprehensive patient-centric risk evaluation considering age, gender, medical history, and concurrent conditions.',
  },
  {
    icon: 'FileSearch',
    title: 'Pharmacovigilance Intelligence',
    description:
      'Real-time monitoring and reporting of adverse events, integrated with global pharmacovigilance standards.',
  },
  {
    icon: 'Brain',
    title: 'Explainable AI Insights',
    description:
      'Every AI recommendation comes with transparent, human-readable explanations using SHAP and LIME methodologies.',
  },
  {
    icon: 'BarChart3',
    title: 'Unified Medication Risk Scoring',
    description:
      'A proprietary multi-layer risk scoring algorithm that provides a single, comprehensive medication safety score.',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    icon: 'ClipboardList',
    title: 'Medication Data Entry',
    description: 'Patient or doctor enters medication data, prescriptions, and health profile information.',
  },
  {
    step: 2,
    icon: 'Database',
    title: 'Data Preprocessing',
    description: 'Entity extraction, normalization, and structuring of medical data for AI processing.',
  },
  {
    step: 3,
    icon: 'Cpu',
    title: 'AI Analysis Engine',
    description: 'Multi-model AI analysis including interaction detection, ADR prediction, and risk assessment.',
  },
  {
    step: 4,
    icon: 'Network',
    title: 'Knowledge Graph Retrieval',
    description: 'Medical knowledge graph and evidence retrieval from curated drug–disease–ADR relationships.',
  },
  {
    step: 5,
    icon: 'Layers',
    title: 'Multi-Layer Risk Fusion',
    description: 'Fusion of multiple risk signals into a unified assessment using ensemble methods.',
  },
  {
    step: 6,
    icon: 'BarChart3',
    title: 'Unified Risk Score',
    description: 'Generation of a comprehensive medication risk score with confidence intervals.',
  },
  {
    step: 7,
    icon: 'FileText',
    title: 'Explainable Safety Report',
    description: 'Transparent, human-readable safety report with evidence-backed recommendations.',
  },
  {
    step: 8,
    icon: 'Stethoscope',
    title: 'Clinical Decision Support',
    description: 'Actionable insights delivered to clinicians for informed medication decisions.',
  },
];

export const platformFeatures: Feature[] = [
  {
    icon: 'LayoutDashboard',
    title: 'Dashboard',
    description: 'Unified medication safety insights, real-time risk alerts, and comprehensive analytics at a glance.',
    details:
      'The EMERK Dashboard provides a command center for medication safety — showing total drugs monitored, ADR reports, severity breakdowns, and interaction checks. Designed for both clinical and administrative use.',
  },
  {
    icon: 'Database',
    title: 'Drug Database',
    description: '40+ medicines with detailed ingredients, indications, contraindications, and safety profiles.',
    details:
      'A curated, continuously updated database of medications with comprehensive pharmacological data, including active ingredients, therapeutic indications, known interactions, and patient-specific contraindications.',
  },
  {
    icon: 'GitBranch',
    title: 'Interaction Checker',
    description: 'Severity-based drug interaction analysis with evidence-backed risk categorization.',
    details:
      'Enter multiple medications to receive instant, severity-graded interaction analysis. Each interaction is categorized as mild, moderate, or severe with clinical evidence and management recommendations.',
  },
  {
    icon: 'Activity',
    title: 'Symptoms Predictor',
    description: 'ADR-linked symptom assessment and predictive adverse event monitoring.',
    details:
      'AI-powered prediction of potential symptoms based on current medications and patient profile. Links predicted symptoms to known ADR patterns for proactive safety management.',
  },
  {
    icon: 'Bot',
    title: 'Intelligent Clinical Assistant',
    description: 'AI-assisted evidence-based guidance for medication safety queries and clinical decisions.',
    details:
      'An intelligent assistant powered by LLM + RAG architecture that provides evidence-based answers to medication safety questions, drawing from curated medical knowledge bases and clinical guidelines.',
  },
  {
    icon: 'FileBarChart',
    title: 'ADR Reports',
    description: 'Pharmacovigilance reporting, monitoring, and severity-based ADR tracking.',
    details:
      'Comprehensive adverse drug reaction reporting system with severity classification, temporal tracking, and automated pharmacovigilance submissions. Supports both individual and aggregate reporting.',
  },
  {
    icon: 'Stethoscope',
    title: 'Doctor Mode',
    description: 'Secure patient information analysis and clinical decision support for healthcare professionals.',
    details:
      'A dedicated clinical interface for healthcare professionals with advanced patient analysis, multi-drug regimen assessment, and EHR-compatible clinical decision support tools.',
  },
];

export const techCards: TechCard[] = [
  {
    icon: 'Network',
    name: 'Graph Neural Networks (GNNs)',
    category: 'Interaction Prediction',
    description:
      'Model complex drug-drug-disease relationships as graph structures for accurate interaction prediction and risk assessment.',
  },
  {
    icon: 'BarChart3',
    name: 'XGBoost / Random Forest',
    category: 'Risk Scoring',
    description:
      'Ensemble learning methods for robust medication risk scoring with high accuracy and interpretability.',
  },
  {
    icon: 'Brain',
    name: 'Deep Neural Networks (DNNs)',
    category: 'ADR Prediction',
    description:
      'Multi-layer neural architectures trained on pharmacovigilance data for predictive adverse drug reaction modeling.',
  },
  {
    icon: 'GitBranch',
    name: 'Knowledge Graphs (Neo4j)',
    category: 'Medical Relationships',
    description:
      'Rich knowledge graphs mapping drug-disease-ADR-gene relationships for evidence-based medical reasoning.',
  },
  {
    icon: 'FileText',
    name: 'BioBERT / ClinicalBERT',
    category: 'Medical NLP',
    description:
      'Biomedical language models fine-tuned on clinical text for medical entity extraction and text understanding.',
  },
  {
    icon: 'MessageSquare',
    name: 'LLM + RAG',
    category: 'Knowledge Retrieval',
    description:
      'Large language models with retrieval-augmented generation for evidence-based medical knowledge access.',
  },
  {
    icon: 'Eye',
    name: 'SHAP / LIME',
    category: 'Explainable AI',
    description:
      'Model-agnostic explainability frameworks providing transparent, human-readable AI decision explanations.',
  },
  {
    icon: 'Lock',
    name: 'Federated Learning',
    category: 'Privacy-Preserving AI',
    description:
      'Future-ready distributed learning across hospitals without sharing raw patient data, ensuring privacy compliance.',
  },
];

export const useCases: UseCase[] = [
  {
    icon: 'Heart',
    userType: 'Patients',
    description: 'Personal medication safety checks and risk awareness for safer self-care.',
    benefits: [
      'Check drug interactions before taking medications',
      'Understand potential side effects',
      'Receive personalized safety alerts',
    ],
  },
  {
    icon: 'Stethoscope',
    userType: 'Doctors',
    description: 'Clinical decision support for safer prescribing and patient care.',
    benefits: [
      'Real-time interaction alerts during prescribing',
      'Patient-specific risk analysis',
      'Evidence-based medication recommendations',
    ],
  },
  {
    icon: 'Building2',
    userType: 'Hospitals',
    description: 'Institution-wide medication safety monitoring and pharmacovigilance.',
    benefits: [
      'Reduce medication errors across departments',
      'Automated ADR reporting and monitoring',
      'Quality improvement metrics and dashboards',
    ],
  },
  {
    icon: 'Store',
    userType: 'Pharmacies',
    description: 'Point-of-dispensing safety checks and patient counseling support.',
    benefits: [
      'Verify prescriptions against patient profiles',
      'Flag high-risk combinations at dispensing',
      'Patient education and safety counseling tools',
    ],
  },
  {
    icon: 'FlaskConical',
    userType: 'Pharmaceutical Companies',
    description: 'Post-market surveillance and pharmacovigilance intelligence.',
    benefits: [
      'Real-world ADR signal detection',
      'Drug safety profile monitoring',
      'Regulatory compliance support',
    ],
  },
  {
    icon: 'Landmark',
    userType: 'Government Health Departments',
    description: 'Population-level medication safety monitoring and policy support.',
    benefits: [
      'National pharmacovigilance dashboards',
      'Drug safety policy insights',
      'Public health alert infrastructure',
    ],
  },
  {
    icon: 'ShieldCheck',
    userType: 'Insurance Companies',
    description: 'Risk assessment and preventive care analytics for smarter coverage.',
    benefits: [
      'Medication risk profiling for policyholders',
      'Preventive intervention recommendations',
      'Claims risk reduction through safety insights',
    ],
  },
  {
    icon: 'GraduationCap',
    userType: 'Research Institutions',
    description: 'Drug safety research data and computational pharmacology tools.',
    benefits: [
      'Access to structured drug interaction datasets',
      'AI model benchmarking and collaboration',
      'Clinical research support tools',
    ],
  },
];

export const usps: USP[] = [
  {
    icon: 'Shield',
    title: 'Prevention-First Healthcare',
    description:
      'EMERK shifts healthcare from reactive treatment to proactive prevention — identifying risks before they become complications.',
  },
  {
    icon: 'Layers',
    title: 'Unified Medication Intelligence',
    description:
      'A single platform that combines drug interactions, ADR prediction, contraindication analysis, and risk scoring — no fragmented tools.',
  },
  {
    icon: 'User',
    title: 'Personalized Patient Analysis',
    description:
      'Every analysis considers the individual patient profile — age, conditions, medications, and health history — not just generic drug data.',
  },
  {
    icon: 'Brain',
    title: 'Explainable AI Recommendations',
    description:
      'Every AI output comes with transparent, evidence-backed explanations that clinicians and patients can understand and trust.',
  },
  {
    icon: 'FileBarChart',
    title: 'Pharmacovigilance Integration',
    description:
      'Built-in pharmacovigilance reporting and monitoring, aligned with global adverse event tracking standards.',
  },
  {
    icon: 'WifiOff',
    title: 'Offline-First AI Architecture',
    description:
      'Critical medication safety checks work without internet — essential for rural clinics and low-resource healthcare settings.',
  },
  {
    icon: 'Languages',
    title: 'Local Language Accessibility',
    description:
      'Designed to support multiple Indian and global languages, making medication safety accessible to diverse populations.',
  },
  {
    icon: 'Bot',
    title: 'Future Autonomous AI Agents',
    description:
      'Roadmap to intelligent AI agents that autonomously monitor, alert, and guide medication safety across healthcare ecosystems.',
  },
];

export const businessModels: BusinessModel[] = [
  {
    icon: 'CreditCard',
    title: 'SaaS Subscriptions',
    description: 'Monthly and annual subscription plans for hospitals, clinics, and individual practitioners.',
  },
  {
    icon: 'Building2',
    title: 'Enterprise Licensing',
    description: 'Customized enterprise licenses for large healthcare organizations and hospital chains.',
  },
  {
    icon: 'Code',
    title: 'API Licensing',
    description: 'RESTful API access for third-party healthcare systems, EHRs, and pharmacy management platforms.',
  },
  {
    icon: 'FlaskConical',
    title: 'Pharmacovigilance Services',
    description: 'Specialized ADR monitoring, signal detection, and safety reporting for pharmaceutical companies.',
  },
  {
    icon: 'Landmark',
    title: 'Government Partnerships',
    description: 'Public health medication safety programs and national pharmacovigilance infrastructure.',
  },
  {
    icon: 'GraduationCap',
    title: 'Research Collaborations',
    description: 'Joint research programs with academic institutions and pharmaceutical R&D divisions.',
  },
  {
    icon: 'TrendingUp',
    title: 'Premium Analytics',
    description: 'Advanced medication safety analytics, custom reporting, and predictive intelligence dashboards.',
  },
];

export const researchMilestones: ResearchMilestone[] = [
  {
    year: '2025',
    quarter: 'Q1–Q2',
    title: 'Foundation Research',
    description:
      'Multi-Layer Medication Risk Intelligence Engine — core research paper documenting the EMERK risk scoring methodology.',
    status: 'completed',
  },
  {
    year: '2025',
    quarter: 'Q3–Q4',
    title: 'Explainable AI Framework',
    description:
      'Explainable AI-Based Medication Safety Framework — research on SHAP/LIME integration for transparent medical AI.',
    status: 'in-progress',
  },
  {
    year: '2026',
    quarter: 'Q1–Q2',
    title: 'Federated Learning Research',
    description:
      'Federated Medication Intelligence Framework — privacy-preserving distributed learning across healthcare institutions.',
    status: 'upcoming',
  },
  {
    year: '2026',
    quarter: 'Q3–Q4',
    title: 'Patent Documentation',
    description:
      'IP protection for EMERK\'s proprietary risk scoring algorithms, AI architectures, and clinical decision support methodologies.',
    status: 'upcoming',
  },
  {
    year: '2027',
    quarter: 'Q1+',
    title: 'Advanced Research Pipeline',
    description:
      '10+ planned research papers covering knowledge graph optimization, real-world evidence mining, and autonomous safety agents.',
    status: 'upcoming',
  },
];

export const futureVisions: FutureVision[] = [
  {
    icon: 'Bot',
    title: 'Autonomous AI Agents',
    description:
      'Intelligent agents that autonomously monitor medication safety, detect emerging risks, and provide proactive alerts across healthcare systems.',
  },
  {
    icon: 'Fingerprint',
    title: 'Personalized Risk Scoring',
    description:
      'Hyper-personalized medication risk profiles based on genomic data, lifestyle factors, and real-time health monitoring.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'EHR Integration',
    description:
      'Seamless integration with Electronic Health Records for real-time, context-aware medication safety at the point of care.',
  },
  {
    icon: 'Watch',
    title: 'Wearable & IoT Monitoring',
    description:
      'Integration with wearable devices and IoT health sensors for continuous medication response monitoring and early warning systems.',
  },
  {
    icon: 'Lock',
    title: 'Federated Learning Network',
    description:
      'A global network of hospitals contributing to shared AI learning without compromising patient data privacy.',
  },
  {
    icon: 'Globe',
    title: 'Global Intelligence Network',
    description:
      'A worldwide medication intelligence infrastructure providing real-time safety insights across borders and healthcare systems.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mayank Gautam',
    role: 'Founder and CEO',
    bio: 'Visionary behind EMERK, driving AI-powered innovation in medication safety while leading product strategy, research, investor relations, and strategic growth to build a globally recognized Healthcare AI SaaS platform.',
  },
  {
    name: 'Shashank Pandey',
    role: 'CTO & Co-founder',
    bio: 'Technical architect leading EMERK\'s AI/ML development, system architecture, and engineering. Building the core medication intelligence engine and platform infrastructure.',
  },
  {
    name: 'Akshara Bajpai',
    role: 'COO',
    bio: 'Driving operational excellence, partnerships, and go-to-market strategy. Ensuring EMERK reaches the healthcare institutions that need it most.',
  },
  {
  name: 'Souvik Das',
  role: 'Director and CRO',
  bio: "leading research innovation, strategic planning, and operational growth initiatives to advance EMERK as a globally recognized Healthcare AI SaaS platform. and driving operational strategy, business partnerships, and organizational growth to support EMERK's mission of becoming a globally recognized Healthcare AI SaaS platform.",
},
];

export const footerSections: FooterSection[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Dashboard', href: '#features' },
      { label: 'Drug Database', href: '#features' },
      { label: 'Interaction Checker', href: '#features' },
      { label: 'Clinical AI', href: '#features' },
      { label: 'Doctor Mode', href: '#features' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About EMERK', href: '#solution' },
      { label: 'Our Team', href: '#team' },
      { label: 'Research', href: '#research' },
      { label: 'Business Model', href: '#business' },
      { label: 'Recognition', href: '#recognition' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How It Works', href: '#workflow' },
      { label: 'Technology', href: '#technology' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];
