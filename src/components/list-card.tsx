"use client";

import { useUpdateTodoMutation } from "@/hooks/mutations/use-todo-mutation";
import { TodoProps } from "@/types/todo.type";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";

const ListCard = ({ todo }: TodoProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleChange = () => {
    updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 w-full border-b-1 border-gray-800 py-3">
      <div className="flex items-center gap-4 md:gap-6">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <div className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.title}
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 whitespace-nowrap text-gray-500">
        <EditButton todo={todo} />
        <DeleteButton id={todo.id} />
      </div>
    </div>
  );
};

export default ListCard;
