"use client";

import { useAddTodoMutation } from "@/hooks/mutations/use-todo-mutation";
import { useState } from "react";

const AddInput = () => {
  const { mutate: addTodo } = useAddTodoMutation();
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    if (!todo) return;
    addTodo({ id: Date.now().toString(), title: todo, completed: false });
    setTodo("");
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="할일을 추가하세요"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="bg-white border-2 border-gray-800 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
      />
      <div onClick={handleClick} className="bg-gray-800 rounded-2xl px-4 py-2 hover:bg-gray-700 cursor-pointer">추가</div>
    </div>
  );
};

export default AddInput;
