import { message, message as toast } from "antd";
import moment from "moment";

// Currency Symbol
export const curSym = "$";

// Authorizationw
export const pipSetAccessToken = (token) => {
  if (!token) return;
  localStorage.setItem("access-token", token);
};
export const pipGetAccessToken = () => {
  return localStorage.getItem("access-token");
};
export const clearAuth = () => {
  localStorage.removeItem("access-token");
  localStorage.removeItem("users_data");
  message.success("Successfully logged out");
  window.location.reload()
};

// Profile
export const pipSaveProfile = (profile) => {
  if (!profile) return;
  else localStorage.setItem("users_data", JSON.stringify(profile));
};

export const pipGetProfile = () => {
  const profile = localStorage.getItem("users_data");
  return profile ? JSON.parse(profile) : {};
};

// Date View Format
export const pipViewDate = (date) => {
  if (!date) return;
  return moment(date).format("DD-MM-YYYY");
};

// Message Handlers
export const pipSuccessMessage = (message) => {
  if (!message) return;
  return toast.success(message);
};

export const pipErrorMessage = (message) => {
  if (!message) return;
  return toast.error(message);
};

export const getSubstring = (str, len, appendStr = "...") => {
  if(!str) return "";
  if (str?.length <= len) return str;
  return str?.substring(0, len) + appendStr;
};