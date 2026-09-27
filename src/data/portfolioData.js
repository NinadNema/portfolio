const portfolioData = {
  name: "Ninad Nemawarkar",

  role: "Full-Stack Software Developer",

  subtitle: "Final-Year Computer Science Undergraduate · VIT Bhopal",

  description:
    "Final-year Computer Science undergraduate (VIT Bhopal) building full-stack, API-driven applications with React.js, Node.js, FastAPI, and Java. Shipped security monitoring and AI platforms with secure JWT authentication, backed by a strong foundation in Data Structures & Algorithms, OOP, and relational databases.",

  email: "ninad2800@gmail.com",

  phone: "+91 99107 09291",

  github: "https://github.com/NinadNema",

  linkedin: "https://www.linkedin.com/in/ninad-nemawarkar-85834a296",

  leetcode: "https://leetcode.com/u/Ninad_Nemawarkar/",

  aboutText:
    "I'm a final-year Computer Science undergraduate at VIT Bhopal building full-stack, API-driven applications with React.js, Node.js, FastAPI, and Java. I have shipped a security monitoring dashboard that cut threat identification time by 30% and an AI summarization platform that compresses documents by up to 70%, both with secure JWT-based authentication. Backed by a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and relational databases, I am seeking a Full-Stack Software Developer role to build scalable, secure software.",

  highlights: [
    { label: "Frontend", value: "React.js, Tailwind CSS, Bootstrap" },
    { label: "Backend", value: "Node.js, Express.js, FastAPI, Java" },
    { label: "Databases", value: "PostgreSQL, MySQL, SQLite" },
    { label: "Education", value: "VIT Bhopal, B.Tech CSE (2023–2027)" },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
        "Responsive UI Design",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "EJS",
        "JDBC",
        "REST API Design",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "Prisma ORM"],
    },
    {
      category: "Auth & Security",
      items: ["JWT (JSON Web Tokens)", "bcrypt", "Role-Based Access Control (RBAC)"],
    },
    {
      category: "Core CS",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "MVC Architecture",
        "System Design",
      ],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "WebSockets", "Recharts", "Postman", "JUnit 5"],
    },
  ],

  projects: [
    {
      title: "API Performance & Load Testing Platform",
      subtitle: "Real-Time Concurrent Load Testing & Telemetry Platform",
      tech: ["React", "Node.js", "Express", "WebSockets", "SQLite", "Recharts"],
      description:
        "A full-stack, from-scratch performance engineering tool to execute concurrent HTTP load tests with live WebSocket telemetry, percentile latency analytics, and regression diffing.",
      points: [
        "Engineered a custom ConcurrencyLimiter promise engine to strictly regulate concurrent virtual users without unconstrained worker overload.",
        "Streamed live latency, throughput (req/s), and response statuses into the UI via raw WebSockets with real-time visualization in Recharts.",
        "Computed exact statistical percentiles (P50, P95, P99) and built automated concurrency-scaling suites to detect throughput saturation and tail-latency regressions.",
        "Implemented multi-step request workflow chaining with dynamic variable extraction and SQLite persistence for historical test comparisons.",
      ],
      github: "https://github.com/NinadNema/API-Performance-Load-Testing-Platform",
      demo: "",
    },
    {
      title: "Healthcare Appointment Manager",
      subtitle: "Full-Stack Clinic Platform with AI Summaries & Calendar Sync",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Gemini AI"],
      description:
        "A multi-portal clinic platform for patients, doctors, and admins featuring double-booking prevention, automated Google Calendar sync, and LLM-driven visit summaries.",
      points: [
        "Designed a database-level partial unique index in PostgreSQL via Prisma to mathematically guarantee zero double-booking even under concurrent appointment requests.",
        "Integrated Google Gemini AI to transform patient symptom intake into clinical triage briefs for doctors, and doctor notes into plain-language patient summaries.",
        "Built two-way Google Calendar synchronization and automated email notifications (Nodemailer) with background retry workers for resilient job dispatching.",
        "Implemented role-based access control (RBAC) across patient, doctor, and admin portals with automated leave-day conflict resolution.",
      ],
      github: "https://github.com/NinadNema/healthcare-appointment-manager",
      demo: "",
    },
    {
      title: "Web Trust Analyzer",
      subtitle: "Real-Time Security Monitoring Dashboard",
      tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
      description:
        "A React.js frontend for a Web Application Firewall (WAF) platform, integrating Go REST APIs to display real-time security telemetry, attack trends, and threat activity.",
      points: [
        "Architected interactive dashboards to visualize security events, attack statistics, severity levels, and threat-type breakdowns, cutting threat-identification time by ~30%.",
        "Designed a responsive multi-view interface covering threat monitoring, OWASP compliance, and WAF configuration with rate-limiting and IP whitelisting.",
        "Collaborated in a 4-person cross-functional team, owning frontend architecture and end-to-end API integration with Go and SQLite backends.",
      ],
      github: "https://github.com/cray4367/Web_Trust_Analyzer",
      demo: "",
    },
    {
      title: "SummarAI",
      subtitle: "AI-Powered Full-Stack Text Summarization App",
      tech: ["React 19", "FastAPI", "Python", "DistilBART", "SQLite"],
      description:
        "A full-stack AI text summarization application using React 19 and FastAPI, integrating DistilBART (sshleifer/distilbart-cnn-12-6) to compress documents by up to 70%.",
      points: [
        "Implemented drag-and-drop file processing for PDF, DOCX, and TXT formats with 4 summarization modes and configurable output length presets.",
        "Developed JWT-based authentication with bcrypt password hashing and SQLite persistence for user accounts, summary history, search, and favorites.",
        "Integrated YAKE keyword extraction with click-to-highlight, key-point extraction, reading-time/compression-ratio metrics, and one-click PDF export.",
      ],
      github: "https://github.com/NinadNema/Text-Summarizer/",
      demo: "",
    },
    {
      title: "Student Management System",
      subtitle: "Full-Stack CRUD API with Spring Boot",
      tech: ["Java", "Spring Boot", "MySQL", "JUnit 5", "Swagger"],
      description:
        "A full-stack Student Management System built with Java, Spring Boot, and MySQL, featuring a dynamic frontend, pagination, and OpenAPI documentation.",
      points: [
        "Built a REST API with full CRUD operations, search by name/email, filter by course, and 10-item pagination.",
        "Implemented input validation, global exception handling, and professional logging with SLF4J for reliable error handling.",
        "Documented the API with Swagger/SpringDoc OpenAPI and covered core service logic with 8 unit tests using JUnit 5 and Mockito.",
      ],
      github: "https://github.com/NinadNema/student-management-api",
      demo: "",
    },
  ],

  education: [
    {
      school: "Vellore Institute of Technology – Bhopal, Madhya Pradesh",
      degree: "B.Tech in Computer Science",
      detail: "CGPA: 7.82/10.0",
      period: "2023 – 2027",
    },
  ],

  certifications: [
    {
      title: "Google IT Support Certificate",
      issuer: "Google Career Certificates",
      date: "Jan 2026",
      verify: "https://www.credly.com/go/7Nt5V8xI",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google, Coursera",
      date: "Dec 2025",
      verify: "https://coursera.org/verify/C9JEPW8QLYWP",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy & OpenEDG JS Institute",
      date: "May 2026",
      verify: "https://www.credly.com/badges/469d8f87-ed9c-44b5-be1c-35bd17da0a5e",
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL (IIT Madras) · Elite, 66%",
      date: "Jan–Apr 2025",
      verify: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS46S44520052604389499",
      rollNo: "NPTEL25CS46S445200526",
    },
    {
      title: "Marketing Analytics",
      issuer: "NPTEL (IIT Kharagpur) · Elite, 94%",
      date: "Jan–Apr 2026",
      verify: "https://nptel.ac.in/noc/E_Certificate/NOC26MG33S95240166404717198",
      rollNo: "NPTEL26MG33S952401664",
    },
  ],
};

export default portfolioData;