import axios from "axios";
import { message as toast } from "antd";
import { BASE_URL } from "../../routes/apiEndPoints";
import { pageRoutes } from "../../routes/pageRoutes";
import { clearAuth, pipGetAccessToken } from "../../utils/pip";

export const API_REQUEST = async (props) => {
  const {
    url,
    method,
    data,
    headers,
    params,
    isErrorToast = true,
    isSuccessToast = true,
  } = props;
  const token = pipGetAccessToken();

  const requestOptions = {
    url: BASE_URL + url,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    params: method === "GET" ? params : undefined,
    data: method !== "GET" ? data : undefined,
  };
  try {
    const response = await axios(requestOptions);
    if (isSuccessToast) {
      if (method !== "GET" && response?.data?.success == true) {
        toast.success(response?.data?.message);
      } else if (response?.data?.success == false && method !== "GET") {
        toast.error(response?.data?.message);
      }
    }
    return response?.data;
  } catch (error) {
    if (isErrorToast) {
      if (error.response) {
        if (error?.response?.data?.status == 401) {
          toast.error(error?.response?.data?.message);
          clearAuth();
          window.location.href =  pageRoutes.login;
          return;
        }
        toast.error(error?.response?.data?.message);
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("Error:", error.message);
      }
    }
    throw error.response;
  }
};
