# AI Tools Usage Report

## Tools Used & Use Cases

### Claude (Anthropic)

**Used for:** Code generation, iterative refinement, and documentation

Claude was used to generate and iteratively refine all code in this project, including:

- **HTML** — full page structure (navbar, hero, projects, contact, footer sections), semantic markup, accessibility attributes, and API integration markup
- **CSS** — layout using CSS Grid and Flexbox, dark/light theme system with CSS custom properties, responsive design for mobile and tablet, visual polish (hover effects, transitions, card styling), and filter button styles
- **JavaScript** — dark/light mode toggle with localStorage persistence, smooth scrolling, hamburger menu, contact form validation with multi-rule logic, scroll-reveal animations via IntersectionObserver, project category filter, EmailJS API integration, and GitHub API integration
- **Documentation** — technical documentation, README, and this AI usage report were all written with Claude's assistance

### ChatGPT (OpenAI)

**Used for:** Image generation

ChatGPT was used to generate the visual assets used in the portfolio, including the profile illustration displayed in the hero section and the project preview images for each project card.

---

## Benefits & Challenges

### Benefits

- **Accelerated development** — features that would typically take hours to research and implement (e.g., IntersectionObserver-based scroll reveal, EmailJS integration, GitHub API fetch) were produced in minutes through natural language prompts, freeing up time to focus on design decisions and learning.
- **Code quality guidance** — Claude consistently applied best practices such as passive scroll listeners, modular function structure, CSS custom properties for theming, and semantic HTML without being explicitly asked.
- **Iterative refinement** — the conversational nature of the tool made it easy to request incremental changes (adjust padding, swap a color, remove a section) without rewriting code manually each time.
- **Documentation support** — complex technical concepts were translated into clear, readable documentation suitable for both technical and non-technical readers.
- **Learning through output** — reading and understanding the generated code helped build familiarity with browser APIs, CSS architecture patterns, and JavaScript module structure.

### Challenges

- **Loss of manual intuition** — relying on AI for code generation means less practice writing code from scratch, which can slow the development of debugging instincts and deep syntax familiarity.
- **Verification responsibility** — AI-generated code must be reviewed carefully. Several iterations were needed to fix issues such as invisible borders on dark backgrounds, incorrect image filenames, and layout behavior at different screen sizes.
- **Context limitations** — over a long session, earlier decisions (such as removed sections or renamed files) sometimes needed to be re-stated for the AI to stay consistent.
- **No runtime awareness** — Claude cannot run the code or see the browser output, so visual issues (e.g., a border being invisible against a dark hero) required the user to observe the problem and describe it back.

---

## Learning Outcomes

Working alongside AI tools throughout this project provided the following learning experiences:

- **Prompt engineering** — learning how to describe UI behavior, layout goals, and code changes precisely enough for the AI to produce useful output on the first or second attempt.
- **Code review skills** — evaluating AI-generated code for correctness, security, and style developed a stronger sense of what good code looks like.
- **Understanding APIs** — integrating EmailJS and the GitHub REST API with AI guidance provided a practical introduction to working with third-party services, authentication keys, and async JavaScript.
- **CSS architecture** — observing how Claude structured the stylesheet (variables, layout, components, responsive breakpoints as separate sections) demonstrated a scalable approach to organizing CSS.
- **State management concepts** — implementing theme persistence, filter state, and form submission state through AI collaboration made these concepts concrete and transferable to future projects.
- **Documentation writing** — producing technical documentation with AI assistance highlighted what information is truly necessary to communicate in technical writing versus what can be assumed.

---

## Responsible Use & Modifications

### How AI output was used responsibly

- All AI-generated code was reviewed before being applied to the project. Changes that produced unexpected visual results were identified by the user and corrected through follow-up prompts.
- Credentials (EmailJS public key, service ID, template ID) were supplied by the user and are specific to a real account — the AI was not asked to generate or guess these values.
- The AI was instructed explicitly on what to remove, what to keep, and what style to follow throughout the project, ensuring the output reflected deliberate design choices rather than defaults.

### Modifications made to AI output

- Several CSS values were adjusted after visual inspection — for example, border opacity and color were iterated multiple times until the button border was visible against the dark hero background.
- Image filenames generated by AI (e.g., `soccer.png`) were corrected to match the actual files on disk (`Soccer.png`, `TripMate.png`).
- The greeting-by-time-of-day feature generated by Claude was explicitly removed at the user's request as it did not fit the intended tone of the portfolio.
- Project descriptions, tags, and personal details (name, LinkedIn URL, GitHub username, email) were all provided or corrected by the user — the AI did not invent personal information.
- The filter button layout and grid sizing were adjusted iteratively based on user feedback about card sizing and visual alignment.
