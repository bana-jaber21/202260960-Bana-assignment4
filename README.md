# Bana Jaber — Personal Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. It showcases my projects, skills, and contact information with a clean, responsive design and dark/light theme support.

## Features

- Responsive layout (desktop, tablet, mobile)
- Dark / light theme toggle with localStorage persistence
- Smooth scrolling navigation
- Project cards with hover effects and category filtering
- Contact form with real email delivery via EmailJS
- Scroll-reveal animations

## Project Structure

```
assignment-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── animated_pic.png
│       ├── Soccer.png
│       ├── TripMate.png
│       └── sentiment.png
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## Setup Instructions

No build tools or dependencies are required. The project runs entirely in the browser.

**Option 1 — Open directly**

1. Download or clone the repository.
2. Open `index.html` in any modern web browser.

**Option 2 — Run with a local server (recommended)**

Using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code:

1. Open the project folder in VS Code.
2. Right-click `index.html` and select **Open with Live Server**.
3. The portfolio will open at `http://127.0.0.1:5500`.

## API Integration

Two external APIs are integrated into the portfolio:

### EmailJS
The contact form uses the [EmailJS](https://www.emailjs.com) API to send real emails directly from the browser without a backend server. When a visitor submits the form, EmailJS forwards the message to the portfolio owner's inbox. No server-side code is required.

### GitHub API
The GitHub REST API is used to dynamically fetch the TripMate repository URL. On page load, the API is queried for all public repositories under the account, and the matching repo link is automatically applied to the TripMate project card's GitHub button — no hardcoded URL needed.

## Complex Logic

The portfolio implements the following multi-step logic features:

### Project Category Filter
Project cards can be filtered by category using the **All / Web / ML** buttons above the projects section. The filter logic:
- Tracks which filter is currently active
- Shows or hides cards by comparing each card's `data-category` attribute against the selected filter
- Updates the active button state visually on each click

### Contact Form Validation
The contact form enforces multiple validation rules before allowing submission:
- All three fields (Name, Email, Message) must be non-empty
- The email field must match a valid email format (checked with regex)
- Errors appear per field on blur and clear live as the user corrects their input
- The submit button is disabled during sending to prevent duplicate submissions
- On success, a confirmation message is shown and the form resets after 4 seconds
- On failure, the button re-enables and an error message prompts the user to try again

## State Management

The portfolio manages the following application states:

### Theme State
- The active theme (dark or light) is stored in `localStorage` under the key `theme`
- On every page load, the saved theme is read and applied before the page renders, preventing a flash of the wrong theme
- The toggle button icon updates in sync with the current theme (🌙 / ☀️)
- Default is **dark mode** if no preference has been saved

### Filter State
- The active filter category is tracked in the DOM via the `.active` class on the selected filter button
- All project cards maintain a `data-category` attribute (`web` or `ml`) that is compared against the active filter on each click
- The filter resets to "All" on page reload

### Form Submission State
- The submit button is disabled and its label changed to "Sending…" during the API call to prevent duplicate requests
- After a successful send, the button shows "Sent!" and re-enables after 4 seconds
- After a failed send, the button immediately re-enables with its original label

## Performance

The following practices were applied to keep the site fast and efficient:

- **`IntersectionObserver` for scroll events** — used instead of listening to the scroll event on every frame, reducing CPU usage for scroll-reveal animations and navbar state changes
- **Passive scroll listeners** — the navbar scroll handler uses `{ passive: true }` to avoid blocking the browser's rendering thread
- **CSS custom properties** — a single set of variables drives the entire theme system, avoiding repeated hardcoded values throughout the stylesheet
- **No frameworks or build tools** — zero dependency overhead; the browser loads only what is needed
- **Unused CSS removed** — cleaned up unreferenced selectors (`.hero-badge`, `.badge-dot`, `@keyframes pulse-dot`, `.btn-cta`) to reduce stylesheet size
- **Unused assets removed** — `blog.png` was deleted after its project card was removed

## User Guide

### Navigating the Page

The **navigation bar** is fixed at the top of the screen and is always accessible while scrolling. It contains three links:

- **About Me** — scrolls back to the top hero section where the name and introduction are displayed.
- **Projects** — jumps to the projects section to view completed and in-progress work.
- **Contact** — scrolls to the contact form at the bottom of the page.

Clicking any of these links triggers a smooth scroll animation rather than an instant jump, making it easier to track where you are on the page.

### Switching Between Dark and Light Mode

The **theme toggle button** is located on the right side of the navbar. It is represented by a moon (🌙) icon in light mode and a sun (☀️) icon in dark mode.

- Click the button once to switch to the opposite theme.
- The selected theme is saved automatically and will be remembered the next time the page is opened.
- The default theme is **dark mode**.

### Filtering Projects

Above the project cards, three filter buttons allow you to narrow down projects by category:

- **All** — shows every project.
- **Web** — shows only web development projects (Soccer@KFUPM, TripMate).
- **ML** — shows only machine learning projects (Sentiment Analysis, Laptop Price Prediction).

The active filter is highlighted in accent color. Clicking a new filter instantly updates which cards are visible.

### Browsing Projects

Each **project card** displays:
- A preview image of the project.
- The project title and a short description.
- Tech stack tags showing the languages and tools used.
- A **GitHub** button that links to the project's source code repository.

Hovering over a project card lifts it slightly and deepens its shadow, indicating it is interactive.

### Using the Contact Form

The contact form sends a real email using EmailJS. To use it:

1. Enter your **full name** in the Name field.
2. Enter a valid **email address** in the Email field — the format is checked automatically.
3. Write your **message** in the Message text area.
4. Click **Send Message** to submit.

**Validation behavior:**
- If a required field is left empty or the email is in an invalid format, an error message appears below the relevant field.
- Errors are shown when you move away from a field and clear automatically as you correct the input.
- On successful submission, the button changes to "Sent!" and a confirmation message appears. The form resets after 4 seconds.

### Mobile Navigation

On screens smaller than 600px wide, the navigation links are hidden and replaced with a **hamburger menu** (☰) button in the top-right corner.

- Tap the hamburger icon to open the menu.
- Tap any navigation link to scroll to that section — the menu closes automatically.
- Tapping anywhere outside the menu also closes it.
