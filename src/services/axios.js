import Axios from "axios";
import { ErrorToast } from "../utils/toast";

import URLS from "./urls";

const axios = Axios.create({
    baseURL: URLS.BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosConfigurator = (config) => {
    config.withCredentials = true;
    return config;
};

axios.interceptors.request.use(axiosConfigurator);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const errMsg = error?.response?.data?.msg || error?.response?.data?.error || error?.message;
        if (error.code === "ERR_NETWORK") {
            return Promise.reject(new Error("You are not connected to the internet."));
        }
        if (errMsg === "Authentication Invalid" || errMsg === "Unauthorized to access this route") {
            localStorage.removeItem("love-world_user");
            ErrorToast("Session expired. Please login again.");
            window.location.href = `/login?redirect=${window.location.pathname}`;
            return {};
        }
        if (errMsg) {
            ErrorToast(errMsg);
            return {};
        }
    },
);

export { axios };
