"use client";

import { useUpdateTodoMutation } from "@/hooks/mutations/use-todo-mutation";
import { TodoProps } from "@/types/todo.type";

const EditButton = ({ todo }: TodoProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleClick = () => {
    const newTitle = prompt("수정할 할일을 입력하세요", todo.title);
    if (newTitle !== todo.title) {
      updateTodo({
        ...todo,
        title: newTitle || todo.title,
      });
    }
  };

  return (
    <div onClick={handleClick} className="hover:text-gray-300 cursor-pointer">
      수정
    </div>
  );
};

export default EditButton;
