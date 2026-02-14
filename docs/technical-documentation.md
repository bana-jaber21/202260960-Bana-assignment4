# Technical Documentation

## Overview

A personal portfolio website built with vanilla HTML, CSS, and JavaScript (no frameworks or build tools). The site is fully responsive across desktop, tablet, and mobile, and includes a dark/light theme toggle.

## Tech Stack

| Layer  | Technology                           |
|--------|--------------------------------------|
| HTML   | Semantic HTML5                       |
| CSS    | Custom properties, Grid, Flexbox     |
| JS     | Vanilla ES6+ (no libraries)         |

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
│       ├── Soccer.jpg          # Soccer@KFUPM project image
│       ├── TripMate.jpg        # TripMate project image
│       └── sentiment.png       # Sentiment Analysis project image
├── docs/
│   ├── ai-usage-report.md      # AI tools disclosure
│   └── technical-documentation.md
└── README.md
```

## HTML Structure (index.html)

The page is divided into four main sections:

1. **Navbar** — Fixed top navigation with brand logo, section links (About Me, Projects, Contact), a theme toggle button, and a hamburger menu for mobile.
2. **Hero** (`<header id="about">`) — Two-column CSS Grid layout with an introduction (name + description + CTA button) on the left and a profile illustration on the right.
3. **Projects** (`<section id="projects">`) — Three project cards in a CSS Grid row, each containing an image, title, tech tags, and a GitHub link.
4. **Contact** (`<section id="contact">`) — Two-column layout with contact info on the left and a validated form (Name, Email, Message) on the right.
5. **Footer** — Social links (GitHub, LinkedIn, Email) and copyright.

## CSS Architecture (css/styles.css)

### Theming

Two themes are defined using CSS custom properties:

- `:root` — light theme (default)
- `[data-theme="dark"]` — dark theme

The theme is toggled by setting the `data-theme` attribute on `<html>`. Variables include colors for background (`--bg`, `--bg-alt`), text (`--text`, `--text-muted`), accent (`--accent`), borders, card shadows, and hero-specific values (`--hero-bg`, `--hero-name`, `--hero-desc`, `--hero-glow`).

### Layout

- **Container**: `width: min(1100px, 92%)` with auto inline margins for centering.
- **Hero**: `grid-template-columns: 1fr 1fr` — equal two-column split. Uses `min-height: 100vh` to fill the viewport.
- **Projects**: `grid-template-columns: repeat(3, 1fr)` — three equal columns.
- **Contact**: `grid-template-columns: 1fr 1.4fr` — info column narrower than form column.

### Navbar Behavior

The navbar has two visual states:

1. **Default** (over the hero): dark semi-transparent background (`rgba(13,13,26,0.7)`) with light-colored links, using `backdrop-filter: blur(12px)`.
2. **Scrolled** (`.scrolled` class): switches to theme-aware colors (`var(--nav-bg)`) so it matches the rest of the page.

### Visual Effects

- **Hero glow**: A `::before` pseudo-element with `radial-gradient` creates a subtle glow behind the profile image.
- **Hero image shadow**: `filter: drop-shadow(0 0 40px rgba(108,99,255,0.25))`.
- **Project card hover**: `translateY(-8px)` lift with a deeper purple box shadow.
- **Project card accent**: `border-top: 3px solid var(--accent)` colored top border.
- **Scroll reveal**: Elements fade in with a `translateY(30px)` to `none` transition triggered by IntersectionObserver.

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤ 860px    | Hero switches to single column; image appears above text using `order` |
| ≤ 900px    | Contact grid stacks to single column |
| ≤ 600px    | Hamburger menu replaces nav links; project grid stacks to single column |

## JavaScript Features (js/script.js)

All features initialize on `DOMContentLoaded`. No external libraries are used.

### 1. Dark/Light Theme Toggle

- **Functions**: `initTheme()`, `applyTheme(theme)`, `initThemeToggle()`
- Reads saved preference from `localStorage`; falls back to `prefers-color-scheme` media query.
- Sets the `data-theme` attribute on `<html>` and persists the choice in `localStorage`.
- Updates the toggle button icon between sun and moon emoji.

### 2. Smooth Scrolling

- **Function**: `initSmoothScroll()`
- Attaches click handlers to all `a[href^="#"]` links.
- Calls `scrollIntoView({ behavior: 'smooth', block: 'start' })`.
- Closes the mobile menu if open after navigation.

### 3. Mobile Hamburger Menu

- **Function**: `initHamburger()`
- Toggles the `.open` class on `.nav-links` to show/hide the menu.
- Closes the menu when clicking outside of it.

### 4. Contact Form Validation

- **Function**: `initContactForm()`
- Client-side only (no backend).
- Validates required fields on `blur` and clears errors on `input`.
- Email validated with regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- On submit, simulates an async send with a 1-second delay, shows a success message for 4 seconds, then resets the form.

### 5. Scroll-Reveal Animations

- **Function**: `initScrollReveal()`
- Uses `IntersectionObserver` with a `threshold` of `0.12`.
- Adds a `.reveal` class (opacity: 0, translateY: 30px) to project cards and the contact grid.
- When elements enter the viewport, adds `.visible` (opacity: 1, transform: none) and stops observing.

### 6. Navbar Scroll State

- **Function**: `initNavScroll()`
- Listens for the `scroll` event (passive) and toggles `.scrolled` on the navbar when `scrollY` exceeds the hero section height minus 80px.

## Design Decisions

- **No frameworks**: Vanilla HTML/CSS/JS keeps the project lightweight with zero dependencies.
- **CSS custom properties for theming**: Allows a single `data-theme` attribute to switch all colors across the entire page instantly.
- **`IntersectionObserver` over scroll events**: More performant for scroll-reveal and navbar state changes.
- **`localStorage` for theme persistence**: Ensures the user's theme choice survives page reloads without a backend.
- **Mobile-first responsive adjustments**: Grid layouts collapse gracefully using media queries, and CSS `order` is used to reposition the hero image above text on small screens.
