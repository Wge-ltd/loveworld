import { useMutation } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.LOGIN, data);
            return response.data;
        },
    });
};

export const useRegisterMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.REGISTER, data);
            return response.data;
        },
    });

export const useResetPasswordMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.RESET_PASSWORD, data);
            return response.data;
        },
    });

export const useForgotPasswordMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.FORGOT_PASSWORD, data);
            return response.data;
        },
    });

export const useLogoutMutation = () =>
    useMutation({
        mutationFn: async () => {
            const response = await axios.delete(URLS.LOGOUT);
            return response.data;
        },
    });
