import { createSlice } from "@reduxjs/toolkit";
import type { TodoState } from "../interface";
import { fetchTodos, createTodo, toggleTodo, removeTodo } from "./utils";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: "",
};

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load todos";
      })

      //createTodo
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create todo";
      })

      //toggleTodo
      .addCase(toggleTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to toggle todo";
      })

      //removeTodo
      .addCase(removeTodo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to remove todo";
      });
  },
});

export default toDoSlice;
