import { memo, type FC } from "react";
import { TodoItem } from "../index";
import type { TodoListProps } from "./interface";
import styles from "./TodoList.module.css";

const TodoList: FC<TodoListProps> = memo(({ todos }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;
