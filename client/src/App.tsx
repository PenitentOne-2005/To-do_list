import { useEffect, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";
import { fetchTodos, createTodo, selectTodoState } from "./slice";
import { Form, TodoList } from "./components";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector(selectTodoState);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Form dispatch={dispatch} createTodo={createTodo} />

      {todos.length !== 0 ? <TodoList todos={todos} /> : <p>Empty list</p>}
    </>
  );
};

export default App;
