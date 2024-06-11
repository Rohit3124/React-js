import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-25 mx-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            {...register("username", { required: true, minLength: 4 })}
            id="username"
            type="text"
            className="form-control"
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">The username filed is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">
              The username must be at least 4 charracters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
