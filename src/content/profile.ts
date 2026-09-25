export const PROFILE = {
  name: "Shreya Sawant",
  initials: "SS",
  tagline: "Full-stack developer building products end to end.",
  intro:
    "I like building products that go from idea to something people actually use — React and React Native on the front, Node.js and Express on the back. I've shipped real-time dashboards, webhook-driven bots, and mobile integrations for production use. Currently exploring backend systems, APIs, and AI-assisted features.",
  email: "shreyasawant5.work@gmail.com",
  links: {
    github: "https://github.com/CodingMuse5",
    linkedin: "https://linkedin.com/in/shreyasawant05",
    leetcode: "https://leetcode.com/u/CodingGirl05",
    resume: "/resume.pdf",
  },
};

export const EXPERIENCE = [
  {
    org: "Krityam Solutions and Services",
    role: "Full-Stack Developer Intern",
    location: "Mumbai, India",
    period: "May 2026 - Aug 2026",
    bullets: [
      "Implemented Google Places API and Android Maps SDK across React Native and Cloudflare Workers, securing keys via SHA-1 fingerprinting and strict API restrictions.",
      "Built a TypeScript and Drizzle ORM notification bot to intercept Shopify webhooks and stream real-time order updates via the Telegram Bot API.",
      "Optimized GitHub Actions CI/CD pipelines for serverless deployment, resolving lockfile conflicts and updating Node.js runtime engines.",
    ],
    tags: ["React Native", "Cloudflare Workers", "TypeScript", "Drizzle ORM", "GitHub Actions"],
  },
  {
    org: "Vikram Sarabhai Space Centre (VSSC), ISRO",
    role: "Project Intern and Research Trainee",
    location: "Thiruvananthapuram, India",
    period: "Nov 2025 - Jan 2026",
    bullets: [
      "Engineered parallel VHDL RTL from C-based aerospace algorithms, ensuring bit-true accuracy against reference models while optimizing FPGA timing and resource utilization.",
      "Executed Software-Hardware Co-simulation, developing C-based golden models to validate complex VHDL designs and corner cases prior to synthesis.",
    ],
    tags: ["VHDL", "C", "FPGA", "Simulation"],
  },
];

export const PROJECTS = [
  {
    name: "Daily Cosmos",
    year: "2026",
    description:
      "A React dashboard integrating NASA Open APIs to visualize real-time Astronomy Picture of the Day data, with an Express backend, fail-safe caching, and a Gemini 2.5 Flash-powered assistant (\"Nova AI\"). MongoDB schemas drive social matching, user interactions, and dynamic ranking logic.",
    tags: ["React", "Express", "MongoDB", "Tailwind CSS", "Gemini API"],
    link: "https://github.com/CodingMuse5/Daily_Cosmos",
  },
  {
    name: "Beacon",
    year: "2026",
    description:
      "A React and TypeScript console that parses resumes and job descriptions with Gemini, ranking candidates through pgvector similarity search combined with skill-overlap scoring. A Node.js and Python microservice backend generates citation-backed \"Insight Cards,\" and a pgvector schema pulls in GitHub activity to help gauge real-world credibility.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini API"],
    link: "https://github.com/CodingMuse5/Beacon",
  },
  {
    name: "Attendance Detection System",
    year: "2026",
    description:
      "A real-time React dashboard for instant, no-refresh attendance updates, backed by an event-driven Node.js service that processes continuous RFID scanner data and a MongoDB schema with state-tracking logic to automate entry/exit status.",
    tags: ["React", "Node.js", "MongoDB", "RFID/IoT"],
    link: null,
  },
];

export const SKILLS = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "C/C++",
  "React.js",
  "React Native",
  "Expo",
  "Vite",
  "Tailwind CSS",
  "TanStack Query",
  "Three.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Cloudflare Workers",
  "Drizzle ORM",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Firebase",
  "Gemini API",
  "TensorFlow",
  "Git",
  "GitHub Actions",
  "Postman",
];

export const EDUCATION = {
  school: "University of Mumbai (TSEC)",
  degree: "B.E., Electronics & Telecommunications",
  detail: "CGPA 9.45 · Rank 1, Semester 4",
  period: "2023 - 2027",
};

export const ACHIEVEMENTS = [
  "Rank 2, Semester 3 and Rank 1, Semester 4",
  "Participated in Deloitte Hacksplosion 2026",
  "Participated in Cognizant Technoverse 2026",
];
