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
  return ( //TodoItem Buttons & styling 
    <li key={todo.id} className="flex items-center  justify-between  gap-4 mt-3  w-full" > 
      <span
        onClick={() => handleToggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <div className="flex gap-3 shrink-0" >
        <button type="button" onClick={() => handleEditTodo(todo)} className=" gap-3  bg-yellow-500 hover:bg-yellow-600 text-white  py-0.5 px-4 rounded-full" >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteTodo(todo.id)} className=" bg-red-500 hover:bg-red-600 text-white  py-0.5 px-4 rounded-full" >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
