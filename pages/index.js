import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function Home() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const password = useRef();
  password.current = watch("password");

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This email field is required</p>}

      <label>Name</label>
      <input
        name="name"
        type="text"
        autoComplete="off"
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && (
        <p>This name field is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>Your input exceed maximum length</p>
      )}

      <label>Password</label>
      <input
        name="password"
        type="password"
        autoComplete="new-password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This password field is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>Password must have at least 6 characters</p>
      )}

      <label>Confirm</label>
      <input
        name="password_confirm"
        type="password"
        autoComplete="new-password"
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <p>This password_confirm field is required</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>The passwords do not match</p>
        )}

      <input type="submit" value="submit" />
    </form>
  );
}
