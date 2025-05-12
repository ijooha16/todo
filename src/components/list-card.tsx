"use client";

import { useUpdateTodoMutation } from "@/hooks/mutations/use-todo-mutation";
import { Todo } from "@/types/todo.type";

const ListCard = ({ todo }: { todo: Todo }) => {
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
    </div>
  );
};

export default ListCard;
