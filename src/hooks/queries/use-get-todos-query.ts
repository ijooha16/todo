import { QUERY_KEYS } from "@/constants/query-keys";
import { getTodoList } from "@/lib/api";
import { Todo } from "@/types/todo.type";
import { useQuery } from "@tanstack/react-query";

export const useGetTodosQuery = () => {
  return useQuery<Todo[]>({
    queryKey: QUERY_KEYS.TODOS,
    queryFn: getTodoList,
    initialData: [],
  });
};
