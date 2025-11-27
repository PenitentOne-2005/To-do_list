import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const selectTodo = (state: RootState) => state.todo;

export const selectTodoState = createSelector([selectTodo], (todo) => ({
  todos: todo.todos,
  loading: todo.loading,
  error: todo.error,
}));
