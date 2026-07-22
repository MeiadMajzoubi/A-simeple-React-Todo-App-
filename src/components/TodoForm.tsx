import type React from "react";
import { Plus, Check } from "lucide-react";

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
    // It's not related to TodoItem, It's for Todo Form(inputes)
    <form onSubmit={handleAddTodo} className="flex gap-3 w-full">
      <input
        type="text"
        className="flex-1 p-2 bg-transparent border rounded-4xl border-gray-400 placeholder-gray-400 focus:outline-none focus:border-black"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-white font-medium rounded-base text-sm  text-center">
        {isEditing ? <Check /> : <Plus />}
      </button>
    </form>
  );
};

export default TodoForm;
