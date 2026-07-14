# Todo App — React + TypeScript + Vite

A simple, clean Todo CRUD application built as a practice project to learn React, TypeScript, and component-driven architecture. Tasks persist locally using `localStorage`, and the UI is styled with Tailwind CSS.

## Features

- ✅ Create, edit, and delete todos
- 💾 Persistent storage via `localStorage`
- 🎨 Styled with Tailwind CSS

## Tech Stack

- **React** — UI library
- **TypeScript** — static typing
- **Vite** — build tool / dev server
- **Tailwind CSS** — utility-first styling
- **ESLint** — code quality / linting

## Project Structure

```
src/
├── components/
│   ├── TodoForm.tsx    # Input field + Add button
│   ├── TodoItem.tsx    # Single todo row (Edit/Delete)
│   └── TodoList.tsx    # Renders list of TodoItems
├── App.tsx
└── main.tsx
```

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/MeiadMajzoubi/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## What I Learned

- Managing state with `useState` and `useEffect`, and syncing it with `localStorage`
- Passing and typing props across components with TypeScript
- Structuring a small React app into reusable, single-responsibility components

## Roadmap / Possible Improvements

- [ ] Add due dates / priority levels
- [ ] Add filtering (all / active / completed)
- [ ] Animate list transitions
- [ ] Migrate storage to a backend API

## Author

**Meiad Majzoubi**
GitHub: [@MeiadMajzoubi](https://github.com/MeiadMajzoubi)
