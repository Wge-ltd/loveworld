import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// Tasks
export const useCompanyCreateTask = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.COMPANY_CREATE_TASK(id), data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["intern-tasks"] });
        },
        enabled: !!id,
    });
};
