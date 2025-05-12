"use client";

import { useGetTodosQuery } from "@/hooks/queries/use-get-todos-query";
import ListCard from "./list-card";

const ListContainer = () => {
  const { data: todos } = useGetTodosQuery();
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <ListCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListContainer;
