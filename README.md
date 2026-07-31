# From Evidence to Impact

An accessible, interactive Inquiry Cycle toolkit designed for school leaders moving from collaborative learning to independent, evidence-informed improvement.

## Features

- Five complete inquiry-cycle phases
- Reading CLC examples embedded throughout
- Reflection journal saved locally in the browser
- Readiness checklists and phase progress tracking
- Next-cycle planning page
- Leadership toolkit placeholders
- High-contrast and adjustable text settings
- Keyboard-accessible navigation and visible focus states
- Responsive mobile, tablet and desktop layout
- Print / save-to-PDF support
- Automatic GitHub Pages deployment workflow

## Run locally

1. Install [Node.js](https://nodejs.org/) version 22 or later.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Deploy with GitHub Pages

1. Upload all files in this project to the **root** of your GitHub repository.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and allow the “Deploy to GitHub Pages” workflow to finish.
6. GitHub will display the public website address in the deployment summary and Pages settings.

The included `.github/workflows/deploy.yml` file builds and publishes the site automatically whenever the `main` branch is updated.

## Update resource links

The Toolkit buttons are intentionally disabled until the final resource URLs are known. Edit the `tools` section in `src/main.jsx`, then replace each placeholder button with a link or download.

## Privacy

Reflections, checklist selections and progress are stored only in the visitor's browser using `localStorage`. The website has no database, login or analytics and sends no personal information to a server.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx
    └── styles.css
```

## Accessibility notes

The project includes semantic headings, a skip link, keyboard-accessible controls, visible focus indicators, responsive text, reduced-motion support and print formatting. A final accessibility review should be completed after adding departmental logos, images, documents or external embeds.
