import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Todo, TodoState } from "../../interface";

export const toggleTodo = createAsyncThunk<
  Todo,
  number,
  { state: { todo: TodoState } }
>("todo/toggleTodo", async (id, { getState }) => {
  const state = getState();
  const todo = state.todo.todos.find((t) => t.id === id);
  if (!todo) throw new Error("Todo not found");

  const res = await axios.patch(`http://localhost:3000/todos/${id}`, {
    completed: !todo.completed,
  });

  return res.data;
});
