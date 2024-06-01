import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// Application
export const useUpdateInternApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.INTERN_UPDATE_APPLICATION, data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["interns-applications"] });
        },
    });
};

export const useCompanyCreateApplication = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.COMPANY_CREATE_APPLICATION, data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["companies-applications"] });
        },
    });
};
