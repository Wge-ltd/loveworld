import { useMutation, useQueryClient } from "@tanstack/react-query";

import URLS from "../urls";
import { axios } from "../axios";

// Payment
export const usePayment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.PAYMENT, data);
            return response.data;
        },
        onSuccess: async () => {
            return await queryClient.invalidateQueries({ queryKey: ["companies"] });
        },
    });
};
