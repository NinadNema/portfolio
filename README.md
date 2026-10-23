# Ninad Nemawarkar — Full-Stack Developer Portfolio

An editorial, responsive personal portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Its warm-paper palette, graph-paper grid, ruled ledger, and engineering-note details showcase full-stack projects, technical skills, verified certifications, and software engineering experience.

---

## 🚀 Live Demo & Links

- **Live Portfolio:** [ninadnema-portfolio.vercel.app](https://ninadnema-portfolio.vercel.app)
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
| **Styling & Design System** | **Tailwind CSS v4 + CSS** | Responsive editorial layout with warm paper, ink, hairline rules, a restrained vermilion accent, and graph-paper texture. |
| **Animations & Transitions** | **Framer Motion** | Scroll-scrubbed statement reveal and a compact animated mobile navigation. |
| **Iconography** | **React Icons** | Clean, scalable vector icons across GitHub, LinkedIn, external links, and tech badges. |

---

## ✨ Key Features & Implementation Details

1. **Engineering title block (`Hero.jsx`)**
   - Type-led introduction with role, education, availability, resume, and social links presented as a compact specification strip.

2. **Data-Driven Architecture (`data/portfolioData.js`)**
   - Implements a single source of truth (SSOT) data model, decoupling UI presentation from content data for easy maintenance and zero code duplication.

3. **Numbered work ledger and case studies (`Projects.jsx`)**
   - Projects are presented as ruled, numbered rows with proof points revealed on hover.
   - Each entry opens a hash-routed case study with engineering notes, a large proof-point callout, and previous/next navigation.
   - **API Performance & Load Testing Platform:** Real-Time Concurrent Load Testing & Telemetry Platform with custom promise concurrency limiter, WebSocket streaming, and P50/P95/P99 latency distribution charts.
   - **Healthcare Appointment Manager:** Full-Stack Clinic Platform with Gemini AI clinical summaries, PostgreSQL partial unique indexing for concurrency-safe booking, and automated Google Calendar sync.
   - **Web Trust Analyzer:** React frontend for a Web Application Firewall (WAF) platform integrated with Go REST APIs.
   - **SummarAI:** Full-stack AI text summarization platform with DistilBART, FastAPI, and JWT authentication.
   - **Student Management System:** Full-stack Java Spring Boot REST API with MySQL, Swagger OpenAPI, and JUnit 5 test coverage.

4. **Stack matrix and dated record (`Skills.jsx`, `Education.jsx`)**
   - Ruled skill groups and dated education/certification entries, including verification links.

5. **Education & Verified Certifications (`Education.jsx`)**
   - Direct verification links for Google IT Support, Google Networking, Cisco JS, and NPTEL IIT Madras / IIT Kharagpur certifications.

6. **About, navigation, and contact (`About.jsx`, `Navbar.jsx`, `Contact.jsx`)**
   - Dedicated `#/about` page, responsive navigation, and a prominent mailto link instead of a contact form.

### Routes

- `#/` — home, statement, work index, stack, record, and contact
- `#/work/<project-slug>` — project case study with previous/next navigation
- `#/about` — background, stack, education, and certifications

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
│   │   ├── Idcard.jsx     # Retained standalone ID card component
│   │   ├── About.jsx      # Summary and career background
│   │   ├── Skills.jsx     # Categorized technical competencies
│   │   ├── Projects.jsx   # Interactive project showcase with source links
│   │   ├── Education.jsx  # Academic background & verified certifications
│   │   ├── Contact.jsx    # Contact channels and quick outreach
│   │   └── Footer.jsx     # Footer credits and navigation links
│   ├── data/
│   │   └── portfolioData.js # Centralized configuration and portfolio content
│   ├── App.jsx            # Hash routes and root application layout
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

- **Ninad Nemawarkar** — B.Tech Computer Science, Vellore Institute of Technology
- **Email:** [ninad2800@gmail.com](mailto:ninad2800@gmail.com)
- **GitHub:** [@NinadNema](https://github.com/NinadNema)
- **LinkedIn:** [ninad-nemawarkar](https://www.linkedin.com/in/ninad-nemawarkar-85834a296)