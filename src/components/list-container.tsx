"use client";

import { useGetTodosQuery } from "@/hooks/queries/use-get-todos-query";
import ListCard from "./list-card";
import { useState } from "react";

const ListContainer = () => {
  const { data: todos } = useGetTodosQuery();
  const [isFiltered, setIsFiltered] = useState(true);
  const filteredTodos = todos.filter((todo) => !todo.completed);
  const todoList = isFiltered ? todos : filteredTodos;

  return (
    <div>
      <label htmlFor="showCompleted">완료된 항목 보기</label>
      <input
        type="checkbox"
        checked={isFiltered}
        onChange={() => setIsFiltered(!isFiltered)}
        id="showCompleted"
      />
      {todoList.map((todo) => (
        <ListCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListContainer;
