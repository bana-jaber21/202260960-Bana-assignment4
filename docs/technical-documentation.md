# Technical Documentation

## Overview

A personal portfolio website built with vanilla HTML, CSS, and JavaScript (no frameworks or build tools). The site is fully responsive across desktop, tablet, and mobile, and includes a dark/light theme toggle. It serves as a professional online presence showcasing projects, skills, and contact information.

---

## Tech Stack

| Layer  | Technology                           |
|--------|--------------------------------------|
| HTML   | Semantic HTML5                       |
| CSS    | Custom properties, Grid, Flexbox     |
| JS     | Vanilla ES6+ (no libraries)          |

---

## File Structure

```
assignment-1/
├── index.html                  # Main HTML page
├── css/
│   └── styles.css              # All styling (themes, layout, responsive)
├── js/
│   └── script.js               # All interactive features
├── assets/
│   └── images/
│       ├── animated_pic.png    # Hero profile illustration
│       ├── Soccer.png          # Soccer@KFUPM project image
│       ├── TripMate.png        # TripMate project image
│       └── sentiment.png       # Sentiment Analysis project image
├── docs/
│   ├── ai-usage-report.md      # AI tools disclosure
│   └── technical-documentation.md
└── README.md
```

---

## HTML Structure (index.html)

The page is divided into the following sections:

1. **Navbar** — Fixed top navigation with brand name, section links (About Me, Projects, Contact), a theme toggle button, and a hamburger menu for mobile.
2. **Hero** (`<header id="about">`) — Two-column CSS Grid layout with an introduction (name + description) on the left and a profile illustration on the right.
3. **Projects** (`<section id="projects">`) — Three project cards in a CSS Grid row, each containing an image, title, description, tech tags, and a GitHub link.
4. **Contact** (`<section id="contact">`) — Two-column layout with contact info on the left and a validated form (Name, Email, Message) on the right.
5. **Footer** — Social links (GitHub, LinkedIn, Email) and copyright notice.

---

## CSS Architecture (css/styles.css)

### Theming

Two themes are defined using CSS custom properties:

- `:root` — light theme
- `[data-theme="dark"]` — dark theme (default)

The theme is toggled by setting the `data-theme` attribute on `<html>`. Variables cover background (`--bg`, `--bg-alt`), text (`--text`, `--text-muted`), accent (`--accent`), borders, card shadows, and hero-specific values (`--hero-bg`, `--hero-name`, `--hero-desc`, `--hero-glow`).

### Layout

- **Container**: `width: min(1100px, 92%)` with auto inline margins for centering.
- **Hero**: `grid-template-columns: 1fr 1fr` — equal two-column split, `min-height: 100vh`.
- **Projects**: `grid-template-columns: repeat(3, 1fr)` — three equal columns.
- **Contact**: `grid-template-columns: 1fr 1.4fr` — info column narrower than form column.

### Navbar Behavior

The navbar has two visual states:

1. **Default** (over the hero): dark semi-transparent background with `backdrop-filter: blur(12px)`.
2. **Scrolled** (`.scrolled` class): switches to theme-aware colors so it blends with the page content below the hero.

### Visual Effects

- **Hero glow**: A `::before` pseudo-element with `radial-gradient` creates a soft glow behind the profile image.
- **Hero image shadow**: `filter: drop-shadow(0 0 40px rgba(108,99,255,0.25))`.
- **Project card hover**: `translateY(-8px)` lift with a stronger purple box shadow.
- **Project card accent**: `border-top: 3px solid var(--accent)` colored top border that brightens on hover.
- **Scroll reveal**: Elements fade in from below using a `translateY(30px)` transition triggered by `IntersectionObserver`.

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤ 860px    | Hero switches to single column; image reorders above text using CSS `order` |
| ≤ 900px    | Contact grid stacks to single column |
| ≤ 600px    | Hamburger menu replaces nav links; project grid stacks to single column |

---

## JavaScript Features (js/script.js)

All features initialize on `DOMContentLoaded`. No external libraries are used.

### 1. Dark/Light Theme Toggle

- **Functions**: `initTheme()`, `applyTheme(theme)`, `initThemeToggle()`
- On load, reads saved preference from `localStorage`; defaults to dark mode if no preference is saved.
- Sets the `data-theme` attribute on `<html>` and persists the choice in `localStorage`.
- Updates the toggle button icon between ☀️ and 🌙.

### 2. Smooth Scrolling

- **Function**: `initSmoothScroll()`
- Attaches click handlers to all `a[href^="#"]` anchor links.
- Uses `scrollIntoView({ behavior: 'smooth', block: 'start' })` for smooth navigation.
- Automatically closes the mobile menu after a link is clicked.

### 3. Mobile Hamburger Menu

- **Function**: `initHamburger()`
- Toggles the `.open` class on `.nav-links` to show/hide the dropdown menu.
- Closes the menu when clicking anywhere outside the navbar.

### 4. Contact Form Validation

- **Function**: `initContactForm()`
- Client-side only — no backend or email service connected.
- Validates all required fields on `blur`; clears errors live on `input`.
- Email format validated with regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- On valid submission, simulates a 1-second async send, shows a success message for 4 seconds, then resets the form.

### 5. Scroll-Reveal Animations

- **Function**: `initScrollReveal()`
- Uses `IntersectionObserver` with a `threshold` of `0.12`.
- Adds a `.reveal` class (opacity: 0, translateY: 30px) to project cards and the contact grid on load.
- When an element enters the viewport, `.visible` is added (opacity: 1, transform: none) and the element stops being observed.

### 6. Navbar Scroll State

- **Function**: `initNavScroll()`
- Listens for the `scroll` event (passive listener for performance) and toggles `.scrolled` on the navbar once `scrollY` exceeds the hero height minus 80px.

---

## Design Decisions

- **No frameworks**: Vanilla HTML/CSS/JS keeps the project lightweight with zero dependencies and faster load times.
- **CSS custom properties for theming**: A single `data-theme` attribute switches all colors across the page instantly without JavaScript DOM manipulation of individual elements.
- **`IntersectionObserver` over scroll events**: More performant for scroll-reveal since it does not fire on every scroll frame.
- **`localStorage` for theme persistence**: Ensures the user's theme choice survives page reloads without needing a backend.
- **CSS `order` for mobile reflow**: Avoids duplicating HTML just to reorder elements on small screens.
- **Dark mode as default**: Suits the portfolio's visual style and is a common preference among developers and tech audiences.

---

## Use Cases

- **Personal branding**: Provides a professional online presence to share with recruiters, collaborators, and potential employers.
- **Project showcase**: Displays completed and in-progress projects with tech stacks, descriptions, and repository links.
- **Direct contact**: The contact form allows visitors to reach out directly without needing to find a separate email address.
- **Mobile accessibility**: Fully responsive layout ensures the portfolio is viewable on any device, important when sharing links on the go.

---

## Learning Outcomes

Working on this project provided hands-on experience with:

- **Semantic HTML5**: Structuring a webpage with meaningful tags (`<header>`, `<section>`, `<article>`, `<footer>`) for readability and accessibility.
- **CSS Grid and Flexbox**: Building complex, responsive layouts without relying on a CSS framework.
- **CSS Custom Properties**: Implementing a complete theming system using variables and the `data-theme` attribute.
- **Responsive Web Design**: Applying media queries and fluid sizing (`clamp()`, `min()`) to support multiple screen sizes.
- **Vanilla JavaScript**: Writing modular, event-driven code without libraries to handle UI interactions.
- **`IntersectionObserver` API**: Using a modern browser API for performant scroll-based animations.
- **`localStorage`**: Persisting user preferences across sessions on the client side.
- **Progressive enhancement**: Building a site that works at its core without JavaScript, with JS layered on top for enhanced interactivity.

---

## Benefits and Challenges

### Benefits

- **Fast load time**: No framework overhead means minimal CSS and JS payload.
- **Full control**: Every line of code is written and understood, making debugging and customization straightforward.
- **Transferable skills**: The core concepts (Grid, custom properties, IntersectionObserver) apply directly to framework-based projects.
- **AI-accelerated development**: Using Claude to generate and iterate on code significantly reduced development time. Complex features such as the theming system, scroll-reveal animations, and form validation were produced and refined through natural language prompts, allowing focus to shift toward design decisions and learning outcomes rather than syntax. This demonstrates how AI tools can lower the barrier to building polished, production-quality web interfaces even without prior front-end expertise.

### Challenges

- **No contact form backend**: The form currently simulates submission without actually sending an email. Integrating a real backend (e.g., Formspree, EmailJS, or a Node.js server) would be required for production use.
- **Manual theming**: Every new UI element added must be wired into both theme variable blocks in the CSS to ensure consistency.
- **No component reuse**: Vanilla HTML has no component system, so repeating structures (like project cards) must be manually duplicated in HTML. A templating engine or framework would solve this at scale.
- **Image optimization**: Images are served as-is with no compression or lazy loading pipeline, which can affect performance on slower connections.
