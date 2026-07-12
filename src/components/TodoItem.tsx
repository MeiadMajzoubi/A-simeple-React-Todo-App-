import type { Todo } from "../types";

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
    <li key={todo.id}>
      <span
        onClick={() => handleToggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button type="button" onClick={() => handleEditTodo(todo)}>
        Edit
      </button>
      <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
