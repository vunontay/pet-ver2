import axios from "axios";
import { tokenService } from "./token-service";
import { APP_ROUTER } from "../utils/constant";

export const axiosConfig = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";

axiosConfig.interceptors.request.use(
    (config) => {
        const accessToken = tokenService().getLocalAccessToken();

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = tokenService().getLocalAccessToken();
            const response = await axios.post(APP_ROUTER.REFRESH_TOKEN, {
                refreshToken: refreshToken,
            });
            const accessToken = response.data.accessToken;
            tokenService().updateLocalAccessToken(accessToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axiosConfig(originalRequest);
        }
        return Promise.reject(error.response.data);
    }
);
