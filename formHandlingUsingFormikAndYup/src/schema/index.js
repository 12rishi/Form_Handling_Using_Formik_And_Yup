import * as Yup from "yup";
export const validateRegistration = Yup.object({
  username: Yup.string().max(25).min(4).required("Please Enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "password must contains at least 8 charcaters,one uppercase,one lowercase,one number and one special character"
    )
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("confirm password is required"),
});
