/* ============================================================
   data.js
   Single source of truth for all portfolio content.
   Update this file to change any text, links, or details.
   ============================================================ */

export const personal = {
  name: "Mohammed Arshad",
  title: "Software Engineer",
  tagline: "SaaS Implementation · Identity Management · Integrations",
  shortBio:
    "Software Engineer at PowerSchool with 5+ years building secure, scalable SaaS solutions. I specialise in SSO authentication, identity & access management, and full-cycle product implementation for enterprise SaaS platforms.",
  email: "mohammed.arshad1797@gmail.com",
  phone: "+91 98XXXXX786",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://www.linkedin.com/in/mohammed-arshad-12088915a",
  github: "https://github.com/M-Arshad-17",
};

export const about = {
  summary:
    "As a Software Engineer I at PowerSchool, I lead full-cycle implementation of SSO authentication using SAML, LDAP, LDAPS, and Google SSO for district and school websites. I integrate SaaS products with external directories (Azure AD, Entra ID, Google Workspace), configure templates, and ensure seamless user provisioning and role mapping.",
  extended:
    "Holding an MTech in Computer Software Engineering from BITS Pilani, I am skilled in identity and access management (IAM) and Microsoft Azure. My contributions emphasise optimising secure, scalable solutions for educational software, aligning technical implementations with district needs, and enhancing user experiences across platforms.",
  highlights: [
    { icon: "🏢", label: "Company",    value: "PowerSchool (5 yrs 10 mos)" },
    { icon: "🎓", label: "Education",  value: "MTech – BITS Pilani" },
    { icon: "💰", label: "Impact",     value: "$10M+ ARR generated" },
    { icon: "⭐", label: "CSAT Score", value: "100% – 3 consecutive years" },
    { icon: "📍", label: "Location",   value: "Bengaluru, India" },
    { icon: "🤝", label: "Projects",   value: "700+ end-to-end projects" },
  ],
};

export const skills = [
  {
    category: "Identity & Authentication",
    icon: "🔐",
    items: ["SAML / SSO", "LDAP / LDAPS", "Google SSO", "Azure AD / Entra ID", "IAM", "OAuth 2.0"],
  },
  {
    category: "Cloud & Platforms",
    icon: "☁️",
    items: ["Microsoft Azure", "Google Workspace", "Microsoft 365", "Azure Active Directory"],
  },
  {
    category: "Web Technologies",
    icon: "💻",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "JSON / XML"],
  },
  {
    category: "SaaS & Products",
    icon: "🛠️",
    items: ["PowerSchool", "SchoolMessenger", "Product Implementation", "SaaS Integration", "UAT / QA"],
  },
  {
    category: "Project & Customer",
    icon: "📊",
    items: ["Project Management", "Customer Success", "Technical Documentation", "Escalation Management", "Agile / Scrum"],
  },
  {
    category: "AI & Productivity",
    icon: "🤖",
    items: ["ChatGPT / Custom GPTs", "Microsoft 365 Copilot", "Zapier Automations", "AI-assisted workflows"],
  },
];

export const experience = [
  {
    company: "PowerSchool",
    logo: "PS",
    color: "#6c63ff",
    role: "Software Engineer I",
    period: "May 2024 – Present",
    duration: "1 yr 11 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Lead full-cycle implementation of SSO authentication using SAML, LDAP, LDAPS, and Google SSO for district and school websites.",
      "Implement SchoolMessenger Communicate projects including data mapping, SMS/voice/email configuration, UAT support, and broadcast setup.",
      "Configure SchoolMessenger Presence templates, UI/UX updates, colour palettes, and district branding across multiple school sites.",
      "Integrate Presence with Azure AD, Entra ID, and Google Workspace ensuring accurate role mapping and user provisioning.",
      "Troubleshoot complex production issues involving SSO, APIs, authentication flows, imports, cron utilities, and data mapping scripts.",
      "Utilise AI tools to streamline project planning, customer communication, technical explanations, and code troubleshooting.",
    ],
  },
  {
    company: "PowerSchool",
    logo: "PS",
    color: "#9d97ff",
    role: "Technical Engineer II",
    period: "Apr 2023 – May 2024",
    duration: "1 yr 2 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Implemented 300+ online registration solutions end-to-end, generating $10M+ ARR since June 2020.",
      "Developed a decision-tree web application for escalating Tier-1 cases to Tier-2 engineers using HTML, CSS, and JavaScript.",
      "Trained and mentored junior engineers through shadowing, reverse-shadowing, and Q&A sessions.",
      "Facilitated 'Ask the Experts' webinars for customers on new product features.",
      "Maintained an individual CSAT score of 100% for three consecutive years without escalations.",
    ],
  },
  {
    company: "PowerSchool",
    logo: "PS",
    color: "#a09db8",
    role: "Technical Engineer I",
    period: "Oct 2021 – Mar 2023",
    duration: "1 yr 6 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Led a team of 4 engineers to implement product customisation in an agile environment.",
      "Subject Matter Expert for product issues; documented resolutions through internal knowledge-base channels.",
      "Created Knowledge Base (KB) articles to enable customer self-service and reduce support tickets.",
      "Addressed negative feedback and managed critical customer escalations, successfully retaining customers.",
      "Built client relationships as primary point of contact, consulting on needs and developing project plans.",
    ],
  },
  {
    company: "PowerSchool",
    logo: "PS",
    color: "#5c5a72",
    role: "Associate Technical Engineer",
    period: "Jun 2020 – Sep 2021",
    duration: "1 yr 4 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Provided product assistance for hardware, software, networking, and computer-related technologies.",
      "Tracked customer issues through problem management database and maintained related documentation.",
      "Conducted software and hardware testing to evaluate ease of use and product quality.",
      "Demonstrated strong customer service and conflict-resolution skills handling heavy workloads.",
    ],
  },
  {
    company: "Anvation Labs",
    logo: "AL",
    color: "#ff6b6b",
    role: "System Design Trainee",
    period: "Aug 2019 – Dec 2019",
    duration: "5 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Worked on wireless microcontroller-based control panels for Home & Industrial automation.",
      "Developed Flow Meters for measurement of industrial working materials.",
      "Built Health Monitoring Systems for SpO2, CO2 detection, temperature, and ECG.",
    ],
  },
  {
    company: "Swamy Technosystems",
    logo: "ST",
    color: "#ffa94d",
    role: "Design Engineering Intern",
    period: "Jan 2019 – Jun 2019",
    duration: "6 mos",
    location: "Bengaluru, Karnataka, India",
    achievements: [
      "Gained exposure to the 3D printing industry and product design from scratch using CAD tools.",
      "Conducted R&D on 3D printing technology and machines.",
      "Successfully developed a 5-Axial 3D Printing machine during the internship.",
    ],
  },
];

export const projects = [
  {
    title: "Decision Tree Escalation Tool",
    description:
      "A web application built to help Tier-1 support engineers determine when and how to escalate cases to Tier-2 engineers. Features a guided decision-tree flow with conditional logic for various product issue categories.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Internal Tool",
    github: "#",   // ← replace with real link if public
    live: null,
    highlight: true,
  },
  {
    title: "SSO Implementation Playbook",
    description:
      "Comprehensive documentation hub and configuration-guide library covering SAML, LDAP, LDAPS, and Google SSO setups for 100+ district deployments. Includes setup guides, import-mapping sheets, and QA checklists.",
    tech: ["SAML", "LDAP", "Google SSO", "Technical Writing"],
    category: "Documentation",
    github: "#",
    live: null,
    highlight: false,
  },
  {
    title: "SchoolMessenger Presence Integrations",
    description:
      "Integrated SchoolMessenger Presence with Azure AD, Entra ID, and Google Workspace for accurate user provisioning and role mapping across multiple school districts, ensuring zero-downtime deployments.",
    tech: ["Azure AD", "Google Workspace", "SSO", "REST APIs"],
    category: "Integration",
    github: "#",
    live: null,
    highlight: false,
  },
  {
    title: "Health Monitoring IoT System",
    description:
      "Microcontroller-based health monitoring system designed during R&D internship at Anvation Labs. Captures SpO2, CO2, temperature, and ECG data in real-time from connected sensors.",
    tech: ["IoT", "Microcontrollers", "C/C++", "Sensor Integration"],
    category: "Hardware / IoT",
    github: "#",
    live: null,
    highlight: false,
  },
];

export const certifications = [
  {
    title: "Building Custom GPTs for Work",
    issuer: "LinkedIn Learning",
    description: "Create AI Assistants in Plain Language with ChatGPT (No Code Required)",
    icon: "🤖",
  },
  {
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    description: "Core JavaScript concepts, ES6+ features, and practical application development.",
    icon: "⚡",
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    description: "Structured Query Language fundamentals, queries, joins, and database management.",
    icon: "🗄️",
  },
  {
    title: "Enhance Custom GPTs with Zapier",
    issuer: "LinkedIn Learning",
    description: "No-code automation actions integrated into Custom GPT workflows.",
    icon: "🔗",
  },
  {
    title: "Microsoft 365 Copilot First Look",
    issuer: "LinkedIn Learning",
    description: "Productivity enhancement with Microsoft 365 Copilot AI assistant.",
    icon: "📎",
  },
];

export const education = [
  {
    institution: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    degree: "Master of Technology (MTech)",
    field: "Computer Software Engineering",
    period: "Jan 2022 – Jan 2024",
    icon: "🎓",
    highlight: true,
  },
  {
    institution: "HKBK College of Engineering",
    shortName: "HKBK",
    degree: "Bachelor of Engineering (BE)",
    field: "Electrical, Electronics & Communications Engineering",
    period: "2015 – 2019",
    icon: "⚙️",
    highlight: false,
  },
  {
    institution: "Deeksha Learning",
    shortName: "Deeksha",
    degree: "Pre-University",
    field: "Science",
    period: "Mar 2013 – Mar 2015",
    icon: "📚",
    highlight: false,
  },
  {
    institution: "Florence Public School",
    shortName: "Florence",
    degree: "10th Standard (ICSE)",
    field: "",
    period: "2005 – 2013",
    icon: "🏫",
    highlight: false,
  },
];
