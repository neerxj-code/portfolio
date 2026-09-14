# ⚡ neerajxcode — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-neerajxcode.netlify.app-00ff66?style=for-the-badge&logo=netlify&logoColor=black)](https://neerajxcode.netlify.app/)
[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)

> **Live Website:** [https://neerajxcode.netlify.app/](https://neerajxcode.netlify.app/)

A modern, high-performance, dark-themed developer portfolio crafted with **React 19**, **Vite**, **Tailwind CSS v4**, and **GSAP**. Built to showcase frontend development projects, motion graphics, skill tech stacks, and developer background with smooth animations and interactive components.

---

## 🌟 Overview

**neerajxcode** serves as the interactive digital workspace and portfolio for **Neeraj Jaiswal**, a Frontend Developer specializing in intuitive, responsive, and visually engaging web applications.

- 🌐 **Deployment URL:** [neerajxcode.netlify.app](https://neerajxcode.netlify.app/)
- 🎨 **Design Style:** Dark aesthetic with glowing green (`#00ff66`) accents, starfield canvas effects, sleek typography, and motion animations.
- ⚡ **Performance:** Fast load times powered by Vite module bundling and hardware-accelerated GSAP animations.

---

## ✨ Key Features & Highlights

- **🎬 Interactive Preloader:** Custom animated loading overlay (`Preloader.jsx`) with smooth entrance and reveal transitions.
- **🚀 Hero Section:** Eye-catching introductory banner featuring headline titles, availability indicator badge, animated character visual, and quick "LET'S TALK" call-to-action.
- **📱 Responsive Navigation & Full-Screen Overlay:** Fixed glassmorphism navbar with smooth-scrolling section links and a full-screen drawer menu displaying social links & quick jumps.
- **💫 GSAP & ScrollTrigger Animations:** Scroll-driven text reveals, staggered element fades, and interactive section headers across the entire layout.
- **📜 Lenis Smooth Scrolling:** Ultra-smooth momentum physics scrolling powered by `@studio-freight/lenis`.
- **🛠️ Dynamic Tech Stack Display:** Categorized grid view covering:
  - **Frontend:** HTML5, CSS3, JavaScript, Tailwind CSS, React, GSAP.
  - **Learning / Exploring:** TypeScript, Next.js, Framer Motion.
  - **Developer Tools:** Git, GitHub, Vite, Figma, Netlify.
- **💼 Selected Projects Showcase:** Interactive list of featured works detailing tech stacks and project highlights.
- **📬 Integrated Contact Section:** Quick mail link (`neerajjaiswal989@gmail.com`) and direct social connections.
- **✨ Animated Starfield Background:** 84 dynamically rendered star elements giving a subtle cosmic ambient backdrop.

---

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Tools
- **[React 19](https://react.dev/)** (`v19.2.7`) — Frontend UI component library
- **[Vite](https://vitejs.dev/)** (`v8.1.1`) — Next-generation frontend build tooling
- **[React Router DOM](https://reactrouter.com/)** (`v7.18.3`) — Client-side navigation & routing

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** (`v4.3.3`) — Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** (`v3.15.0`) — Professional-grade animation library with `ScrollTrigger`
- **[Lenis](https://lenis.darkroom.engineering/)** (`v1.3.26` / `@studio-freight/lenis` `v1.0.42`) — Smooth scroll library
- **[Lucide React](https://lucide.dev/)** (`v1.38.0`) — Clean & customizable icons

### DevTools & Quality Control
- **ESLint** (`v10.6.0`) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Simple Icons CDN** for tech stack brand icons

---

## 📁 Project Structure

```text
01-portfolio/
├── public/                  # Static assets & favicon (neerajxcode.svg)
├── src/
│   ├── assets/              # Images, graphics (character.png, etc.)
│   ├── components/          # Modular React components
│   │   ├── About/           # About section component & styles (About1.jsx, About1.css)
│   │   ├── Contact/         # Contact section component & styles (Contact.jsx, Contact.css)
│   │   ├── Marquee/         # Infinite scrolling banner components
│   │   ├── Preloader/       # Loading screen transition component
│   │   ├── Projects/        # Selected projects showcase component
│   │   ├── Scroll/          # Lenis smooth scroller wrapper (Scroller.jsx)
│   │   ├── Stack/           # Tech stack categories grid (Stack1.jsx, Stack1.css)
│   │   ├── Hero.jsx         # Hero section component
│   │   └── Navbar.jsx       # Navigation header & mobile menu drawer
│   ├── App.jsx              # Main App entry point & starry background renderer
│   ├── App.css              # Global styles & keyframe animations
│   ├── index.css            # Tailwind CSS directives & base styles
│   └── main.jsx             # React DOM root render file
├── index.html               # Main HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## ⚡ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/neerxj-code/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches local development server with HMR |
| `npm run build` | Builds optimized production bundle in `dist/` |
| `npm run preview` | Runs a local web server to preview production build |
| `npm run lint` | Runs ESLint to check for syntax and style issues |

---

## 🚀 Deployment

The project is hosted and automatically deployed on **Netlify**.

- **Live URL:** [https://neerajxcode.netlify.app/](https://neerajxcode.netlify.app/)
- **Build Settings:**
  - **Build Command:** `npm run build`
  - **Publish Directory:** `dist`

---

## 📬 Contact & Connect

**Neeraj Jaiswal** — Frontend Developer

- 🌐 **Live Website:** [neerajxcode.netlify.app](https://neerajxcode.netlify.app/)
- 📧 **Email:** [neerajjaiswal989@gmail.com](mailto:neerajjaiswal989@gmail.com)
- 🐙 **GitHub:** [@neerxj-code](https://github.com/neerxj-code)
- 💼 **LinkedIn:** [Neeraj Jaiswal](https://linkedin.com)
- 🐦 **X (Twitter):** [@_neeraj_jaiswal](https://x.com/_neeraj_jaiswal)
- 📸 **Instagram:** [@neerxj_jaiswal](https://www.instagram.com/neerxj_jaiswal/)

---

<p center="align">
  <i>Designed & Developed with ❤️ by Neeraj Jaiswal</i>
</p>

