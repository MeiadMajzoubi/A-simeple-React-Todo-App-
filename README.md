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

````bash
# Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

   ```bash
   npm install
````

3. Run the dev server:

   ```bash
   npm run dev
   ```

## 📄 License

Apache License 2.0
