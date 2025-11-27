import { memo, type FC } from "react";
import type { TodoItemProps } from "./interface";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../slice";
import type { AppDispatch } from "../../store";
import styles from "./TodoItem.module.css";

const TodoItem: FC<TodoItemProps> = memo(({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className={styles.todoItem} key={todo.id}>
      <p className={`${styles.text} ${todo.completed ? styles.completed : ""}`}>
        {todo.title}
      </p>

      <div className={styles.blockButtons}>
        <button
          className={styles.buttonComplete}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          Complete
        </button>

        <button
          className={styles.buttonDelete}
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default TodoItem;
