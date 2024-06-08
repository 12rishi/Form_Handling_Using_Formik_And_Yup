import React from "react";
import { useFormik } from "formik";
import { validateRegistration } from "../schema";

const Form = () => {
  const initialValues = {
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validateRegistration,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm();
    },
  });

  return (
    <>
      <div class="body">
        <div class="container">
          <h2>Register</h2>
          <form onSubmit={formik.handleSubmit}>
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.username && formik.touched.username ? (
              <p>{formik.errors.username}</p>
            ) : null}

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : null}

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
            <label for="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              autoComplete="off"
              value={formik.values.confirm_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.confirm_password &&
            formik.touched.confirm_password ? (
              <p>{formik.errors.confirm_password}</p>
            ) : null}

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
