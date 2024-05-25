import * as Yup from "yup";
export const registrationSchema = Yup.object({
  username: Yup.string().min(4).max(25).required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().min(6).required("Please entter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "please enter the correct password"),
});
