import { Todo } from "@/types/todo.type";

const BASE_URL = "https://stupendous-shadow-bandicoot.glitch.me";

export const getTodoList = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
  return res.json();
};

export const addTodo = async (todo: { title: string }) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("데이터를 추가하지 못했습니다.");
  }
  return res.json();
};

export const updateTodo = async (todo: Todo) => {
  const res = await fetch(`${BASE_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("데이터를 수정하지 못했습니다.");
  }
  return res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("데이터를 삭제하지 못했습니다.");
  }
  return res.json();
};
