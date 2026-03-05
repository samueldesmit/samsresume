# Sam's Portfolio

A personal portfolio website showcasing my work as a Shopify developer, built with React and Vite.

## Features

- **Case Studies** — Detailed project showcases with tech stacks and live links
- **Dark / Light Mode** — Theme toggle with smooth transitions and frosted glass navbar
- **Multi-language Support** — Dutch and English with a language selector
- **Responsive Design** — Mobile-first layout with fullscreen hamburger menu
- **Scroll Animations** — GSAP-powered entrance animations with ScrollTrigger
- **Logo Slider** — Auto-scrolling tech stack carousel with edge fade effect

## Tech Stack

| Category     | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | React 18                            |
| Build Tool   | Vite                                |
| Routing      | React Router v6                     |
| Styling      | SCSS with CSS custom properties     |
| Animations   | GSAP + ScrollTrigger                |
| Carousel     | Swiper                              |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samueldesmit/samsresume.git
cd samsresume

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/            # Images and logos
├── components/
│   ├── Bio/           # About me section
│   ├── CaseCard/      # Individual case study card
│   ├── HomeHero/      # Homepage hero section
│   ├── Language/       # Language proficiency bars
│   ├── LanguageSelector/  # EN/NL toggle
│   ├── LogoSlider/    # Tech stack carousel
│   ├── Nav/           # Navigation with hamburger menu
│   ├── ScrollToTop/   # Scroll restoration on route change
│   ├── Skills/        # Skill proficiency bars
│   └── ThemeToggle/   # Dark/light mode switch
├── context/
│   └── LanguageContext.jsx  # i18n translations
├── pages/
│   ├── Cases/         # Portfolio case studies
│   ├── Contact/       # Contact page
│   └── Home/          # Homepage
├── settings/
│   └── include-media.scss   # Responsive breakpoints
├── App.jsx
├── App.css
├── index.css          # CSS variables and theme definitions
└── main.jsx
```

## License

This project is personal portfolio work. All rights reserved.
