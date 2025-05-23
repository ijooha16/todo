import { QUERY_KEYS } from "@/constants/query-keys";
import { addTodo, deleteTodo, updateTodo } from "@/lib/api";
import { Todo } from "@/types/todo.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo>({
    mutationFn: (todo) => updateTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });
    },
    onError: (error) => console.log(error),
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, string>({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });
    },
    onError: (error) => console.log(error),
  });
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo>({
    mutationFn: (todo) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });
    },
    onError: (error) => console.log(error),
  });
};
