# Ledger — Task Management App

A clean, ledger-inspired task management app built with React and Vite. Add, edit,
complete, and delete tasks in a simple interface styled after a paper daily ledger,
with a hand-stamped "Done" mark for completed entries.

## Features

- **Add a task** — write a new entry and add it to the ledger.
- **Edit a task** — update the wording of an existing entry in place.
- **Delete a task** — remove an entry you no longer need.
- **Mark complete / pending** — toggle a task's status with a single click.
- **Empty-task guard** — blank or whitespace-only entries are rejected with an inline message.
- **Empty-list message** — a friendly "the ledger is empty" state when there are no tasks.
- **Live totals** — a stats bar shows total, completed, and pending counts.
- **Persistence** — tasks are saved to `localStorage` and survive a page refresh.

## Technologies used

- [React 18](https://react.dev/) — functional components and hooks (`useState`, `useEffect`)
- [Vite](https://vitejs.dev/) — dev server and build tool
- Plain CSS (no UI framework) — custom design system defined with CSS variables
- Browser `localStorage` API for persistence

## Folder structure

```
task-management-app/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx     # input for creating a new task, with validation
│   │   ├── TaskList.jsx     # renders the list of tasks or an empty state
│   │   └── TaskItem.jsx     # a single task row: toggle, inline edit, delete
│   │
│   ├── App.jsx              # top-level state, localStorage sync, stats
│   ├── App.css               # design system and component styles
│   └── main.jsx              # React entry point
│
├── README.md
├── PROMPTS.md
├── MANUAL_CHANGES.md
├── package.json
├── vite.config.js
└── index.html
```

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) 18+ installed.
2. Clone or download this folder.
3. Install dependencies:

   ```bash
   npm install
   ```

## Running the project

Start the development server:

```bash
npm run dev
```

Then open the URL Vite prints in your terminal (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## AI assistance summary

This project was built with the help of an AI coding assistant, which generated the
initial component structure, state logic, and styling based on the assignment
requirements. The prompts used to guide that process are listed in `PROMPTS.md`, and
the manual review and adjustments made afterward are listed in `MANUAL_CHANGES.md`.
In short: the AI produced a working first draft of each file, and a human reviewed,
tested, and refined the result — tightening validation, adjusting spacing and
responsiveness, and making sure the persistence logic behaved correctly on refresh.
