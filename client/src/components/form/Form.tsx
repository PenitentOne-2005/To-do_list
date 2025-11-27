import { memo, type FC } from "react";
import type { FormProps, FormValues } from "./interface";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

const Form: FC<FormProps> = memo(({ dispatch, createTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "" },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.title.trim()) return;

    dispatch(
      createTodo({
        title: data.title,
        completed: false,
      })
    );

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${errors.title ? styles.inputError : ""}`}
          type="text"
          placeholder="Enter todo"
          {...register("title", {
            required: "Поле обязательно для заполнения",
          })}
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>

      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
});

export default Form;
