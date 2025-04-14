import * as Yup from "yup";

// Common Email Validation Rule
const emailValidation = Yup.string()
  .trim()
  .email("Please enter a valid email")
  .required("Please enter email")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
    "Please enter a valid email"
  );

// Common Password Validation Rule
const passwordValidation = Yup.string()
  .required("Please enter password")
  .min(8, "Password cannot be less than 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
    "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
  );

// Sign Up Schema
export const signUpSchema = Yup.object().shape({
  first_name: Yup.string().trim().required("Please enter first name"),
  last_name: Yup.string().trim().required("Please enter last name"),
  mobile_number: Yup.string(),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .required("Please enter confirm password")
    .oneOf([Yup.ref("password"), null], "Your password must match"),
});

// Sign In Schema
export const signInSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

// Forgot Password Schema
export const forgotPasswordSchema = Yup.object().shape({
  email: emailValidation,
});

// Change Password Schema
export const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Please enter your current password")
    .min(8, "Current password cannot be less than 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Please enter a valid password"
    ),
  newPassword: passwordValidation,
  confirmPassword: Yup.string()
    .required("Please enter confirm password")
    .oneOf([Yup.ref("newPassword"), null], "Your password must match"),
});
