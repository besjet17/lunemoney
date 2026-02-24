# Lune Money Landing Page Deployment

This document describes how to build and publish the Lune Money landing page to the web. The landing page is built as a static site using React and Vite, which makes it extremely lightweight and easy to deploy on any static hosting provider.

## Building the Site

Before publishing, you need to generate the production-ready static files.

1. Navigate to the `landing-page` directory:
   ```bash
   cd landing-page
   ```

2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Publishing via Vercel

Lune Capital uses Vercel for deployment. Since the initial setup is already complete and tied to the GitHub repository, pushing updates to the live site is fully automated.

---

## Updating the Site Post-Deployment

Whenever you make changes to the source code (e.g., updating images in `assets/`, text in `App.jsx`, or styles in `index.css`), those changes **will not** appear automatically unless the site builds again.

Because you are using Vercel, this process is automated:
- Simply commit and push your changes to your `main` git branch. 
- Vercel will detect the push, automatically run the `npm run build` command, and seamlessly update the live site.
