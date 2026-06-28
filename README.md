# Portfolio

A personal portfolio website built with React and Vite.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view the site.

## Editing content

All personal content (name, bio, projects, awards, skills, etc.) lives in the **`content/`** folder as JSON files. You don't need to touch React code to update the site.

See **[content/CONTENT.md](content/CONTENT.md)** for a full guide on what to edit and how to add projects.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
content/           ← edit these JSON files
public/images/     ← portrait photo only
src/
  components/      ← layout and UI (styled with Tailwind CSS)
  pages/           ← page components
  lib/content.js   ← loads content (no need to edit)
```
