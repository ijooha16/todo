"use client";

import { useDeleteTodoMutation } from "@/hooks/mutations/use-todo-mutation";

const DeleteButton = ({ id }: { id: string }) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const handleClick = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deleteTodo(id);
    }
  };

  return <div onClick={handleClick}>삭제</div>;
};

export default DeleteButton;
