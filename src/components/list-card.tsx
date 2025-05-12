"use client";

import { useUpdateTodoMutation } from "@/hooks/mutations/use-todo-mutation";
import { TodoProps } from "@/types/todo.type";
import EditButton from "./edit-button";

const ListCard = ({ todo }: TodoProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleChange = () => {
    updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      <div>{todo.title}</div>
      <EditButton todo={todo} />
    </div>
  );
};

export default ListCard;
