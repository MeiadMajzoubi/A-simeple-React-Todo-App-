import type React from "react";

type TodoFormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>; 
  handleAddTodo: (e: React.FormEvent) => void; 
  isEditing: boolean;
};

const TodoForm = ({
  text,
  setText,
  handleAddTodo,
  isEditing,
}: TodoFormProps) => {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>{isEditing ? "Update" : "Add"}</button>  
    </form>
  );
};

export default TodoForm;
