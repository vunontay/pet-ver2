import { APP_ROUTER } from "../utils/constant";
import { axiosConfig } from "./axios-config";

// api register
const apiRegister = async (data) => {
    const response = await axiosConfig.post(APP_ROUTER.REGISTER, data);
    return response;
};
// api login

const apiLogin = async (data) => {
    const response = await axiosConfig.post(APP_ROUTER.LOGIN, data);
    return response;
};

const apiGetUserById = (userId, accessToken) =>
    axiosConfig.get(`${APP_ROUTER.USER}/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

// api logout
const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    apiRegister,
    logout,
    apiLogin,
    apiGetUserById,
};
export default authService;
