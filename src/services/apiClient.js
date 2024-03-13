import axios from "axios";
import qs from "qs";
import { createBrowserHistory } from "history";
const { REACT_APP_SERVER_URL, TOKEN } = process.env;

const history = createBrowserHistory();

const instance = axios.create();

instance.interceptors.request.use((config) => {

    config.baseURL = process.env.REACT_APP_SERVER_URL;
    const authJson = localStorage.getItem("auth");
    if (authJson) {
        const auth = JSON.parse(authJson);
        config.headers.Authorization = `Bearer ${process.env.TOKEN}`;
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

export const apiClient = instance;

export default apiClient;