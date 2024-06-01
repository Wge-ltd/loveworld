import { useQuery } from "@tanstack/react-query";

import { axios } from "../axios";
import URLS from "../urls";

// WeeklyLog
export const useGetInternLog = () => {
    const getInternLog = useQuery({
        queryKey: ["intern-log"],
        queryFn: async () => {
            const res = await axios.get(URLS.INTERN_LOG);
            return res?.data;
        },
    });

    return getInternLog;
};

export const useGetCompanyLog = (id) => {
    const getCompanyLog = useQuery({
        queryKey: ["company-log", id],
        queryFn: async () => {
            const res = await axios.get(URLS.COMPANY_LOG(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getCompanyLog;
};
