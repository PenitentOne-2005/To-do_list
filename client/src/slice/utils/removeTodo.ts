import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeTodo = createAsyncThunk<number, number>(
  "todo/removeTodo",
  async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);

    return id;
  }
);
