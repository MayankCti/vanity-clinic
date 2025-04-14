import { API_REQUEST } from ".";
import {
  changePasswordAPI,
  forgotPasswordAPI,
  loginAPI,
  profileAPI,
  profileUpdateAPI,
  signupAPI,
} from "../../routes/apiEndPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pipSetAccessToken } from "../../utils/pip";

// auth-register
export const authRegister = createAsyncThunk("auth-register", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: signupAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});


// auth-login
export const authLogin = createAsyncThunk("auth-login", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: loginAPI,
      method: "POST",
      data: payload,
      isErrorToast: true,
    });
    pipSetAccessToken(response?.data);
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

// auth-forgot-password
export const authForgotPassword = createAsyncThunk(
  "auth-forgot-password",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: forgotPasswordAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

// fetch-profile
export const fetchProfile = createAsyncThunk("fetch-profile", async () => {
  try {
    const response = await API_REQUEST({
      url: profileAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// auth-change-password
export const changePassword = createAsyncThunk(
  "auth-change-password",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: changePasswordAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);
