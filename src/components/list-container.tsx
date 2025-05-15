"use client";

import { useGetTodosQuery } from "@/hooks/queries/use-get-todos-query";
import ListCard from "./list-card";
import { useState } from "react";

const ListContainer = () => {
  const { data: todos, isLoading, isPending, isFetching } = useGetTodosQuery();
  const [isFiltered, setIsFiltered] = useState(true);
  const filteredTodos = todos.filter((todo) => !todo.completed);
  const todoList = isFiltered ? todos : filteredTodos;

  return (
    <div className="space-y-6 w-96 md:w-3xl">
      <label className="flex items-center gap-2">
        완료된 항목 보기
        <input
          type="checkbox"
          checked={isFiltered}
          onChange={() => setIsFiltered(!isFiltered)}
        />
      </label>
      {(isLoading || isPending || isFetching) && <div>데이터를 불러오고있어요!</div>}
      <div>
        {todoList.map((todo) => (
          <ListCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
