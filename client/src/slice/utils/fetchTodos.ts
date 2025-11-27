import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Todo } from "../../interface";

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todo/fetchTodos",
  async () => {
    const res = await axios.get("http://localhost:3000/todos");
    return res.data;
  }
);
