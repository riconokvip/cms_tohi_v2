/* eslint-disable no-undef */
import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const axiosBase = axios.create();

instance.interceptors.request.use((config) => {
  config.baseURL = process.env.REACT_APP_SERVER_URL;
  const authJson = localStorage.getItem("auth");
  if (authJson) {
    const auth = JSON.parse(authJson);
    config.headers.Authorization = `Bearer ${auth}`;
  }

  return config;
});

instance.interceptors.response.use((response) => {
  if (response.data.status === 401) {
    localStorage.removeItem("auth");
    history.replace({ pathname: "/login" });
  }

  return response;
});

export default axiosBase;
