import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "../schemas";

const Form = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      //code to handle on submit
    },
  });

  return (
    <>
      <div className=".body">
        <div class="form-container">
          <h2>Registration Form</h2>
          <form onSubmit={formik.handleSubmit}>
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched ? (
              <p>{formik.errors.username}</p>
            ) : null}

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
