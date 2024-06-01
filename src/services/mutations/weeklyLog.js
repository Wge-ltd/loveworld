import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// WeeklyLog
export const useUpdateInternLog = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.INTERN_LOG_UPDATE, data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["intern-log"] });
        },
    });
};

export const useUpdateCompanyLog = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.COMPANY_LOG_UPDATE(id), data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["company-log", id] });
        },
        enabled: !!id,
    });
};
