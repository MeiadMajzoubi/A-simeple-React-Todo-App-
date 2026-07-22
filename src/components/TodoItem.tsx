import type { Todo } from "../types";
import { PenLine, Delete } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
  handleEditTodo: (todo: Todo) => void;
};

const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleToggleTodo,
  handleEditTodo,
}: TodoItemProps) => {
  return (
    //TodoItem Buttons & styling
    <li
      key={todo.id}
      className="flex items-center  justify-between  gap-4 mt-3  w-full"
    >
      <span
        onClick={() => handleToggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <div className=" flex items-center  gap-3 ">
        <button
          type="button"
          onClick={() => handleEditTodo(todo)}
          className="w-10 text-white h-10 rounded-full flex items-center justify-center  bg-gradient-to-r from-yellow-300 via-yellow-450 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-500 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 "
        >
          <PenLine />
        </button>
        <button
          type="button"
          onClick={() => handleDeleteTodo(todo.id)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-yellow-800/80 text-white"
        >
          <Delete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
