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
  return ( // It's not related to TodoItem, It's for Todo Form(inputes)
    <form onSubmit={handleAddTodo} className="flex gap-3 w-full" >
      <input
        type="text"
        className="flex-1 p-2 bg-transparent border rounded-4xl border-gray-400 placeholder-gray-400 focus:outline-none focus:border-black"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ml-5  bg-green-600 hover:bg-green-700 text-white  py-1.5 px-5 rounded-full ">{isEditing ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
