import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Todo } from "../../interface";

export const createTodo = createAsyncThunk<Todo, Omit<Todo, "id">>(
  "todo/createTodo",
  async (todoData) => {
    const res = await axios.post("http://localhost:3000/todos", todoData);
    return res.data;
  }
);
