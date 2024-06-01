import { useQuery } from "@tanstack/react-query";

import { axios } from "../axios";
import URLS from "../urls";

// Tasks
export const useGetInternTasks = () => {
    const getInternTasks = useQuery({
        queryKey: ["intern-tasks"],
        queryFn: async () => {
            const res = await axios.get(URLS.INTERN_TASKS);
            return res?.data;
        },
    });

    return getInternTasks;
};
