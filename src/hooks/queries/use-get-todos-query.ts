import { getTodoList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });
};
