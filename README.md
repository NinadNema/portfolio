# Ninad Nemawarkar — Full-Stack Developer Portfolio

An interactive, responsive personal portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase full-stack projects, technical skills, verified certifications, and software engineering experience.

---

## 🚀 Live Demo & Links

- **Live Portfolio:** [ninadnema.github.io/portfolio](https://ninadnema.github.io/portfolio) *(or your deployed Vercel/Netlify link)*
- **GitHub Repository:** [github.com/NinadNema/portfolio](https://github.com/NinadNema/portfolio)
- **LinkedIn:** [linkedin.com/in/ninad-nemawarkar-85834a296](https://www.linkedin.com/in/ninad-nemawarkar-85834a296)
- **LeetCode:** [leetcode.com/u/Ninad_Nemawarkar/](https://leetcode.com/u/Ninad_Nemawarkar/)
- **Email:** [ninad2800@gmail.com](mailto:ninad2800@gmail.com)

---

## 🛠️ Technology Stack & Rationale

| Layer / Tool | Technology | Rationale & Usage |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19** | Component-driven UI architecture, fast virtual DOM rendering, and seamless state management. |
| **Build Tool & Bundler**| **Vite 8** | Ultra-fast Hot Module Replacement (HMR) and optimized rollup production bundles. |
| **Styling & Design System** | **Tailwind CSS v4** | Modern utility-first CSS engine with custom dark-mode color palettes and responsive breakpoints. |
| **Animations & Transitions** | **Framer Motion** | Physics-based micro-interactions, scroll-triggered reveal animations, and interactive gesture effects. |
| **Iconography** | **React Icons** | Clean, scalable vector icons across GitHub, LinkedIn, external links, and tech badges. |

---

## ✨ Key Features & Implementation Details

1. **Interactive Hero & 3D ID Badge (`Hero.jsx` & `Idcard.jsx`)**
   - Dynamic introduction with animated text reveal and direct access to resume download and social links.
   - Interactive badge component designed with micro-animations and depth perception.

2. **Data-Driven Architecture (`data/portfolioData.js`)**
   - Implements a single source of truth (SSOT) data model, decoupling UI presentation from content data for easy maintenance and zero code duplication.

3. **Featured Projects Showcase (`Projects.jsx`)**
   - **API Performance & Load Testing Platform:** Real-Time Concurrent Load Testing & Telemetry Platform with custom promise concurrency limiter, WebSocket streaming, and P50/P95/P99 latency distribution charts.
   - **Healthcare Appointment Manager:** Full-Stack Clinic Platform with Gemini AI clinical summaries, PostgreSQL partial unique indexing for concurrency-safe booking, and automated Google Calendar sync.
   - **Web Trust Analyzer:** React frontend for a Web Application Firewall (WAF) platform integrated with Go REST APIs.
   - **SummarAI:** Full-stack AI text summarization platform with DistilBART, FastAPI, and JWT authentication.
   - **Student Management System:** Full-stack Java Spring Boot REST API with MySQL, Swagger OpenAPI, and JUnit 5 test coverage.

4. **Technical Skills Taxonomy (`Skills.jsx`)**
   - Categorized matrix spanning Languages, Frontend, Backend, Databases, Core Computer Science (DSA, OOP, MVC), and Developer Tools.

5. **Education & Verified Certifications (`Education.jsx`)**
   - Direct verification links for Google IT Support, Google Networking, Cisco JS, and NPTEL IIT Madras / IIT Kharagpur certifications.

6. **Responsive Navigation & Contact (`Navbar.jsx`, `Contact.jsx`, `Footer.jsx`)**
   - Mobile-first layout with smooth anchor scrolling and direct communication channels.

---

## 📁 Project Structure

```text
portfolio/
├── public/                # Static assets (Resume PDF, icons, favicon)
├── src/
│   ├── assets/            # Vector graphics and images
│   ├── components/        # Modular UI components
│   │   ├── Navbar.jsx     # Sticky responsive navigation bar
│   │   ├── Hero.jsx       # Landing section with CTA and social links
│   │   ├── Idcard.jsx     # Interactive digital ID card
│   │   ├── About.jsx      # Summary and career background
│   │   ├── Skills.jsx     # Categorized technical competencies
│   │   ├── Projects.jsx   # Interactive project showcase with source links
│   │   ├── Education.jsx  # Academic background & verified certifications
│   │   ├── Contact.jsx    # Contact channels and quick outreach
│   │   └── Footer.jsx     # Footer credits and navigation links
│   ├── data/
│   │   └── portfolioData.js # Centralized configuration and portfolio content
│   ├── App.jsx            # Root application layout
│   ├── main.jsx           # React DOM entrypoint
│   └── index.css          # Global styling rules & Tailwind directives
├── package.json           # Dependencies and build scripts
└── vite.config.js         # Vite configuration with React & Tailwind plugins
```

---

## 💻 Getting Started (Local Development)

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NinadNema/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production bundle:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Ninad Nemawarkar** — B.Tech Computer Science, VIT Bhopal
- **Email:** [ninad2800@gmail.com](mailto:ninad2800@gmail.com)
- **GitHub:** [@NinadNema](https://github.com/NinadNema)
- **LinkedIn:** [ninad-nemawarkar](https://www.linkedin.com/in/ninad-nemawarkar-85834a296)