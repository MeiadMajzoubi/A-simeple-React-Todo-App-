import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
  handleEditTodo: (todo: Todo) => void;
};

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleToggleTodo,
  handleEditTodo,
}: TodoListProps) => { 
  return (
    <ul className=" w-full flex flex-col gap-3" >
      {todos.map((todo) => ( //TodoItem Logic
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
