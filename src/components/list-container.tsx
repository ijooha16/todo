"use client";

import { useGetTodosQuery } from "@/hooks/queries/use-get-todos-query";

const ListContainer = () => {
  const { data: todos } = useGetTodosQuery();

  return (
    <div>
      {todos.map((e) => {
        return <div key={e.id}>{e.title}</div>;
      })}
    </div>
  );
};

export default ListContainer;
