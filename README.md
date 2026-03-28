# Bana Jaber — Personal Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. It showcases my projects, skills, and contact information with a clean, responsive design and dark/light theme support.

## Features

- Responsive layout (desktop, tablet, mobile)
- Dark / light theme toggle with localStorage persistence
- Smooth scrolling navigation
- Project cards with hover effects
- Contact form with client-side validation
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
│       ├── Soccer.jpg
        ├── TripMate.jpg
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

### Browsing Projects

Each **project card** in the Projects section displays:
- A preview image of the project.
- The project title and a short description.
- Tech stack tags showing the languages and tools used.
- A **GitHub** button — clicking this will navigate to the project's source code repository (when a link has been added).

Hovering over a project card lifts it slightly and deepens its shadow, indicating it is interactive.

### Using the Contact Form

The contact form allows visitors to send a message directly from the page. To use it:

1. Enter your **full name** in the Name field.
2. Enter a valid **email address** in the Email field — the format is checked automatically.
3. Write your **message** in the Message text area.
4. Click **Send Message** to submit.

**Validation behavior:**
- If a required field is left empty or the email is in an invalid format, an error message appears below the relevant field.
- Errors are shown when you move away from a field and clear automatically as you correct the input.
- On successful submission, the button changes to "Sent!" and a confirmation message appears. The form resets after 4 seconds.

> Note: The form is currently front-end only and does not send a real email. Backend integration would be required for full functionality.

### Mobile Navigation

On screens smaller than 600px wide, the navigation links are hidden and replaced with a **hamburger menu** (☰) button in the top-right corner.

- Tap the hamburger icon to open the menu.
- Tap any navigation link to scroll to that section — the menu closes automatically.
- Tapping anywhere outside the menu also closes it.
