# 🚀 AMI ASTRO

### Explore. Create. Connect.

> The official digital experience for AMI ASTRO — a student-driven astronomy and space community at Amity University Mumbai.

[![Live Website](https://img.shields.io/badge/Live%20Website-AMI%20ASTRO-00e5ff?style=for-the-badge)](https://ami-astro-five.vercel.app/)
[![Built With](https://img.shields.io/badge/Built%20With-React-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Powered%20By-Vite-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Deployed](https://img.shields.io/badge/Deployed%20On-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 🌌 About AMI ASTRO

AMI ASTRO is more than a student club website.

It is designed as a digital space where students can discover astronomy, connect with the community, explore events, meet the crew, hear from alumni, and become part of something beyond the classroom.

The website combines a futuristic space-inspired visual language with a clean and approachable user experience.

From recruitment and alumni sessions to observatory nights and astronomy conversations, the platform brings the AMI ASTRO community into one interactive experience.

---

## ✨ What Makes It Different

This website was designed around one idea:

### Make a club website feel like an experience.

Instead of building a conventional college club page, AMI ASTRO uses a space-station inspired interface with:

- 🌌 Dark futuristic visual system
- 🚀 Space-inspired interactions
- ✨ Subtle animations and motion
- 🧑‍🚀 Interactive astronaut experience
- 🛰️ Mission-style content sections
- 📡 Live information elements
- 🌠 Astronomy-focused event presentation
- 👥 Crew and alumni storytelling
- 📱 Responsive layouts for different screen sizes
- ⚡ Fast Vite-powered development
- 🎯 Clear calls to action for recruitment and events

---

# 🧭 Website Experience

## 🏠 Home

The landing experience introduces AMI ASTRO through a futuristic hero section designed to immediately communicate the identity of the club.

It acts as the starting point for the entire website journey.

---

## 🌠 What's Happening

A dynamic section for current AMI ASTRO activities and opportunities.

It highlights:

- Crew onboarding
- Alumni sessions
- Observatory activities
- Upcoming events
- Application deadlines
- Live countdown information
- Event actions

The recruitment section also features the AMI ASTRO event artwork for the **Veil of the Dying Sun** session.

---

## 👨‍🚀 Crew

Meet the people behind AMI ASTRO.

The crew section gives the website a more human identity by introducing the students who contribute to the community.

---

## 🎙️ Astro Talks

A dedicated space for astronomy conversations, alumni interactions and knowledge sharing.

The section connects student experiences with opportunities beyond campus.

---

## 🛰️ Alumni

AMI ASTRO's story doesn't stop when students graduate.

The alumni section preserves the connection between past leadership and the current generation of the club.

It creates space for:

- Past Presidents
- Secretaries
- Former crew members
- Alumni experiences
- Career journeys
- Community continuity

---

## 📡 Archive

A digital archive for the club's activities, memories and experiences.

The idea is simple:

> Today's events become tomorrow's history.

---

## 📣 Updates & Transmissions

A dedicated communication layer for announcements, updates and important club information.

---

## 📬 Contact

A simple and accessible way for students and visitors to connect with AMI ASTRO.

---

# 🧑‍🚀 Interactive Experience

One of the visual highlights of the website is the interactive astronaut experience.

The astronaut component is built using a browser-based 3D rendering approach and is integrated into the overall interface without overwhelming the content.

The goal is to make the website feel immersive while keeping navigation practical.

---

# 🏗️ Architecture

The project follows a component-based React architecture.

```text
AMI-ASTRO
│
├── public
│   ├── ami-astro-logo.png
│   ├── favicon.svg
│   ├── icons.svg
│   └── veil-of-the-dying-sun.jpg
│
├── src
│   │
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── LiveStatus.tsx
│   │   ├── WhatsHappening.tsx
│   │   ├── Missions.tsx
│   │   ├── MissionDetailModal.tsx
│   │   ├── JoinModal.tsx
│   │   ├── Crew.tsx
│   │   ├── AstroTalks.tsx
│   │   ├── Alumni.tsx
│   │   ├── CommunityVoices.tsx
│   │   ├── UniverseOrbits.tsx
│   │   ├── Archive.tsx
│   │   ├── Transmissions.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Astronaut3D.tsx
│   │   ├── AmiAstroLogo.tsx
│   │   └── ManagementGuideModal.tsx
│   │
│   ├── data
│   │   └── whatsHappening.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
