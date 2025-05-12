const BASE_URL = "http://localhost:4000/todos";

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

export const updateTodo = async (id: number, todo: { title: string }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
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

export const deleteTodo = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("데이터를 삭제하지 못했습니다.");
  }
  return res.json();
};
