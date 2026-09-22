export const PROFILE = {
  name: "Shreya Sawant",
  tagline: "Full-Stack Developer & Embedded Systems Engineer",
  email: "shreyasawant5.work@gmail.com",
  links: {
    github: "https://github.com/CodingMuse5",
    linkedin: "https://linkedin.com/in/shreyasawant05",
    leetcode: "https://leetcode.com/u/CodingGirl05",
    resume: "/resume.pdf",
  },
};

export const EDUCATION = {
  school: "University of Mumbai (TSEC)",
  location: "Mumbai, India",
  degree: "B.E., Electronics & Telecommunications",
  detail: "CGPA 9.125",
  period: "2023 - 2027",
};

export const EXPERIENCE = [
  {
    org: "Vikram Sarabhai Space Centre (VSSC), ISRO",
    role: "Project Intern and Research Trainee",
    location: "Thiruvananthapuram, India",
    period: "Nov 2025 - Jan 2026",
    bullets: [
      "Engineered parallel VHDL RTL from C-based aerospace algorithms, ensuring bit-true accuracy against reference models while optimizing FPGA timing and resource utilization.",
      "Executed Software-Hardware Co-simulation, developing C-based golden models to validate complex VHDL designs and corner cases prior to synthesis.",
    ],
  },
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
  },
];

export const PROJECTS = [
  {
    name: "Daily Cosmos",
    stack: "MERN, Tailwind CSS, NASA Open APIs",
    bullets: [
      "React dashboard visualizing real-time Astronomy Picture of the Day (APOD) data.",
      "Express backend with fail-safe caching and Gemini 2.5 Flash integration (\"Nova AI\").",
      "MongoDB schemas for social matching, user interactions and dynamic ranking.",
    ],
  },
  {
    name: "Attendance Detection System",
    stack: "React.js, MongoDB, RFID/IoT",
    bullets: [
      "Real-time React dashboard for instant, no-refresh attendance updates.",
      "Event-driven Node.js backend processing continuous RFID scanner data.",
      "MongoDB state-tracking logic to automate \"Entered\"/\"Exited\" statuses.",
    ],
  },
  {
    name: "Crop Disease Detector",
    stack: "Raspberry Pi, TensorFlow, Firebase, MIT App Inventor, Edge Computing",
    bullets: [
      "Offline TensorFlow model (PlantifyDr) detecting 37 plant diseases.",
      "Real-time Firebase sync between edge sensor hardware and cloud predictions.",
      "Diagnostic mobile app in MIT App Inventor with plant-health dashboard.",
    ],
  },
];

export const SKILLS = {
  Languages: ["Java", "JavaScript", "TypeScript", "C/C++", "HTML/CSS"],
  "Frameworks & Libraries": [
    "React.js",
    "React Native",
    "Expo",
    "Node.js",
    "Express.js",
    "Cloudflare Workers",
    "Drizzle ORM",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Cloudinary"],
  "Tools & DevOps": ["Vercel", "Render", "GitHub Actions", "Postman", "Git"],
};
