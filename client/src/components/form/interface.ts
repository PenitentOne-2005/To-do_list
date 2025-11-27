import type { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
import type { AppDispatch } from "../../store";
import type { Todo } from "../../interface";

export interface FormValues {
  title: string;
}

export interface FormProps {
  dispatch: AppDispatch;
  createTodo: AsyncThunk<Todo, Omit<Todo, "id">, AsyncThunkConfig>;
}
