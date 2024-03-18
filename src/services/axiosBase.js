import { message } from "antd";
import axios from "axios";

 const handleBaseAxiosError = (err) => {
  if (err?.response?.status === 403) {
    message.error("Bạn cần liên hệ AD để lấy thông tin đối tượng này.");
  } else {
    message.error(err?.response?.data?.value?.message)
    if (err?.response?.status === 401) {
      // socket.disconnect()
    }
  }

  return Promise.reject(err)
}
  const auth = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user') || '{}') : null;
const TOKEN= auth&& auth?.jwt?.token
export const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT_API,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json"
  },
  timeout:6000
})

baseAxios.interceptors.request.use(
  (config) => {
    if (config.data) {
      const haveFile = Object.values(config.data).some(
        (e) => e && e.toString() === '[object File]'
      )
      if (haveFile) {
        config.headers['Content-Type'] = 'multipart/form-data ; charset=UTF-8'
      }
    }

    return config
  },
  (error) => Promise.reject(error)
);
baseAxios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  handleBaseAxiosError
)

export const APIClient = {
  get: async (path, params) => {
    return await baseAxios.get(path, { params });
  },
  post: async (path, data) => {
    return await baseAxios.post(path, data);
  },
  put: async (path, data,config) => {
    return await baseAxios.put(path, data,config);
  },
  patch: async (path, data, config) => {
    return await baseAxios.patch(path, data, config);
  },
  delete: async (path, data) => {
    return await baseAxios.delete(path, data);
  },
  postFile: (url, data, config) => {
    return baseAxios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      ...config
    });
  }
};

