import axios from "axios";
import { get } from "lodash";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    let conf = {
        ...config,
        headers: {
            ...config.headers,
            'Content-Type': config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/json',
        }
    }

    return conf;
})

api.interceptors.response.use(response => {
    return response;
}, (error) => {
    if (get(error, "response.status", false) === 401) {
        if(get(error, "config.url") !== "/profile"){
            window.location.href = import.meta.env.PUBLIC_URL || "/sign-in?redirect=" + window.location.pathname;
        }
    }
    return Promise.reject(error);
})

export default api;