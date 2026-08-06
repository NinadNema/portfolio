const portfolioData = {
  name: "Ninad Nemawarkar",

  role: "Full-Stack Software Developer",

  subtitle: "Final-Year Computer Science Undergraduate",

  description:
    "I build secure, scalable full-stack web applications using React.js, FastAPI, Java, and REST APIs. Skilled in designing authentication systems, responsive interfaces, and API-driven systems, with a strong foundation in Data Structures & Algorithms and Object-Oriented Programming.",

  email: "ninad2800@gmail.com",

  phone: "+91 99107 09291",

  github: "https://github.com/NinadNema",

  linkedin: "https://www.linkedin.com/in/ninad-nemawarkar-85834a296",

  leetcode: "https://leetcode.com/u/Ninad_Nemawarkar/",

  aboutText:
    "I'm a final-year Computer Science undergraduate with hands-on experience building full-stack web applications using React.js, FastAPI, Java, and REST APIs. I enjoy designing secure authentication systems, responsive interfaces, and API-driven products, backed by a strong foundation in Data Structures & Algorithms and Object-Oriented Programming. I'm looking for a Full-Stack Software Developer role where I can build scalable, reliable software.",

  highlights: [
    { label: "Frontend", value: "React.js, Tailwind CSS" },
    { label: "Backend", value: "FastAPI, JDBC, REST APIs" },
    { label: "Focus", value: "DSA & OOP" },
    { label: "Currently", value: "VIT Bhopal, B.Tech CSE" },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Responsive UI Design",
      ],
    },
    {
      category: "Backend",
      items: ["FastAPI", "JDBC", "RESTful API Design", "JWT Authentication"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite"],
    },
    {
      category: "Core CS",
      items: ["Data Structures & Algorithms", "OOP", "MVC Architecture"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      title: "Web Trust Analyzer",
      subtitle: "Real-Time Security Monitoring Dashboard",
      tech: ["React.js", "JavaScript", "REST APIs"],
      description:
        "A React.js frontend for a Web Application Firewall (WAF) platform, integrating REST APIs from a Go backend to display real-time security telemetry and threat activity.",
      points: [
        "Built interactive dashboards to visualize security events, attack statistics, severity levels, and threat-type distributions.",
        "Designed a responsive multi-view interface covering threat monitoring, OWASP compliance, and firewall configuration, with controls for rate limiting and IP whitelisting/blacklisting.",
        "Collaborated in a cross-functional team, owning frontend architecture and end-to-end API integration while coordinating with backend developers using Go and SQLite.",
      ],
      github: "https://github.com/cray4367/Web_Trust_Analyzer",
      demo: "",
    },
    {
      title: "SummarAI",
      subtitle: "AI-Powered Full-Stack Text Summarization App",
      tech: ["React", "FastAPI", "Python", "SQLite"],
      description:
        "A full-stack AI text summarization application using React 19 and FastAPI, integrating DistilBART (sshleifer/distilbart-cnn-12-6) for abstractive text summarization.",
      points: [
        "Implemented drag-and-drop file processing for PDF, DOCX, and TXT formats, with 4 summarization modes (Normal, Academic, Simple, Research) and 3 configurable output lengths.",
        "Developed JWT-based authentication with bcrypt password hashing and SQLite persistence for user accounts, summary history, search, and favorites.",
        "Integrated YAKE keyword extraction with click-to-highlight, key-point and important-sentence extraction, reading-time and compression-ratio metrics, and one-click PDF export.",
      ],
      github: "https://github.com/NinadNema/Text-Summarizer/",
      demo: "",
    },
    {
      title: "Student Management System",
      subtitle: "Full-Stack CRUD API with Spring Boot",
      tech: ["Java", "Spring Boot", "MySQL", "JUnit 5"],
      description:
        "A full-stack Student Management System built with Java, Spring Boot, and MySQL, featuring a dynamic 3D frontend with particle animations, full CRUD operations, pagination, and search & filter.",
      points: [
        "Built a REST API with full CRUD operations, search by name/email, filter by course, and pagination (10 students per page).",
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
      verify: "https://www.credly.com/go/7Nt5V8xI"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google, Coursera",
      date: "Dec 2025",
      verify: "https://coursera.org/verify/C9JEPW8QLYWP"
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