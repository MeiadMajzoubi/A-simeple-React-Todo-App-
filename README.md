# Todo App — React + TypeScript

A small CRUD Todo application built to practice combining **React** with **TypeScript**. The focus of this project was type safety, component composition, and state management fundamentals — not UI styling (no CSS/design has been applied yet).

## ✨ Features

- **Add** new todos via a controlled form
- **Edit** existing todos (form switches into "update" mode)
- **Toggle** a todo's completed state (click the text)
- **Delete** todos
- **Persistence** — todos are saved to and loaded from `localStorage`, so data survives page refreshes

## 🛠 Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) as the build tool

## 📂 Project Structure

```
src/
├── components/
│   ├── TodoForm.tsx   # Controlled input + submit button (add/update)
│   ├── TodoItem.tsx   # Single todo row (toggle/edit/delete)
│   └── TodoList.tsx   # Renders a list of TodoItem components
├── types.ts           # Shared Todo interface
├── App.tsx            # App state, handlers, localStorage sync
├── main.tsx           # React entry point
├── App.css
└── index.css
```

## 🧠 What I Practiced

This project was built specifically to get comfortable typing real React patterns, including:

- Defining shared types with an `interface` (`Todo`) and importing them across components
- Typing component props with `type` aliases (`TodoFormProps`, `TodoItemProps`, `TodoListProps`)
- Typing state with generics: `useState<Todo[]>(...)`
- Typing event handlers: `React.FormEvent`, `React.Dispatch<React.SetStateAction<string>>`
- Typing callback props passed down through multiple component layers (`TodoList` → `TodoItem`)
- Syncing state to `localStorage` with `useEffect`
- Basic CRUD state updates using array methods (`map`, `filter`) in an immutable style

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/MeiadMajzoubi/A-simple-React-Todo-App-.git
cd A-simple-React-Todo-App

# Install dependencies
npm install

# Run the dev server
npm run dev
```


## 📄 License

Apache License 2.0
