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
    <div>
      <input
        type="text"
        placeholder="할일을 추가하세요"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <div onClick={handleClick}>추가</div>
    </div>
  );
};

export default AddInput;
