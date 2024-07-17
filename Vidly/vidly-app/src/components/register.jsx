import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().email({ message: "'Username' must be a vaild email" }),
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-25 mx-auto">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            {...register("username")}
            id="username"
            type="text"
            className="form-control"
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
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
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
