import * as React from "react";
import { useState, useEffect } from "react";
import type { Todo } from "./types";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (isEditing) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editingId) {
            return {
              ...todo,
              text,
            };
          }
          return todo;
        }),
      );
      setText("");
      setEditingId(null);
      setIsEditing(false);
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    );
  };

  const handleEditTodo = (todo: Todo) => {
    setText(todo.text);
    setEditingId(todo.id);
    setIsEditing(true);
  };

  return (
    <div className=" font-zilla bg-gray-100 min-h-screen flex flex-col items-center py-20 px-4  ">
      <div className=" w-full max-w-[380px] sm:max-w-[448px] md:max-w-[512px] lg:max-w-[600px] mx-auto flex flex-col gap-8 p-4 sm:p-6">
        <h1 className=" font-racing text-4xl font-semibold text-black text-center mb-10 ">
          Todo App
        </h1>

        <TodoForm
          text={text}
          setText={setText}
          handleAddTodo={handleAddTodo}
          isEditing={isEditing}
        />

        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
