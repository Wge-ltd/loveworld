import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// Dashboard
export const useUpdateIntern = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.patch(URLS.UPDATE_INTERN_PROFILE(id), data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["intern", id] });
        },
        enabled: !!id,
    });
};
