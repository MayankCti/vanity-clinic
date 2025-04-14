import { createSlice } from "@reduxjs/toolkit";
import {
  authForgotPassword,
  authLogin,
  authRegister,
  changePassword,
  fetchProfile,
} from "../action/authAction";
import { pipSaveProfile } from "../../utils/pip";

const initialState = {
  isLoading: false,
  isToggle: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    toggleChange: (state, action) => {
      state.isToggle = action?.payload;
    },
  },
  extraReducers: (builder) => {
    // auth-register
    builder.addCase(authRegister.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-login
    builder.addCase(authLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-forgot-password
    builder.addCase(authForgotPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authForgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authForgotPassword.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-profile
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { data, success } = action?.payload ?? {};
      if (success) {
        pipSaveProfile(data ?? null);
      }
      state.isLoading = false;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-change-password
    builder.addCase(changePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { toggleChange } = authSlice.actions;
export default authSlice.reducer;
