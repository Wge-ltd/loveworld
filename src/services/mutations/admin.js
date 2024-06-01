import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// Admin Intern
export const useUpdateSingleIntern = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.UPDATE_INTERN(id), data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["intern", id] });
        },
        enabled: !!id,
    });
};

export const useDeleteIntern = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axios.delete(URLS.DELETE_INTERN(id));
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["interns"] });
        },
        enabled: !!id,
    });
};

// Admin Company
export const useUpdateSingleCompany = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.UPDATE_COMPANY(id), data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["company", id] });
        },
        enabled: !!id,
    });
};

export const useDeleteCompany = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axios.delete(URLS.DELETE_COMPANY(id));
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["companies"] });
        },
        enabled: !!id,
    });
};

// Admin Applications
export const useMatchApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.MATCH_INTERN, data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["interns"] });
        },
    });
};
